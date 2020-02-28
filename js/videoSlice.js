
import { Message, Loading } from 'element-ui'
import { generateUuid } from "../utils/uuid";
import request from '../utils/request'
import apiConfig from '../config/apiConfig'
import uploadConfig from "../config/uploadConfig.js";

let insertVideo, uploadLoading;
const fileTypeMap = {
    "video/mp4": ".mp4",
    "audio/mp3": ".mp3"
};

function getVideoId(KEY) {
    return request.get(`${apiConfig.basePageApi.ossInit}?key=${KEY}`);
}
function getVideoTags(reader, KEY, uploadId) {
    const Unit = uploadConfig.SLICE_UNIT,
        { result } = reader,
        sliceNum = Math.ceil(result.byteLength / Unit);
    if (!uploadId) return;
    let slice,
        promises = [];
    for (let i = 0; i < sliceNum; i++) {
        slice = result.slice(i * Unit, (i + 1) * Unit);
        let fd = new FormData();
        fd.append("file", new File([slice], KEY + i));
        fd.append("key", KEY);
        fd.append("uploadId", uploadId);
        fd.append("partNumber", i + 1);
        promises.push(request.postFile(`${apiConfig.basePageApi.ossPart}`, fd));
    }
    return Promise.all(promises);
}
async function postSlices(reader, file) {
    const KEY = generateUuid() + fileTypeMap[file.type];
    console.log(KEY)
    let uploadId;
    let res = await getVideoId(KEY);
    if (!res || !res.data) return;
    uploadId = res.data;
    let ress = await getVideoTags(reader, KEY, uploadId);
    if (!Array.isArray(ress)) return;
    let tags = ress.map(item => {
        if (!item || !item.data) return {};
        return {
            partNumber: item.data.partNumber,
            etag: item.data.etag
        };
    });
    request
        .post(`${apiConfig.basePageApi.ossComplete}`, { tags, key: KEY, uploadId })
        .then(res => {
            if (res && res.data) {
                insertVideo && (insertVideo(res.data));
                uploadLoading.close()
                Message.success('音/视频上传成功！')
            } else {
                Message.error(err && err.message ? err.message : '音/视频上传失败！')
                uploadLoading.close()
            }
        })
}
function uploadVideo(files, insert) {
    if (files.length === 0) return;
    let file = files[0],
        size = file.size;

    if (size > 5 * 1024 * 1024 * 1024) {
        Message.warning("视频不能超过5G！");
        return;
    }
    insertVideo = insert
    if (size && size > 5 * 1024 * 1024) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.addEventListener("load", e => {
            if (!reader || !reader.result) return;
            uploadLoading = Loading.service({
                lock: true,
                text: `音视频上传中,请稍等（大小：${Math.ceil(size / 1024 / 1024)}M）...`,
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
            postSlices(reader, file);
        });
    } else {
        let fd = new FormData();
        fd.append("file", file);
        uploadLoading = Loading.service({
            lock: true,
            text: `音视频上传中,请稍等（大小：${Math.ceil(size / 1024 / 1024)}M）...`,
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        })
        request
            .post(apiConfig.basePageApi.uploadFile, fd)
            .then(res => {
                if (res.data) {
                    insertVideo(res.data);
                    Message.success('音/视频上传成功！')
                    uploadLoading.close()
                } else {
                    uploadLoading.close()
                    Message.error(e && e.message ? e.message : "上传文件失败！");
                }
            })
    }
};
export {
    uploadVideo
}


// npm install --save spark-md5
export function get_filemd5sum(ofile) {
    let file = ofile;
    let tmp_md5;
    let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
        // file = this.files[0],
        chunkSize = 8097152, // Read in chunks of 2MB
        chunks = Math.ceil(file.size / chunkSize),
        currentChunk = 0,
        spark = new SparkMD5.ArrayBuffer(),
        fileReader = new FileReader();

    fileReader.onload = function (e) {
        // console.log('read chunk nr', currentChunk + 1, 'of', chunks);
        spark.append(e.target.result); // Append array buffer
        currentChunk++;
        let md5_progress = Math.floor((currentChunk / chunks) * 100);

        console.log(file.name + "  正在处理，请稍等," + "已完成" + md5_progress + "%");
        let handler_info = document.getElementById("handler_info");
        let progressbar = document.getElementsByClassName("progressbar")[0];
        handler_info.innerHTML = file.name + "  正在处理，请稍等," + "已完成" + md5_progress + "%"
        progressbar.value = md5_progress;
        if (currentChunk < chunks) {
            loadNext();
        } else {
            tmp_md5 = spark.end();
            filemd5 = tmp_md5;
            console.log(tmp_md5)
            handler_info.innerHTML = file.name + "的MD5值是：" + tmp_md5;
        }
    };

    fileReader.onerror = function () {
        console.warn('oops, something went wrong.');
    };

    function loadNext() {
        let start = currentChunk * chunkSize,
            end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;
        fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
    }

    loadNext();
}

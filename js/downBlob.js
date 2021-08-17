export function  downloadFile(res) {
    let link = document.createElement('a');
    link.style.display = 'none';
    let url = URL.createObjectURL((new Blob([res.data])));
    link.download = decodeURIComponent(res.headers['content-disposition'].split('filename=')[1]);
    link.href = url;
    link.click();
}

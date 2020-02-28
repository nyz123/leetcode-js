export function generateUuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

export function getBDUuid(e) {
        e || (e = 8);
        for (var n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", r = "", t = 0; t < e; t++) {
            var o = Math.floor(Math.random() * n.length);
            r += n.substring(o, o + 1)
        }
        return r
}


export function copyValue(value) {
  if (document.execCommand("copy")) {
    let inputNode = document.createElement("input");
    inputNode.setAttribute("id", "market_copy_input");
    inputNode.value = value;
    document.body.appendChild(inputNode);
    document.getElementById("market_copy_input").select();
    document.execCommand("copy");
    document.body.removeChild(
      document.getElementById("market_copy_input")
    );
    console.log('复制成功')
  } else {
    console.log('您的系统不支持该功能，请使用ctrl + c 复制')
  }
}

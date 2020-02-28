

import { Message, MessageBox, Loading } from 'element-ui';




var tableToExcel = (function() {
  var uri = "data:application/vnd.ms-excel;base64,",
    template =
      '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
    base64 = function(s) {
      return window.btoa(unescape(encodeURIComponent(s)));
    },
    format = function(s, c) {
      return s.replace(/{(\w+)}/g, function(m, p) {
        return c[p];
      });
    };
  return function(table, name, filename) {
    if (!table.nodeType) table = document.getElementById(table);
    var ctx = { worksheet: name || "Worksheet", table: table.innerHTML };

    document.getElementById("dlink").href = uri + base64(format(template, ctx));
    document.getElementById("dlink").download = filename;
    document.getElementById("dlink").click();
  };
})();
///////////////////////
function saveAs(obj, fileName) {
  const tmpa = document.createElement('a');
  tmpa.download = fileName || '下载';
  tmpa.href = URL.createObjectURL(obj); // 绑定a标签
  tmpa.click(); // 模拟点击实现下载
  setTimeout(() => {
    // 延时释放
    URL.revokeObjectURL(obj); // 用URL.revokeObjectURL()来释放这个object URL
  }, 100);
}

function s2ab(s) {
  if (typeof ArrayBuffer !== 'undefined') {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff; // eslint-disable-line
    return buf;
  }
  const buf = new Array(s.length);
  for (let i = 0; i !== s.length; ++i) buf[i] = s.charCodeAt(i) & 0xff; // eslint-disable-line
  return buf;
}

export const outputFile = ({ data, name, successMsg }) => {
  const loadingInstance = Loading.service({
    text: '导出中...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.8)'
  });
  import(/* webpackChunkName: "xlsx" */ 'xlsx')
    .then(XLSX => {
      const wopts = { bookType: 'xlsx', bookSST: false, type: 'binary' };
      const wb = { SheetNames: ['Sheet1'], Sheets: {}, Props: {} };
      wb.Sheets.Sheet1 = XLSX.utils.json_to_sheet(data); // 通过json_to_sheet转成单页(Sheet)数据
      saveAs(
        new Blob([s2ab(XLSX.write(wb, wopts))], {
          type: 'application/octet-stream'
        }),
        `${name}.xlsx`
      );
    })
    .then(data => {
      loadingInstance && loadingInstance.close();
      Message.success({
        message: successMsg || '导出成功！'
      });
      return data;
    })
    .catch(e => {
      loadingInstance && loadingInstance.close();
      Message.error({
        message: '导出失败！'
      });
    });
};

// e:input[file]的change事件,args为配置参数
export const resolveXLSX = e => {
  const loadingInstance = Loading.service({
    text: '导入中...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.8)'
  });
  return new Promise((resolve, rejected) => {
    const files = e.target.files;
    const fileReader = new FileReader();
    for (let i = 0; i < files.length; i++) {
      if (!/\.(xlsx|xls)$/.test(files[i].name)) {
        throw new Error('必须上传excle文件！');
      }
    }
    import(/* webpackChunkName: "xlsx" */ 'xlsx').then(XLSX => {
      fileReader.onload = ev => {
        try {
          const data = ev.target.result;
          const workbook = XLSX.read(data, {
            type: 'binary'
          }); // 以二进制流方式读取得到整份excel表格对象
          let dataList = []; // 存储获取到的数据
          for (const sheet in workbook.Sheets) {
            // eslint-disable-line
            if (workbook.Sheets.hasOwnProperty(sheet)) {
              // eslint-disable-line
              dataList = dataList.concat(
                XLSX.utils.sheet_to_json(workbook.Sheets[sheet])
              );
              break; // 如果只取第一张表，就取消注释这行
            }
          }
          resolve(dataList);
        } catch (error) {
          rejected(error);
        }
      };
      // 以二进制方式打开文件
      if (files[0]) fileReader.readAsBinaryString(files[0]);
    });
  })
    .then(data => {
      loadingInstance && loadingInstance.close();
      Message.success({
        message: '导入成功！'
      });
      return data;
    })
    .catch(e => {
      loadingInstance && loadingInstance.close();
      Message.error({
        message: e.message || '导入失败！'
      });
      return Promise.reject(e);
    });
};

/////////////////////////////////
var students = [{
    "name": "小明1",
    "age": "6",
    "sex": "男",
    "height": "60"
}, {
    "name": "小明2",
    "age": "7",
    "sex": "男",
    "height": "70"
}, {
    "name": "小明3",
    "age": "8",
    "sex": "男",
    "height": "80"
}];

// 导出生成json文件
32     function downloadJson(data) {
33         var blob = new Blob([JSON.stringify(data)], { type: "" });
34         saveAs(blob, "hello.json");
35     }
36     // 导出生成文本
37     function downloadText(data) {
38         var blob = new Blob([JSON.stringify(data)], { type: "text/plain;charset=utf-8" });
39         saveAs(blob, "hello.txt");
40     }

function downloadExl(data, type) {

    var keys = Object.keys(data[0]);
    var firstRow = {};
    keys.forEach(function (item) {
        firstRow[item] = item;
    });
    data.unshift(firstRow);

    var content = {};

    // 把json格式的数据转为excel的行列形式
    var sheetsData = data.map(function (item, rowIndex) {
        return keys.map(function (key, columnIndex) {
            return Object.assign({}, {
                value: item[key],
                position: (columnIndex > 25 ? getCharCol(columnIndex) : String.fromCharCode(65 + columnIndex)) + (rowIndex + 1),
            });
        });
    }).reduce(function (prev, next) {
        return prev.concat(next);
    });

    sheetsData.forEach(function (item, index) {
        content[item.position] = { v: item.value };
    });

    //设置区域,比如表格从A1到D10,SheetNames:标题，
    var coordinate = Object.keys(content);
    var workBook = {
        SheetNames: ["helloSheet"],
        Sheets: {
            "helloSheet": Object.assign({}, content, { "!ref": coordinate[0] + ":" + coordinate[coordinate.length - 1] }),
        }
    };
    //这里的数据是用来定义导出的格式类型
    var excelData = XLSX.write(workBook, { bookType: "xlsx", bookSST: false, type: "binary" });
    var blob = new Blob([string2ArrayBuffer(excelData)], { type: "" });
    saveAs(blob, "hello.xlsx");
}
//字符串转字符流
function string2ArrayBuffer(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}
// 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
function getCharCol(n) {
    let temCol = "",
        s = "",
        m = 0
    while (n > 0) {
        m = n % 26 + 1
        s = String.fromCharCode(m + 64) + s
        n = (n - m) / 26
    }
    return s
}

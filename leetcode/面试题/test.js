function a() {
  setTimeout(() => {
    console.log(1);
  }, 0);
  let c = new Promise((res, rej) => {
    console.log(2);
    res();
  }).then(() => {
    console.log(3);
  });
  console.log(4);
}
a()

function hello() {
  console.log("My name is Rayan!");
  return "hello";
}

function fileNameFromContentDisposition(contentDisposition) {
  let fileName = "file";
  const fileNameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
  const matches = fileNameRegex.exec(contentDisposition);
  if (matches != null && matches[1]) {
    fileName = matches[1].replace(/['"]/g, "");
  }
  return fileName;
}

module.exports = hello;

const excelToJson = require("convert-excel-to-json");
var fs = require("fs");

const inputFile = "mou.xlsx";
const outputFile = "mou.json";

const result = excelToJson({
  sourceFile: inputFile,
  header: {
    rows: 1
  },
  columnToKey: {
    A: "{{A1}}",
    B: "{{B1}}",
    C: "{{C1}}",
    D: "{{D1}}",
    E: "{{E1}}",
    F: "{{F1}}",
    G: "{{G1}}",
    H: "{{H1}}",
    I: "{{I1}}",
    J: "{{J1}}",
    K: "{{K1}}",
    L: "{{L1}}"
  }
});

var jsonData = JSON.stringify(result);

fs.writeFile(outputFile, jsonData, function(err) {
  if (err) {
    console.log(err);
  }
  console.log("mou json file has been created.");
});

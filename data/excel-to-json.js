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

var mou = {
  code: "",
  country: "",
  uniOrg: {
    name: "",
    abbreviation: "",
    otherName: ""
  },
  facDep: "",
  date: {
    signing: 0,
    expiry: 0,
    updated: 0
  },
  cooperation: {
    level: "",
    type: ""
  },
  note: ""
};

var newResult = { MOU: [] };

for (var n in result.MOU) {
  var i = result.MOU[n];
  if (i.code && i.country) {
    console.log("if");
    var tmp = mou;

    tmp.code = i.code;
    tmp.country = i.country;
    tmp.uniOrg = {
      name: i.uniOrg,
      abbreviation: i.abbreviation || "",
      otherName: i.otherName || ""
    };
    tmp.facDep = i.facDep || "";
    tmp.date = {
      signing: i.signing || 0,
      expiry: i.expiry || 0,
      updated: i.updated || 0
    };
    tmp.cooperation = {
      level: i.level || "",
      type: i.type || ""
    };
    tmp.note = i.note || "";

    newResult.MOU.push(tmp);
  }
}

console.log(newResult);

// var jsonData = JSON.stringify(result);
var jsonData = JSON.stringify(newResult);

fs.writeFile(outputFile, jsonData, function(err) {
  if (err) {
    console.log(err);
  }
  console.log("mou json file has been created.");
});

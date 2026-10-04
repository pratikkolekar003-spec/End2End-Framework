const xlsx = require('xlsx');
const path = require('path');

class ExcelReader {
  static readData(fileName, sheetName = null) {
    const filePath = path.join(__dirname, '..', 'testData', fileName);
    const workbook = xlsx.readFile(filePath);
    const targetSheetName = sheetName || workbook.SheetNames[0];
    const worksheet = workbook.Sheets[targetSheetName];
    return xlsx.utils.sheet_to_json(worksheet);
  }
}

module.exports = { ExcelReader };

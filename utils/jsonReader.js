const fs = require('fs');
const path = require('path');

class JSONReader {
  static readData(fileName) {
    const filePath = path.join(__dirname, '..', 'testData', fileName);
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }
    const rawData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(rawData);
  }
}

module.exports = { JSONReader };

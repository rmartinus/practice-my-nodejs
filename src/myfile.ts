const fs = require('fs');
const fsp = require('fs').promises;

class MyFile {
  constructor() {}

  public readFileSync(filepath: string) {
    return fs.readFileSync(filepath, 'utf8');
  }

  public async readFile(filepath: string) {
    return fsp.readFile(filepath, 'utf8');
  }
}

export default MyFile;

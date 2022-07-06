const fs = require('fs');
const fsp = require('fs').promises;

class MyFile {
  constructor() {}

  public readFileSync(filepath: string) {
    const content = fs.readFileSync(filepath, 'utf8');
    console.log('content:', content);
  }

  public async readFile(filepath: string) {
    return fsp.readFile(filepath, 'utf8');
  }
}

export default MyFile;

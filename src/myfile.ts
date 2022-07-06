const fs = require('fs');

class MyFile {
  constructor() {}

  public ReadFile(filepath: string) {
    const content = fs.readFileSync(filepath, 'utf8');
    console.log('content:', content);
  }
}

export default MyFile;

import MyFile from '../src/myfile';
const path = require('path');

test('reads from a file correctly', () => {
  const myPath = path.join('assets', 'test.txt');
  const myFile = new MyFile();
  myFile.readFileSync(myPath);
});

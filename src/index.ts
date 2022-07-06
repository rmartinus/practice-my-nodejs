import MyFile from './myfile';

const path = require('path');

const myFile = new MyFile();
const myPath = path.join('assets', 'test.txt');
const myPathErr = path.join('assets', 'test1.txt');
const content = myFile.readFileSync(myPath);
console.log('content', content);

myFile
  .readFile(myPath)
  .then(r => console.log('done reading file promise:', r))
  .catch(err => console.log('error promise:', err));

myFile
  .readFile(myPathErr)
  .then(r => console.log('done reading file promise:', r))
  .catch(err => console.log('error promise:', err));

async function read() {
  try {
    const content = await myFile.readFile(myPath);
    console.log('content using async:', content);
  } catch (err) {
    console.error(err);
  }
}
read();

async function readErr() {
  try {
    const content = await myFile.readFile(myPathErr);
    console.log('content using async:', content);
  } catch (err) {
    console.error(err);
  }
}
readErr();

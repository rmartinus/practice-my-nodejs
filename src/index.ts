import MyFile from './myfile';

const path = require('path');

const myFile = new MyFile();
myFile.ReadFile(path.join('assets', 'test.txt'));

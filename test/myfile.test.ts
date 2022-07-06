import MyFile from '../src/myfile';
const path = require('path');

describe('Read file', () => {
  it('should read from a file correctly', () => {
    const myPath = path.join('assets', 'test.txt');
    const myFile = new MyFile();
    const content = myFile.readFileSync(myPath);

    expect(content).toBe('hello there\n');
  });

  it('should error out given a non existent file', () => {
    const myPath = path.join('assets', 'test2.txt');
    const myFile = new MyFile();
    try {
      myFile.readFileSync(myPath);
    } catch (err) {
      expect(JSON.stringify(err)).toBe(
        '{"errno":-2,"syscall":"open","code":"ENOENT","path":"assets/test2.txt"}'
      );
    }
  });

  it('should async read from a file correctly', async () => {
    const myPath = path.join('assets', 'test.txt');
    const myFile = new MyFile();
    const content = await myFile.readFile(myPath);

    expect(content).toBe('hello there\n');
  });

  it('should async error out given a non existent file', async () => {
    const myPath = path.join('assets', 'test2.txt');
    const myFile = new MyFile();
    try {
      await myFile.readFile(myPath);
    } catch (err) {
      expect(JSON.stringify(err)).toBe(
        '{"errno":-2,"code":"ENOENT","syscall":"open","path":"assets/test2.txt"}'
      );
    }
  });
});

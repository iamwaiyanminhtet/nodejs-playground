const fs = require('fs');
const fsPromise = require('node:fs/promises');

// Rename Files
fs.rename('example/rename.js', 'example/fs-module.js', err => {
  if (err) {
    return console.error(err);
  }
  // done
});

// fs.rename('currentNamePath', 'changeNamePath', err => {})

fs.open('example/anotherSample.txt', 'w', (err, file) => {
  if(err) console.log(err)
  console.log('saved');
})

// fs.open('filePath', 'w', (err, file) => {})
// create new file with writing permisson

// write files
const content = "Hello World"
async function example() {
  try {
    await fsPromise.writeFile('example/sample.txt', content);
  } catch (err) {
    console.log(err);
  }
}
example();

// fs.writeFile('filePath', Content, (err) => {})
// create new file if doesnt exist, replace with new file if exists

const appendContent = "Another Hello World"
fs.appendFile('example/sample.txt', appendContent, err => {
  console.log(err)
})

// fs.appendFile('filePath', appendContent, (err) => {})
// append content to the existing file, if not exist create new file

// read file

fs.readFile('example/sample.txt', 'utf-8', (err, data) => {
  if(err) console.log(err)
  console.log(data)
})

// fs.readFile('filePath', 'utf-8', (err,data)=>{})

fs.unlink('example/anotherSample.txt', err => {
  if(err) console.log(err)
  console.log('deleted')
})
// fs.unlink('filePath', err => {})
// delete file
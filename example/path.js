const path = require('path');

console.log(path.basename(__filename))
// file name

console.log(path.extname(__filename))
// get the extension of the file eg .js

console.log(path.parse(__filename))
// give the obj with info {root,dir,base,ext,name}

console.log(path.join(__dirname, 'test', 'Hello.js'))
// currentFolderPath/test/Hello.js
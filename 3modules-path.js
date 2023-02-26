const path = require ('path');

// a platform specific property that is a separator.
console.log(path.sep)

// joins a sequence of path segments
// like joining folders and files in another folder.
const filePath = path.join('/content/','subfolder','text.txt')
console.log(filePath)

// how to access the only the last portion of the path
const base = path.basename(filePath);
console.log(base)

// returns an or resolves an absolute path 
const absolute = path.resolve(__dirname, 'content','subfolder','text.txt')
console.log(absolute);
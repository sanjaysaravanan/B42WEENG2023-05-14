const fs = require('fs');

// fs.mkdir('samples-two', () => { });

// fs.mkdirSync('samples-three');

// fs.readFile('./Detail.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data);
//   }
// });

// const dataString = fs.readFileSync('./Details.txt', 'utf-8');
// console.log(dataString)

// fs.writeFile('sample.txt', 'Hi Hello, I am a test string for testing', () => {

// });

// fs.writeFileSync('sample-one.txt', 'Hi Hello, I am a test string for testing');

let filesCount = process.argv[2]; // taking cmd line arguments


// if (!fs.existsSync('./samples')) {
//   fs.mkdirSync('samples');
// }
// fs.mkdirSync('samples'); // make this to create folder if not the folder exists

// while (filesCount--) {
//   fs.writeFileSync(`./samples/sample-${filesCount}.txt`, `Hi Hello, I am conten in file ${filesCount}`);
// }

// fs.appendFile('./sample-one.txt', '\nContent Getting Appended', () => { });


// fs.unlink('./sample-one.txt', () => { });


const event = new Date();
console.log(event.toString());
// Note: your timezone may vary

console.log(event.toISOString());// most appropriate one

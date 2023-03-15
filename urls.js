// declare packages
const fs = require('fs');
const axios = require('axios');
const url = require('url');

// retrieve contents of file 
function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// writes (html) data to given file path
function writeFile(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

async function downloadAndSave(urlString) {
  try {
    // retrieve hostname to save file as
    const parsedUrl = new url.URL(urlString);
    const hostname = parsedUrl.hostname;
    // retrieve html data from urlString 
    const response = await axios.get(urlString);
    const data = response.data;
    await writeFile(hostname, data);
    console.log(`Wrote to ${hostname}`);
  } catch (error) {
    console.error(`Couldn't download ${urlString}`);
  }
}

async function main() {
  const inputFilePath = process.argv[2];
  try {
    // retrieve inputFile contents and split URLs
    const fileContent = await readFile(inputFilePath);
    const urls = fileContent.split('\n');
    // for each URL, attempt to save HTML data 
    for (const urlString of urls) {
      if (urlString.trim() !== '') {
        await downloadAndSave(urlString);
      }
    }
  } catch (err) {
    console.error(`Error reading file: ${err}`);
  }
}

main();

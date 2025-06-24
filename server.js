npm install googleapis

const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

// Configuration
const KEYFILE = path.join(__dirname, 'service.json');
const FOLDER_ID = 'YOUR_DRIVE_FOLDER_ID';  // replace with your folder's ID
const FILE_PATH = path.join(__dirname, 'users-crud-sequelize.zip');

async function authorize() {
  const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILE,
    scopes: ['https://www.googleapis.com/auth/drive.file'],
  });
  return google.drive({ version: 'v3', auth });
}

async function upload() {
  const drive = await authorize();
  const res = await drive.files.create({
    requestBody: {
      name: path.basename(FILE_PATH),
      parents: [FOLDER_ID],
    },
    media: {
      mimeType: 'application/zip',
      body: fs.createReadStream(FILE_PATH),
    },
  });
  console.log('Upload complete, file ID:', res.data.id);
}

upload().catch(console.error);

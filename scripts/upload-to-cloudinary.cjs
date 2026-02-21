const https = require('https');
const fs = require('fs');
const path = require('path');

const CLOUD_NAME = 'dkn6tnxao';
const API_KEY = '988353976224292';
const API_SECRET = 'q3ldOQqluAOxyMuOVr8qY2I0mAI';

function uploadToCloudinary(filePath, folder, publicId) {
  return new Promise((resolve, reject) => {
    const timestamp = Math.floor(Date.now() / 1000);
    const crypto = require('crypto');

    const paramsToSign = `folder=${folder}&public_id=${publicId}&timestamp=${timestamp}${API_SECRET}`;
    const signature = crypto.createHash('sha1').update(paramsToSign).digest('hex');

    const fileData = fs.readFileSync(filePath);
    const base64Data = fileData.toString('base64');
    const mimeType = filePath.endsWith('.png') ? 'image/png' : 'image/jpeg';
    const dataUri = `data:${mimeType};base64,${base64Data}`;

    const postData = new URLSearchParams({
      file: dataUri,
      api_key: API_KEY,
      timestamp: timestamp.toString(),
      signature: signature,
      folder: folder,
      public_id: publicId,
    }).toString();

    const options = {
      hostname: 'api.cloudinary.com',
      path: `/v1_1/${CLOUD_NAME}/image/upload`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.error) {
            reject(new Error(json.error.message));
          } else {
            resolve(json);
          }
        } catch (e) {
          reject(new Error(`Parse error: ${data.substring(0, 200)}`));
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function uploadScreenshots() {
  const screenshotDir = path.join(__dirname, '..', 'screenshots');
  const files = fs.readdirSync(screenshotDir).filter(f => f.endsWith('.png'));

  console.log(`Found ${files.length} screenshots to upload...\n`);

  for (const file of files) {
    const filePath = path.join(screenshotDir, file);
    const publicId = file.replace('.png', '');

    console.log(`Uploading ${file} -> reddust/portfolio/${publicId}...`);
    try {
      const result = await uploadToCloudinary(filePath, 'reddust/portfolio', publicId);
      console.log(`  OK: ${result.secure_url}`);
    } catch (err) {
      console.error(`  FAILED: ${err.message}`);
    }
  }
}

async function uploadWildlifeBackgrounds() {
  const bgDir = path.join(__dirname, '..', 'wildlife-backgrounds');
  if (!fs.existsSync(bgDir)) {
    console.log('No wildlife-backgrounds folder found, skipping.');
    return;
  }

  const files = fs.readdirSync(bgDir).filter(f => /\.(jpg|jpeg|png|tif)$/i.test(f));
  console.log(`\nFound ${files.length} wildlife backgrounds to upload...\n`);

  for (const file of files) {
    const filePath = path.join(bgDir, file);
    const publicId = file.replace(/\.[^.]+$/, '').replace(/[^a-zA-Z0-9_-]/g, '_').substring(0, 60);

    console.log(`Uploading ${file} -> reddust/backgrounds/${publicId}...`);
    try {
      const result = await uploadToCloudinary(filePath, 'reddust/backgrounds', publicId);
      console.log(`  OK: ${result.secure_url}`);
    } catch (err) {
      console.error(`  FAILED: ${err.message}`);
    }
  }
}

const mode = process.argv[2] || 'screenshots';
if (mode === 'screenshots') {
  uploadScreenshots().catch(console.error);
} else if (mode === 'wildlife') {
  uploadWildlifeBackgrounds().catch(console.error);
} else if (mode === 'all') {
  uploadScreenshots().then(() => uploadWildlifeBackgrounds()).catch(console.error);
}

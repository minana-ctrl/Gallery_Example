const fs = require('fs');
const path = require('path');

const linksPath = path.join(__dirname, '..', 'Links.MD');
const imagesPath = path.join(__dirname, '..', 'data', 'images.json');

// Check if Links.MD exists and has content
if (fs.existsSync(linksPath)) {
  const content = fs.readFileSync(linksPath, 'utf-8').trim();
  
  if (content && content.startsWith('[')) {
    try {
      // Validate JSON
      JSON.parse(content);
      // Copy to images.json
      fs.writeFileSync(imagesPath, content);
      console.log('✓ Copied Links.MD to data/images.json');
    } catch (e) {
      console.error('Error: Links.MD contains invalid JSON:', e.message);
      process.exit(1);
    }
  } else {
    console.log('Links.MD is empty or invalid. Please save it first.');
  }
} else {
  console.log('Links.MD not found.');
}


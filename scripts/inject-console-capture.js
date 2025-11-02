const fs = require('fs');
const path = require('path');

const scriptTag = '<script src="/dashboard-console-capture.js"></script>';

function injectScript(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('dashboard-console-capture.js')) {
      if (content.includes('</head>')) {
        content = content.replace('</head>', `${scriptTag}\n</head>`);
      } else if (content.includes('<body>')) {
        content = content.replace('<body>', `<body>\n${scriptTag}`);
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`Injected console capture script into ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

const outDir = path.join(process.cwd(), '.next');
if (fs.existsSync(outDir)) {
  const htmlFiles = fs.readdirSync(outDir)
    .filter(file => file.endsWith('.html'))
    .map(file => path.join(outDir, file));
  
  htmlFiles.forEach(injectScript);
}
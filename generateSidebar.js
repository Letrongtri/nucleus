// generateSidebar.js
const { readdirSync, statSync, writeFileSync } = require('fs');
const { join } = require('path');

function walk(dir, prefix = '') {
  const entries = readdirSync(dir);
  let output = '';

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const isDir = statSync(fullPath).isDirectory();

    if (isDir) {
      output += `${prefix}- ${entry}/\n`;
      output += walk(fullPath, prefix + '  ');
    } else if (entry.endsWith('.md') && entry !== 'README.md' && entry !== '_sidebar.md') {
      const name = entry.replace(/\.md$/, '');
      output += `${prefix}- [${name}](${fullPath.replace(/^docs\//, '').replace(/\.md$/, '')})\n`;
    }
  }

  return output;
}

const sidebar = walk('docs') 
+ '\n- [GitHub Repository](https://github.com/dosullivan557/nucleus)\n'
+ '\n- [Contributing](https://github.com/dosullivan557/nucleus/blob/main/CONTRIBUTING.md)\n'
writeFileSync('docs/_sidebar.md', sidebar);
console.log('✅ _sidebar.md generated');
// generateSidebar.js
import { readdirSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';

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

const sidebar = walk('docs');
writeFileSync('docs/_sidebar.md', sidebar);
console.log('✅ _sidebar.md generated');
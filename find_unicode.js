const fs = require('fs');
const path = require('path');

const dir = './';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let found = false;
for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    const matches = content.match(/[^\x00-\x7F]/g);
    if (matches && matches.length > 0) {
        const uniqueMatches = [...new Set(matches)];
        console.log(`File: ${file}`);
        console.log(`Matches: ${uniqueMatches.join(' ')}`);
        found = true;
    }
}
if (!found) console.log('No non-ASCII characters found.');

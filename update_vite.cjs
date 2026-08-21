const fs = require('fs');
let content = fs.readFileSync('vite.config.ts', 'utf8');
content = content.replace(/    server: \{\n      hmr: false,\n      watch: null,\n    \},\n    \},/g, '    server: {\n      hmr: false,\n      watch: null,\n    }\n');
fs.writeFileSync('vite.config.ts', content);

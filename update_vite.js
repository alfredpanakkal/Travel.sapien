const fs = require('fs');
const content = fs.readFileSync('vite.config.ts', 'utf8');
const updated = content.replace(/server: \{[\s\S]*?\},/g, 'server: {\n      hmr: false,\n      watch: null,\n    },');
fs.writeFileSync('vite.config.ts', updated);

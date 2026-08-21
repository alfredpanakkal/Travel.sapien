const fs = require('fs');

let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

// We'll use regex to replace all elements after the first one in the arrays.

function keepOne(arrayRegex) {
  // arrayRegex should match from the start of the array `[` up to the end `];`
  // Actually, let's just parse the TS or use simpler string manipulation
}

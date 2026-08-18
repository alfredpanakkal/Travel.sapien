const https = require('https');
https.get('https://api.allorigins.win/get?url=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCE7bljZt0QWpnA8grkEWJvw', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      const html = json.contents;
      const subMatch = html.match(/"subscriberCountText":\{"accessibility":\{"accessibilityData":\{"label":"(.*?)"\}\},"simpleText":"(.*?)"\}/);
      const videoMatch = html.match(/"videoCountText":\{"runs":\[\{"text":"(.*?)"\}\]/);
      console.log('SubMatch:', subMatch ? subMatch[2] : 'Not found');
      console.log('VideoMatch:', videoMatch ? videoMatch[1] : 'Not found');
    } catch (e) {
      console.error(e);
    }
  });
});

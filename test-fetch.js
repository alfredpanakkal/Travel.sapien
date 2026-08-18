fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.youtube.com/channel/UCE7bljZt0QWpnA8grkEWJvw'))
  .then(r => r.json())
  .then(d => {
    const html = d.contents;
    const subMatch = html.match(/"subscriberCountText":\{"accessibility":\{"accessibilityData":\{"label":"(.*?)"\}\},"simpleText":"(.*?)"\}/);
    const videoMatch = html.match(/"videoCountText":\{"runs":\[\{"text":"(.*?)"\}\]/);
    console.log('Sub:', subMatch ? subMatch[2] : null);
    console.log('Vid:', videoMatch ? videoMatch[1] : null);
  })
  .catch(console.error);

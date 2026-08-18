import axios from 'axios';
async function test() {
  try {
    const res = await axios.get('https://www.youtube.com/channel/UCE7bljZt0QWpnA8grkEWJvw', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    });
    const html = res.data;
    const subMatch = html.match(/"subscriberCountText":\{"accessibility":\{"accessibilityData":\{"label":"(.*?)"\}\},"simpleText":"(.*?)"\}/);
    const videoMatch = html.match(/"videoCountText":\{"runs":\[\{"text":"(.*?)"\}\]/);
    console.log('Sub:', subMatch ? subMatch[2] : null);
    console.log('Vid:', videoMatch ? videoMatch[1] : null);
  } catch (e) {
    console.error(e.message);
  }
}
test();

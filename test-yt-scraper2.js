import axios from 'axios';
async function test() {
  const res = await axios.get('https://www.youtube.com/channel/UCE7bljZt0QWpnA8grkEWJvw', {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36', 'Accept-Language': 'en-US,en;q=0.9' }
  });
  const html = res.data;
  console.log('subscriberCountText exists:', html.includes('subscriberCountText'));
  console.log('videoCountText exists:', html.includes('videoCountText'));
  
  if (html.includes('subscriberCountText')) {
    const idx = html.indexOf('subscriberCountText');
    console.log(html.substring(idx, idx + 100));
  }
}
test();

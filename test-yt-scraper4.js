import axios from 'axios';
async function test() {
  const res = await axios.get('https://www.youtube.com/channel/UCE7bljZt0QWpnA8grkEWJvw', {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  const html = res.data;
  const matchSub = html.match(/(\d+(?:\.\d+)?[KM]?\s+subscribers?)/i);
  const matchVid = html.match(/(\d+\s+videos?)/i);
  console.log("Sub:", matchSub ? matchSub[1] : "not found");
  console.log("Vid:", matchVid ? matchVid[1] : "not found");
}
test();

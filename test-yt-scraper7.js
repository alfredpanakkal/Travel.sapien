import axios from 'axios';
async function test() {
  const res = await axios.get('https://www.youtube.com/channel/UCE7bljZt0QWpnA8grkEWJvw', {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  const html = res.data;
  const jsonMatch = html.match(/var ytInitialData = (\{.*?\});/);
  if (!jsonMatch) return console.log("No initial data");
  
  const data = JSON.parse(jsonMatch[1]);
  
  // deep search for URLs
  let urls = new Set();
  function findUrls(obj) {
    if (typeof obj === 'string') {
      if (obj.includes('yt3.googleusercontent.com') || obj.includes('yt3.ggpht.com')) urls.add(obj);
    } else if (typeof obj === 'object' && obj !== null) {
      for (const key in obj) {
        if (key === 'url' && typeof obj[key] === 'string' && (obj[key].includes('yt3.googleusercontent.com') || obj[key].includes('yt3.ggpht.com'))) {
          urls.add(obj[key]);
        } else {
          findUrls(obj[key]);
        }
      }
    }
  }
  findUrls(data.header);
  console.log("URLs found in header:", Array.from(urls));
}
test();

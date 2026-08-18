import axios from 'axios';
async function test() {
  const res = await axios.get('https://www.youtube.com/channel/UCE7bljZt0QWpnA8grkEWJvw', {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  const html = res.data;
  
  let subscribers = "0";
  let videos = "0";
  let name = "Travel Sapien";
  let avatar = "";
  
  const matchSub = html.match(/"subscriberCountText":\{.*?"text":"(.*?) subscribers"/i);
  if (matchSub) subscribers = matchSub[1];
  else {
     const subFallback = html.match(/(\d+(?:\.\d+)?[KM]?)\s+subscribers?/i);
     if (subFallback) subscribers = subFallback[1];
  }
  
  const matchVid = html.match(/(\d+)\s+videos?/i);
  if (matchVid) videos = matchVid[1];
  
  const nameMatch = html.match(/<title>(.*?) - YouTube<\/title>/);
  if (nameMatch) name = nameMatch[1];
  
  console.log("Sub:", subscribers);
  console.log("Vid:", videos);
  console.log("Name:", name);
}
test();

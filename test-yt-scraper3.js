import axios from 'axios';
async function test() {
  const res = await axios.get('https://www.youtube.com/channel/UCE7bljZt0QWpnA8grkEWJvw', {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  const jsonMatch = res.data.match(/var ytInitialData = (\{.*?\});/);
  if (jsonMatch) {
    const data = JSON.parse(jsonMatch[1]);
    const header = data.header?.c4TabbedHeaderRenderer || data.header?.pageHeaderRenderer;
    console.log(JSON.stringify(header));
  }
}
test();

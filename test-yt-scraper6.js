import axios from 'axios';
async function test() {
  const res = await axios.get('https://www.youtube.com/channel/UCE7bljZt0QWpnA8grkEWJvw', {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  const html = res.data;
  
  const jsonMatch = html.match(/var ytInitialData = (\{.*?\});/);
  if (jsonMatch) {
    const data = JSON.parse(jsonMatch[1]);
    const header = data.header?.c4TabbedHeaderRenderer || data.header?.pageHeaderRenderer;
    
    // Extract banner
    const banner = header?.banner?.imageBannerViewModel?.image?.sources;
    const bannerUrl = banner ? banner[banner.length - 1].url : null;
    
    // Extract avatar
    let avatarUrl = null;
    // We need to look through the structure to find avatar
    // Try to dump keys of header to find it
    console.log("Banner URL:", bannerUrl);
    
    const pageHeader = data.header?.pageHeaderRenderer;
    if (pageHeader && pageHeader.content?.pageHeaderViewModel) {
      const vm = pageHeader.content.pageHeaderViewModel;
      avatarUrl = vm.image?.decoratedAvatarViewModel?.avatar?.avatarViewModel?.image?.sources?.[0]?.url;
      const subs = vm.metadata?.contentMetadataViewModel?.metadataRows?.[1]?.metadataParts?.[0]?.text?.content;
      const vids = vm.metadata?.contentMetadataViewModel?.metadataRows?.[1]?.metadataParts?.[1]?.text?.content;
      console.log("Subs from VM:", subs);
      console.log("Vids from VM:", vids);
    }
  }
}
test();

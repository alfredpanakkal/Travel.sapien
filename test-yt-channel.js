import ytChannelInfo from "yt-channel-info";
async function test() {
  try {
    const response = await ytChannelInfo.getChannelInfo({ channelId: "UCE7bljZt0QWpnA8grkEWJvw" });
    console.log(response);
  } catch (e) {
    console.error(e);
  }
}
test();

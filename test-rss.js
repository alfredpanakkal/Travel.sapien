fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCE7bljZt0QWpnA8grkEWJvw')
  .then(r => r.json())
  .then(d => console.log(d))

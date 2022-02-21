const webPush = require('web-push');


// console.log(webpush.generateVAPIDKeys())

// var pushSubscription = {
//   "endpoint":"https://fcm.googleapis.com/fcm/send/dIUk3gUdjeE:APA91bEGPBPv6rc5OvJusNml7huM6sLYp6aK4BqPEliuK4fZdQL_iQSikwTboBiQBB47GZa2BfE-vlJ5IB_YMaZrs-mhEpgD3yzbqthYl1rgrGgZ4cAI_qAD-RRGantVJjLOEAag8cQC",
//   "keys":{
//     "p256dh":"BDkYVQfwEdQ8nvBZ9r5izuzcOZB/41Rm6h06CxZeU3LKmMRBoAcxvvv6ULjlsqJTpkY49L/tpl7PoMD/M4d093g=",
//     "auth":"g/E5z7+oFp0rDd7jUsKsXg=="
//   }
// };

var pushSubscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/di5p9kBCU-8:APA91bHP8QlITXinpJKRogMqrXTRJ2tdNZJpnZuoFw2dalKyVIyhdGgKBIKW4C1n-HHygn5XjoRMuKe-48_y02ufHgx8AJNmbhF0ObZfi6uEnlEJpt6CC1_YE9_GCct4iuQ0zuo1_zDV',
  // expirationTime: null,
  keys: {
    p256dh: 'BFuHGwrDz4dBFxe4MeRCxoBGlVlorypeLWFXmhhOOdYBu2up7YtCLqL6jp6Jw-nfeoYmTDPgM3pp0c_wXSgHSds',
    auth: '6taz7uIdeReWFawj5ZsODw'
  }
}

var vapidPublicKey = 'BDMefooZsn5FI4rJtiexlUx8YDxnRiFgziEcYJrkSqOmydyoi7V-N_NqfpvsDrREetI5kRJtJdbrSZ-eO0LMetQ';
var vapidPrivateKey = 'hqMSrNMd8lxQ8sTH-J7n49mgV8F598uRw8D0gDP_b_Y';

var payload = 'Here is a payload!';

var options = {
  vapidDetails: {
    subject: 'mailto:its.arnav.b@gmail.com',
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey
  },
  TTL: 60
};

async function main() {
  try {
    console.log(await webPush.sendNotification(
      pushSubscription,
      payload,
      options
    ));
  } catch (e) {
    console.log(e);
  }
  
}

main();
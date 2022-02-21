var notification
function checkNotificationPromise() {
  try {
    Notification.requestPermission().then();
  } catch(e) {
    return false;
  }
  return true;
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
function askNotificationPermission() {
  // function to actually ask the permissions

  // Let's check if the browser supports notifications
  if (!('Notification' in window)) {
    console.log("This browser does not support notifications.");
  } else {
    if(checkNotificationPromise()) {
      Notification.requestPermission();
    } else {
      Notification.requestPermission();
    }
  }
}
askNotificationPermission()
setInterval(function() {var notification = new Notification("hi")}, 10000)
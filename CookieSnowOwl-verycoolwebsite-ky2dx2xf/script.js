function askNotificationPermission() {
  // function to actually ask the permissions
  function handlePermission(permission) {
    // set the button to shown or hidden, depending on what the user answers
  }

  // Let's check if the browser supports notifications
  if (!('Notification' in window)) {
    console.log("This browser does not support notifications.");
  } else {
    Notification.requestPermission(function(permission) {
      handlePermission(permission);
    });
  }
}
askNotificationPermission()
function annoy() {
  notification = new Notification('haha')
}
setInterval(annoy(), 1000)
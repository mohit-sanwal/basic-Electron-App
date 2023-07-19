// const infoText = document.getElementById('info');
// infoText.innerHTML = `versions are node-${versions.node()} and chrome-${versions.chrome()} and electron- ${versions.electron()}`


// const func = async () => {
//   const response = await window.versions.ping()
//   console.log(response) // prints out 'pong'
// }
// func()

document.getElementById('drag1').ondragstart = (event) => {
  event.preventDefault();
  window.electron.startDrag('drag-and-drop-1.md')
}

// const NOTIFICATION_TITLE = 'Title'
// const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.'
// const CLICK_MESSAGE = 'Notification clicked!'

// new window.Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
//   .onclick = () => { document.getElementById('output').innerText = CLICK_MESSAGE }


const updateOnlineStatus = () => {
  document.getElementById('status').innerHTML = navigator.onLine ? 'online' : 'offline'
}

window.addEventListener('online', updateOnlineStatus)
window.addEventListener('offline', updateOnlineStatus)

updateOnlineStatus()
const { app, BrowserWindow, ipcMain, dialog, globalShortcut, Tray, Menu} = require('electron');
const path = require('path')
const fs = require('fs')
const https = require('https')

  // ADDING MENU
  let isMac = process.platform === 'darwin'
  let templateMwnu = 
  [ 
    ...isMac ? {label: 'Blog', submenu: [{label: 'About'},{label: 'Version'}]} : [],
    {label: 'File'},
    {label: 'operation', 
    submenu: [isMac ? {role: 'close', label: 'Close'} : {role: 'quit', label: 'Quit'},{label: 'Zoom'}]}
  ]
  const menu = Menu.buildFromTemplate(templateMwnu);
  Menu.setApplicationMenu(menu);
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js')
    }
  })
   console.log('hello', path.join(__dirname, 'preload.js'))
  win.loadFile('index.html')
  // add tray
  tray = new Tray('ex.png');
  tray.setToolTip("try electron app..")
  // tray.on('click', ()=> {
  //   win.isVisible() ? win.hide() : win.show()
  // })
  let template = [{label: 'item1', type: 'radio'},{label: 'item2', type: 'radio'}]
  const contextMenu = Menu.buildFromTemplate(template);
  tray.setContextMenu(contextMenu);
  globalShortcut.register('Shift + K', () => {
    dialog.showOpenDialog({
      defaultPath: app.getPath('desktop'),
      buttonLabel: 'select file'
    });
  })


}


const iconName = path.join(__dirname, 'iconForDragAndDrop.png')
const icon = fs.createWriteStream(iconName)

// Create a new file to copy - you can also copy existing files.
fs.writeFileSync(path.join(__dirname, 'drag-and-drop-1.md'), '# First file to test drag and drop')


ipcMain.on('ondragstart', (event, filePath) => {
  event.sender.startDrag({
    file: path.join(__dirname, filePath),
    icon: iconName
  })
})

https.get('https://img.icons8.com/ios/452/drag-and-drop.png', (response) => {
  response.pipe(icon)
})

// const NOTIFICATION_TITLE = 'Basic Notification'
// const NOTIFICATION_BODY = 'Notification from the Main process'

// function showNotification () {
//   new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
// }
// app.whenReady().then(createWindow).then(showNotification);

app.whenReady().then(createWindow);

// app.whenReady().then(() => {
//   ipcMain.handle('ping', () => 'pong')
//   createWindow()

//   app.on('activate', () => {
//     if(BrowserWindow.getAllWindows().length === 0) {createWindow()}
//   })
// })

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
})

app.on('activate', () => {
  if(BrowserWindow.getAllWindows().length === 0) {createWindow()}
})

// resize image

const { app, BrowserWindow} = require('electron');
const path = require('path')
const fs = require('fs')
const https = require('https')

const isDev = process.env.NODE_ENV !== 'production'
const isMac = process.platform === 'darwin'
let mainWindow;
const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: isDev ? 1200: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
        preload: path.join(__dirname, 'preload.js')
    }
  })

if(isDev) {
  mainWindow.webContents.openDevTools()
}

mainWindow.loadFile('renderer/index.html')

}

app.whenReady().then(createMainWindow);



app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
})
  
app.on('activate', () => {
  if(BrowserWindow.getAllWindows().length === 0) {createWindow()}
})

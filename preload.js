const { contextBridge, ipcRenderer } = require('electron')
// const path = require('path')

// contextBridge.exposeInMainWorld('versions', {
//   node: () => process.versions.node,
//   chrome: () => process.versions.chrome,
//   electron: () => process.versions.electron,
//   ping: () => ipcRenderer.invoke('ping'),
//   startDrag: (fileName) => {
//     ipcRenderer.send('ondragstart', fileName)
//   }
  
//   // we can also expose variables, not just functions
// })


contextBridge.exposeInMainWorld('electron', {
 startDrag: (fileName) => {
    ipcRenderer.send('ondragstart', fileName)
  }
})
// const { contextBridge, ipcRenderer } = require('electron')
// // const path = require('path')

// // contextBridge.exposeInMainWorld('versions', {
// //   node: () => process.versions.node,
// //   chrome: () => process.versions.chrome,
// //   electron: () => process.versions.electron,
// //   ping: () => ipcRenderer.invoke('ping'),
// //   startDrag: (fileName) => {
// //     ipcRenderer.send('ondragstart', fileName)
// //   }
  
// //   // we can also expose variables, not just functions
// // })


// contextBridge.exposeInMainWorld('electron', {
//  startDrag: (fileName) => {
//     ipcRenderer.send('ondragstart', fileName)
//   }
// })


const os = require('os');
const path = require('path');
const { contextBridge, ipcRenderer } = require('electron');
const Toastify = require('toastify-js');

contextBridge.exposeInMainWorld('os', {
  homedir: () => os.homedir(),
});

contextBridge.exposeInMainWorld('path', {
  join: (...args) => path.join(...args),
});

contextBridge.exposeInMainWorld('ipcRenderer', {
  send: (channel, data) => ipcRenderer.send(channel, data),
  on: (channel, func) =>
    ipcRenderer.on(channel, (event, ...args) => func(...args)),
});

contextBridge.exposeInMainWorld('Toastify', {
  toast: (options) => Toastify(options).showToast(),
});

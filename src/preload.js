const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  handleTextUpdate: (callback) => ipcRenderer.on("foo", callback),
  // O exponer ipcRenderer completo (menos seguro)
  ipcRenderer: ipcRenderer,
});

"use strict";

const {app, BrowserWindow} = require('electron');

app.whenReady().then(() => {
    const view = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
        }
    });
    view.loadFile('./assets/index.html');
    view.webContents.openDevTools()
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

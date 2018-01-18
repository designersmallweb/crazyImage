const { BrowserWindow, app } = require('electron')

let win

let boot = () => {
    win = new BrowserWindow({
        width: 700,
        height: 500,
        frame: false
    })
    win.loadURL(`file://${__dirname}/index.html`)
}

app.on('ready', boot)
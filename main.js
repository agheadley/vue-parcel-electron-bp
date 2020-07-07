const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 500,
    height: 500,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.setMenuBarVisibility(false);
  win.maximize();

  //win.loadFile('./dist/index.html')   // built vue.app (dist/index.html - chage path to ./ from /)
  win.loadURL('http://localhost:1234');  // dev 
}

app.whenReady().then(createWindow)

const {app, BrowserWindow} = require('electron')
var url = require ('url')
const path = require('path')

let win

function createWindow () {
    // Initialize the window to our specified dimensions
    win = new BrowserWindow(
      {
        width: 1000, 
        height: 600,
        nodeIntegration: false
      }
    )

    // Specify entry point to default entry point of vue.js
      win.loadURL('http://localhost:8080');
    // win.loadURL(url.format({
    //     pathname: path.join(__dirname, 'dist/index.html'),
    //     protocol: 'file:',
    //     slashes: true
    // }))

    // Ouvre le DevTools.
    win.webContents.openDevTools()

    // Remove window once app is closed
    win.on('closed', function () {
    win = null;
    });
}

app.on('ready', createWindow)

//create the application window if the window variable is null
app.on('activate', () => {
  if (win === null) {
  createWindow()
  }
})
//quit the app once closed
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
  app.quit();
  }
});
const {app, BrowserWindow} = require('electron')
var url = require ('url')
const path = require('path')
const Store = require('electron-store')
const store = new Store()
// require('update-electron-app')()
// require('devtron').install()

let win

function createWindow () {
    // Initialize the window to our specified dimensions
    win = new BrowserWindow(
      {
        width: 1000,
        height: 600,
        icon: path.join(__dirname, '../assets/logo.png'),
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
})

// When work progress, show progress bar
function onProgress (progress) {
  // 0 to 1, or -1 to hide the progress bar
  win.setProgressBar(progress || -1)
}

// // When work completes while the app is in the background, show a badge
// var numDoneInBackground = 0
// function onDone () {
//   var dock = electron.app.dock // Badge works only on Mac
//   if (!dock || win.isFocused()) return
//   numDoneInBackground++
//   dock.setBadge('Kactus' + numDoneInBackground)
// }

// // Subscribe to the window focus event. When that happens, hide the badge
// function onFocus () {
//   var numDoneInBackground = 0
//   dock.setBadge('sdsd')
// }
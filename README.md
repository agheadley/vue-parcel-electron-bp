# Simple Electron / Vue / Parcel Boilerplate
*agheadley@gmail.com*


## Creating

*bash*
```
mkdir electron-vue-parcel-bp
cd electron-vue-parcel-bp
npm init

npm install --save-dev electron
npm install --save vue
npm install --save vue-router
npm install --save parcel-bundler
```

*package.json*
```
"scripts": {
    "electron": "electron .",
    "dev": "parcel src/index.html",
    "build": "parcel build src/index.html"
  },
```

## Running

*dev*
```
npm run dev       // localhost:1234
npm run electron  // main.js: win.loadURL('http://localhost:1234')

```

*build*
```
npm run build       // dist/index.html change css/js paths to './' instead of '/'
npm run electron  // main.js: win.loadFile('./dist/index.html')

```






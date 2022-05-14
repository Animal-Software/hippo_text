TODO:

- [x] - save text
- [x] - load text
- [ ] - add new line number based on textarea
- [x] - menu dropdown
- [ ] - change title text to file name if file already exists
- [ ] - custom scrollbar
- [x] - remove window decorations
- [ ] - dark mode

Creating the `create-tauri-app` projects if fairly easy to use and setup.
The process goes smoothly until you get to actually start coding when you realise the vanilla expereince was an after thought.
The project gives you a live reload feature to use but it only works with the rust files.
It's an understandable feature but an annoying one if you're used to quick reloads after every code change from a web development stand. After a hand full of running the same command to reload the app, you start to appreciate the fact that you can at least keep one of the `.rs` files open and do a quick save of it to made the reload happen.

Working with the window itself is another hustle. Adding a custom titlebar would work just perfectly but not if you're using vanilla JS. In this case you're gonna have to figure out how to import the correct `.js` file from the node modules.

The bar to write a useful application with Tauri is as high as it is with rust, since rust is a first class citisan in tauri town. The auto generated documentation of all the rust functions inside tauri are as useful as if there were none to a beginner when clear examples are not provided. Take MDN example of a well written documentation.

if you're building a vanilla app you can't use

```js
import { invoke } from './@tauri-apps/api/tauri.js';

import { appWindow } from './@tauri-apps/api/window.js';
```

you need to use the global window variable and enable it from the config

```js
const invoke = window.__TAURI__.invoke;

const appWindow = window.__TAURI__.window.appWindow;
```

```json
  "build": {
    "withGlobalTauri": true
  },
```
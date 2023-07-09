'use strict';

import App from "./App.js";
// App component => html
const $app = document.querySelector('#app');
new App({
  $target : $app,
  initialState : "처음 받아온 data(fetch로 받아오기)"
})

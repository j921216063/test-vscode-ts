// typescript 專屬寫法，意思等同於
// const express = require('express');
import express = require('express');
import body = require('body-parser');
import cookie = require('cookie-parser');

let app = express();

app.use(cookie());
app.use(body.json());
app.use(body.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('welcome');
});

// express 執行，就像是個 pipeline，
// 一個環節一個環節的檢查
app.use((req, res, next) => {
  res.status(404);
  res.send('NOT FOUND');
})

export default app;
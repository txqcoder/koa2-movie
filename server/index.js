const Koa = require('koa')
const app = new Koa()
const { htmlTpl,ejsTpl,pugTpl } = require('./tpl')
// const ejs = require('ejs')
const pug = require('pug')
app.use(async (ctx, next) => {
  ctx.type = 'text/html; charset=utf-8'
  ctx.body = pug.render(pugTpl,{
    you: "xxx",
    me: 'tian yan rong'
  })
})
app.listen(4455)

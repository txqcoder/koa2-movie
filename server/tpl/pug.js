module.exports= `
doctype html
html
  head
    meta(charset='utf-8')
    meta(name='viewport',content='width=device-width, initial-scale=1')
    title koa server pug
    link(href='https://cdn.bootcss.com/twitter-bootstrap/4.1.3/css/bootstrap.min.css' rel='stylesheet')
  body
    .container
      .row
        .col-md-8
          h1 h1 #{you}
          p this is #{me}
        .col-md-4
          p 测试动态的 PUG 模板引擎
    script(src='https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js')
    script(src='https://cdn.bootcss.com/twitter-bootstrap/4.1.3/js/bootstrap.min.js')
`

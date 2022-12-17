
# Ödev 6
## Öncelikle şunu belirteyim. Koa.js hakkında konuşmadığımızı biliyorum ve bu ödev ilk aşamada bizi zorlayacak. Buradaki amacım yeni bir teknolojiye başlama cesareti oluşturmak ve hata yapma özgürlüğümüz olduğunu göstermek.
* ### koa paketini indirelim.
* ### index, hakkimda ve iletisim sayfaları oluşturalım.
* ### Port numarası olarak 5000'i kullanalım.

### index.js
```Javascript
const Koa = require('koa')
const app = new Koa()
const port = 3000

app.use(ctx => 
{
    ctx.status = 200;
    ctx.accepts('text/html');
    switch (ctx.url) {
        case '/':
            ctx.body = '<h2>Anasayfa</h2>'
        break;
        case '/about':
            ctx.body = '<h2>Hakkımızda</h2>'
        break;
        case '/contact':
            ctx.body = '<h2>İletişim</h2>'
        break;
        default:
            ctx.status = 404;
            ctx.body = '<h2>Sayfa Bulunamadı</h2>'
        break;
    }
});

app.listen(port, () =>{
    console.log(`Sunucu Portu : ${port} 'de başlatıldı`)
})

```
### package.json
```json
{
  "name": "koajs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "koa": "^2.14.1"
  }
}
```

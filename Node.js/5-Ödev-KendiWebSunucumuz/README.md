
# Ödev 5
## Kendi Web Sunucumuzu yazalım.
* ## createServer metodunu kullanacağız.
* ## index, hakkimda ve iletisim sayfaları oluşturalım.
* ## Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
* ## Port numarası olarak 5000'i kullanalım.

### index.js
```Javascript
const http = require('http');
const port = 3000;
const headType  = {'Content-Type': 'text/html'};

const server = http.createServer((req, res) => 
{
    switch (req.url) {
        case '/':
            res.writeHead(200, headType);
            res.write('<h2>Anasayfa</h2>')
        break;
        case '/about':
            res.writeHead(200, headType);
            res.write('<h2>Hakkımızda</h2>')
        break;
        case '/contact':
            res.writeHead(200, headType);
            res.write('<h2>İletişim</h2>')
        break;
        default:
            res.writeHead(404, headType);
            res.write('<h2>Sayfa Bulunamadı</h2>')
        break;
    }
    res.end();
});

server.listen(port , () =>
{
    console.log(`Sunucu Portu : ${port} 'de başlatıldı`);
});
```

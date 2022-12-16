
# Ödev 3
## Daire Modüler Dosyası
* ### Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
* ### module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
* ### require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.

### circle.js
```Javascript
const circleArea = (radius) => 
{
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${(Math.PI * (radius * radius)).toFixed(2)}`);
}

const circleCircumference = (radius) => 
{
    console.log(`Yarıçapı ${radius} olan dairenin Çevresi: ${(Math.PI * radius * 2 ).toFixed(2)}`);
}

module.exports = { circleArea, circleCircumference };
```
### index.js

```Javascript
const {circleArea, circleCircumference} = require("./circle.js");
const radius = 5;

circleArea(radius);
circleCircumference(radius);
```
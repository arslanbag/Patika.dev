
# Ödev 1
## Node.JS Komut Satırı Kullanımı
### Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap 
### değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) 
### şeklinde olmalıdır.


```Javascript
const arg = process.argv[2];
const radius = parseInt(arg);
const area = Math.PI * (radius * radius);

console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area.toFixed(2)}`);
```
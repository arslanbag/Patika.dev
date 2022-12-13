## Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

1. city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
2. customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
3. customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.

## Cevaplar
```sql
1. SELECT city, country FROM country INNER JOIN city ON city.country.id = country.id;
2. SELECT payment_id, first_name, last_name FROM customer INNER JOIN payment ON payment.customer.id = customer.id;
3. SELECT rental, first_name, last_name FROM customer INNER JOIN rental ON rental.customer.id = customer.id;
```

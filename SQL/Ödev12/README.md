## Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

1. film tablosunda film uzunluğu length sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?
2. film tablosunda en yüksek rental_rate değerine sahip kaç tane film vardır?
3. film tablosunda en düşük rental_rate ve en düşün replacement_cost değerlerine sahip filmleri sıralayınız.
4. payment tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.

## Cevaplar
```sql
1. SELECT COUNT(*) FROM film WHERE length > (SELECT AVG(length) FROM film );
2. SELECT COUNT(*) FROM film WHERE rental_rate = (SELECT MAX(rental_rate) FROM film);
3. SELECT COUNT(*) FROM film WHERE (rental_rate,replacement_cost) = (SELECT MIN(rental_rate), MIN(replacement_cost) FROM film);
4. SELECT 
	DISTINCT customer_id , 
	(SELECT Count(*) FROM payment WHERE customer_id = main_payment.customer_id ) as payment_count
	from payment as main_payment 
	Order By payment_count Desc;
```
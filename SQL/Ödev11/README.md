## Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

1. actor ve customer tablolarında bulunan first_name sütunları için tüm verileri sıralayalım.
2. actor ve customer tablolarında bulunan first_name sütunları için kesişen verileri sıralayalım.
3. actor ve customer tablolarında bulunan first_name sütunları için ilk tabloda bulunan ancak ikinci tabloda bulunmayan verileri sıralayalım.
4. İlk 3 sorguyu tekrar eden veriler için de yapalım.

## Cevaplar
```sql
1. (SELECT first_name FROM customer) UNION (SELECT first_name FROM actor);
2. (SELECT first_name FROM customer) INTERSECT (SELECT first_name FROM actor);
3. (SELECT first_name FROM customer) EXCEPT (SELECT first_name FROM actor);
4. 1.(SELECT first_name FROM customer) UNION ALL (SELECT first_name FROM actor);
4. 2.(SELECT first_name FROM customer) INTERSECT ALL (SELECT first_name FROM actor);
4. 3.(SELECT first_name FROM customer) EXCEPT ALL (SELECT first_name FROM actor);
```
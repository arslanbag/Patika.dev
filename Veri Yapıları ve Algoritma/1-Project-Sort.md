
## S1.) [22,27,16,2,18,6] dizisini InsertionSort algoritmasına göre küçükten büyüğe sıralayınız.

###### I. 0. indexli elemanın önüne çizgi çekelim. ve 1. indeksli eleman ile kıyaslayalım.
###### index[0] > index[1] ise sağına konumlandıralım. küçük ise soluna kaydırlım.

   	27 > 22 olduğu için "27" değeri, "22" değerinin sağında konumlanır.
	[ 22 | 27 ,16 ,2 ,18 ,6 ]
	[ 22 ,27 | 16 ,2 ,18 ,6 ]
   
###### II. çizginin sağındaki ilk eleman "16" değeri için;
	16 < 27 olduğu için sola kayar
	16 < 22 olduğu için sola kayar

	[ 16, 22 ,27 | 2 ,18 ,6 ]

###### III. çizginin sağındaki ilk eleman  "2" değeri için;
	2 < 27 olduğu için sola kayar
	2 < 22 olduğu için sola kayar
	2 < 16 olduğu için sola kayar

	[ 2, 16, 22 ,27 | 18 ,6 ]

###### IV.çizginin sağındaki ilk eleman  "18" değeri için;
	18 < 27 olduğu için sola kayar
	18 < 22 olduğu için sola kayar
	18 > 16 olduğu için sağında konumlanır.

	[ 2, 16, 18, 22 ,27 | 6 ]


###### V.çizginin sağındaki ilk eleman  "6" değeri için;
	6 < 27 olduğu için sola kayar
	6 < 22 olduğu için sola kayar
	6 < 16 olduğu için sola kayar
	6 > 2 olduğu için sağında konumlanır.

Sonuç	[ 2, 6 ,16, 18, 22 ,27 |]


## S2.) Yukarıdaki InsertionSort işleminin Big O Gösterimini yazınız.

* Worst case   : O ([n^2])
* Avarage case : O ([n^2])
* Best  case   : O (n)


## S3.) Time Complexity : Dizi sırlandıktan sonra 18 sayısı hangi case kapsamına girer?

[ 2, 6 ,16, 18, 22 ,27 ] Sıralanan 6 elamanlı dizide , 18 değeri 4.indeksli elemandır. Avarage case kapsamındadır.


## S4.) [7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

###### I. "2" değeri dizinin en küçük elemanıdır ve 0. indeksli eleman yani "7" değeri ile yer değiştirilir.
    ve ilk elemandan sonra çizgi çekilir.
	[ 7 ,3 ,5 ,8 ,2*,9 ,4 ,15 ,6 ]
	[ 2 | 3 ,5 ,8 ,7 ,9 ,4 ,15 ,6 ]
   
###### II."3" değeri çizgiden sonraki dizinin en küçük elemanıdır.Çizgiden sonraki ilk eleman ile yer değiştirir ve çizgi sağa kayar. 
	[ 2 | 3*,5 ,8 ,7 ,9 ,4 ,15 ,6 ]
	[ 2 ,3 | 5 ,8 ,7 ,9 ,4 ,15 ,6 ]

###### III."4" değeri çizgiden sonraki dizinin en küçük elemanıdır.Çizgiden sonraki ilk eleman ile yer değiştirir ve çizgi sağa kayar.
	[ 2 ,3 | 5 ,8 ,7 ,9 ,4*,15 ,6 ]
	[ 2 ,3 ,4 | 8 ,7 ,9 ,5 ,15 ,6 ]

###### IV."5" değeri çizgiden sonraki dizinin en küçük elemanıdır.Çizgiden sonraki ilk eleman ile yer değiştirir ve çizgi sağa kayar.
	[ 2 ,3 ,4 | 8 ,7 ,9 ,5*,15 ,6 ]
	[ 2 ,3 ,4 ,5 | 7 ,9 ,8 ,15 ,6 ]


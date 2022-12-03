## [ 16 ,21 ,11 ,8 ,12 ,22 ] 
## S1.) Yukarıdaki dizinin mergeSort türüne göre aşamalarını yazınız.


1.				      ___[ 16 ,21 ,11 ,8 ,12 ,22 ]___
				     |                               |
2.			  _ [ 16 ,21 ,11 ]_ 		           _ [ 8 ,12 ,22 ]_
			 |		  |	                  |		   |
3.		       [ 16 ]         [21 ,11 ]                 [ 8 ]          [12 ,22 ]	
		         | 		  |		          |		   |
4.		       [ 16 ]         [11 ,21 ]    	    	[ 8 ]          [12 ,22 ]
           		  |		  | 			  | 		   |
5.			 |→[ 11 , 16 ,21 ]←|			   |→[ 8 , 12 ,22 ]←|
				   |				            |
6.				   |_______[ 8 , 11 ,12 ,16 , 21 ,22 ]_____ |

I.   Diziyi 2'ye ayıralım
II.  Ayırma sonuçları
III. Tekrar 2'ye ayırılım
IV.  En fazla 2 elaman olarak ayrılan 
     dizileri kendi içinde karşılaştıralım küçük 
     olan rakamı sol tarafa kaydıralım.
V.   Üst satırda bulunan 2 diziyi birbiri ile kıyaslayalım 
     (örn : 1. dizinin 0. elemanı < 2.dizinin 0.elemanı)
VI.  Üst satırda bulunan 2 diziyi birbiri ile 
     kıyaslayalayarak birleştirelim

## S1.) Yukarıdaki dizinin Big-O gösterimini yazınız.

* Worst case   : O ( nlog(n) )
* Avarage case : O ( nlog(n) )
* Best  case   : O ( nlog(n) )

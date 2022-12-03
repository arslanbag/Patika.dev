## [7,5,1,8,3,6,0,9,4,2]
## S1.) Yukarıdaki dizinin binarySearchTree türüne göre aşamalarını yazınız.

root = 7 

#### 5 için; 
  * 7 > 5 olduğu için  7'nin soluna
  
#### 1 için; 
  * 7 > 1 olduğu için  7'nin soluna
  * 5 > 1 olduğu için  5'nin soluna
  
#### 8 için; 
  * 7 < 8 olduğu için  7'nin sağına
  

#### 3 için; 
  * 7 > 3 olduğu için  7'nin soluna
  * 5 > 3 olduğu için  5'nin soluna
  * 1 < 3 olduğu için  1'nin sağına

#### 6 için; 
  * 7 > 6 olduğu için  7'nin soluna
  * 5 < 6 olduğu için  5'nin sağına
  
#### 0 için; 
  * 7 > 0 olduğu için  7'nin soluna
  * 5 > 0 olduğu için  5'nin soluna
  * 1 > 0 olduğu için  1'nin soluna

#### 9 için; 
  * 7 < 9 olduğu için  7'nin sağına
  * 8 < 9 olduğu için  8'nin sağına
  
#### 4 için; 
  * 7 > 4 olduğu için  7'nin soluna
  * 5 > 4 olduğu için  5'nin soluna
  * 1 < 4 olduğu için  1'nin sağına
  * 3 < 4 olduğu için  3'nin sağına
  
#### 2 için; 
  * 7 > 2 olduğu için  7'nin soluna
  * 5 > 2 olduğu için  5'nin soluna
  * 1 < 2 olduğu için  1'nin sağına
  * 3 > 2 olduğu için  3'nin soluna
  

		  7         
		 | |
		|   |
	   5     8       
	  | |     |
	 |   |     |
	1     6     9    
   | |
  |   |
 0     3             
	  | |
	 |   |
	2     4       

## S2.) Yukarıdaki dizinin Big-O gösterimini yazınız.

Worst case   : O ( n )
Avarage case : O ( log(n) )
Best  case   : O ( log(n) )	

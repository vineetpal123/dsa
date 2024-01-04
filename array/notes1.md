
Array :  while declaring array using size as a variable is a bad practice. 

Ex : Arr[size] = bad practive ;  Arr[10000] = good practice,


While passing array as a parameter in a function , array path will sent in new function params.
While incase of variable we are sending variable params
Ex : 
Let d = [1,2,3] 
function(arr) { //here arr is path of d array,  
}

# Linear Search : for search operation will check each element in a sequence.
    Time complexity : O(n)
    
# Binary Search : used for search in sorted array . in this we will check mid element.
     Time complexity : Olog(n)

##### Important ######
    Two pointer Approach : sort 0 1
    Dutch Flag Problem : sort 0 1 2

Pending Question 
1) Square root using binary search : D
2) find pivot in indx : D
3) Book Allocation program (imp) Lecture = 15 : D
4) Merge two sort array 

# Selection sort 
    Time complexity : O(n2) for best and worst case
    Spack Complexity : O(1)

    # when to use : when array size is small when their was less space.

What is stable and unstable algorithm    '

# Bubble Sort 

# Insertion Sort : we are doing shift not swap 
    
# mod : it means if mode any number by n , then our mode will liest between 0 to n-1
43%10 = 3 i.e n= 10 and mode = 3
69%10 = 10 i.e n = 10 mode = 9 
so here mode lies between 0 to n-1

used in rotate array upto kth number

Rotate array

# lecture 22 all about string
    Reverse string : we can,t use swap techinqe , how we use to reverse an array
    because Strings in Javascript are immutable, so you can't modify the original string

# Maximum occurence of string

https://www.geeksforgeeks.org/return-maximum-occurring-character-in-the-input-string/    

Replace spaces from a string with @40
Remove all occurence of substring in a string

Spiral problem (imp): D
Rotate matrix by 90 degree : D
search a 2d array (sorted) : D
search a 2d matrix (unsorted) : D

Has to solve 10 question in matrix*

Pointers : pointer will save address of variable
so we can also access variable using pointer name with (* prefix) and variable name

Reference variable : same memory multiple name

Pass by value : new memory will create or memory allocate,copy of data
Pass by referenct : new memory will not create

When a programe create it comes up with STACK and HEAP memory , where stack is small and heap is bigger
bot used to allocate memory. by default all vairable or array data stored in STACK.

Everythin about memory allocation in javascript
Imp : https://felixgerschau.com/javascript-memory-management/

Stack : Used on compile time ,Static memory use to save primitive values and reference of object or function
Heap :  Used on runtime , Dynamic memory use to save object , function and array on run time

Recurstion : A function call itself
Recursion : two things required 
1) base case : where to stop 
if we did,t add base case , then stack will overflow 
2) recusrive relation : F(n) = n * f(n-1)

Normally recursive funcation has three things : 
1) base case (mandatory)
2) some processing (optional)
3) recursive relation (mandatory)

when recursive relation comes on end , that function known as Tail recursion.
if recursive relation lies above some processing known as Head recusrsion.

why recurstion ? 

    It helps us in solving bigger / complex problem in simpler way
    you can convert recursive sol. into iteration and vice-versa.
    space complexity is not constant becuase of recursive calls.
    it helps us in breaking down bigger problems into smaller problems


Note : if we follow below steps we can solve any recursion problem
1) Identify if you can break down problem with smaller problem
2) write the recursive relation if needed
3) Draw the recursive tree 
4) About the tree
    # see the flow of functions , how they are going in stack
    # identify the flow of left tree and right tree calls
    # draw the tree and pointer again again
    # use a debugger to see the stack
5) See how the value return at each step

Quick sort is very imp 


Ex : factorial of 5 
    5 * 4!
    4 * 3!
    3 * 2!
check factorial question


[1,2,3]
[4,5,6]
[7,8,9]

[7,4,1]
[8,5,2]
[9,6,3]



1 -> 3, 2 -> 6 , 3 -> 9   3
4 -> 2, 5 -> 5 , 6 -> 8
7 -> 1, 8 -> 4 , 9 -> 7 


0+2 1+2+2 2+5+2

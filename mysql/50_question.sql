-- Q-1. Write an SQL query to fetch “FIRST_NAME” from Worker table using the alias name as <WORKER_NAME>.

Select FIRST_NAME as WORKER_NAME from Worker; 

-- Q-2. Write an SQL query to fetch “FIRST_NAME” from Worker table in upper case.

Select UpperCase(FIRST_NAME) from Worker; 

-- Q-3. Write an SQL query to fetch unique values of DEPARTMENT from Worker table.
Select Distinct DEPARTMENT from Worker;

-- Q-4. Write an SQL query to print the first three characters of  FIRST_NAME from Worker table.


-- Q-5. Write an SQL query to find the position of the alphabet (‘b’) in the first name column ‘Amitabh’ from Worker table.


-- Q-6. Write an SQL query to print the FIRST_NAME from Worker table after removing white spaces from the right side.


-- Q-7. Write an SQL query to print the DEPARTMENT from Worker table after removing white spaces from the left side.


-- Q-8. Write an SQL query that fetches the unique values of DEPARTMENT from Worker table and prints its length.


-- Q-9. Write an SQL query to print the FIRST_NAME from Worker table after replacing ‘a’ with ‘A’.


-- Q-10. Write an SQL query to print the FIRST_NAME and LAST_NAME from Worker table into a single column COMPLETE_NAME.
-- A space char should separate them.
Select Concat(FIRST_NAME, ' ', LAST_NAME) as COMPLETE_NAME  from Worker; 


-- Q-11. Write an SQL query to print all Worker details from the Worker table order by FIRST_NAME Ascending.
Select * from Worker order by FIRST_NAME asc;

-- Q-12. Write an SQL query to print all Worker details from the Worker table order by 
-- FIRST_NAME Ascending and DEPARTMENT Descending.
Select * from Worker order by FIRST_NAME asc DEPARTMENT desc;

-- Q-13. Write an SQL query to print details for Workers with the first name as “Vipul” and “Satish” from Worker table.
Select * from Worker where FIRST_NAME In ('Vipul', 'Satish');

-- Q-14. Write an SQL query to print details of workers excluding first names, “Vipul” and “Satish” from Worker table.


-- Q-15. Write an SQL query to print details of Workers with DEPARTMENT name as “Admin*”.


-- Q-16. Write an SQL query to print details of the Workers whose FIRST_NAME contains ‘a’.


-- Q-17. Write an SQL query to print details of the Workers whose FIRST_NAME ends with ‘a’.


-- Q-18. Write an SQL query to print details of the Workers whose FIRST_NAME ends with ‘h’ and contains six alphabets.

-- Q-19. Write an SQL query to print details of the Workers whose SALARY lies between 100000 and 500000.
Select * from Worker where SALARY between 100000 and 500000;

-- Q-20. Write an SQL query to print details of the Workers who have joined in Feb’2014.

-- Q-21. Write an SQL query to fetch the count of employees working in the department ‘Admin’.

-- Q-22. Write an SQL query to fetch worker full names with salaries >= 50000 and <= 100000.


-- Q-23. Write an SQL query to fetch the no. of workers for each department in the descending order.
Select department, Count(*) as number from Worker group by department order by number desc;


-- Q-24. Write an SQL query to print details of the Workers who are also Managers.
Select * from Worker left join Title on Title.WORKER_REF_ID = Worker.WORKER_ID where Title.WORKER_TITLE = 'Manager'; 


-- Q-25. Write an SQL query to fetch number (more than 1) of same titles in the ORG of different types.
Select WORKER_TITLE,Count(*) as cnt from Title group by WORKER_TITLE having cnt > 1;


-- Q-26. Write an SQL query to show only odd rows from a table.
select * from Worker where WORKER_ID%2 = 1;

-- Q-27. Write an SQL query to show only even rows from a table. 
select * from Worker where WORKER_ID%2 = 0;

-- Q-28. Write an SQL query to clone a new table from another table.


-- Q-29. Write an SQL query to fetch intersecting records of two tables.


-- Q-30. Write an SQL query to show records from one table that another table does not have.
-- MINUS

-- Q-31. Write an SQL query to show the current date and time.
-- DUAL


-- Q-32. Write an SQL query to show the top n (say 5) records of a table order by descending salary.
Select * from Worker order by salary desc limit 5;

-- Q-33. Write an SQL query to determine the nth (say n=5) highest salary from a table.
Select Distinct SALARY from Worker order by SALARY desc limit 1 offset 4;

-- Q-34. Write an SQL query to determine the 5th highest salary without using LIMIT keyword.

 
-- Q-35. Write an SQL query to fetch the list of employees with the same salary.
Select * from Worker where SALARY In (Select  SALARY  from Worker group by SALARY having count(*) > 1);


-- Q-36. Write an SQL query to show the second highest salary from a table using sub-query.
Select Max(SALARY) from Worker where SALARY != (Select Max(SALARY) from Worker);


-- Q-37. Write an SQL query to show one row twice in results from a table.


-- Q-38. Write an SQL query to list worker_id who does not get bonus.
Not in and subquery to get all worker who get bonus


-- Q-39. Write an SQL query to fetch the first 50% records from a table.
Use subquery to get total element, then use limit upto half of total

-- Q-40. Write an SQL query to fetch the departments that have less than 4 people in it.
group by department , maintain count , subquery

-- Q-41. Write an SQL query to show all departments along with the number of people in there.
group by department, maintain count

-- Q-42. Write an SQL query to show the last record from a table.
order by desc limit 1

-- Q-43. Write an SQL query to fetch the first row of a table.
order by asc limit 1

-- Q-44. Write an SQL query to fetch the last five records from a table.
order by desc limit 5

-- Q-45. Write an SQL query to print the name of employees having the highest salary in each department.

-- we use derived tables and inner join

Select w.FIRST_NAME, w.SALARY, w.DEPARTMENT from (Select Max(SALARY) as max, DEPARTMENT from Worker group by DEPARTMENT) temp inner join Worker w on w.DEPARTMENT = temp.DEPARTMENT where w.SALARY = temp.max;


-- Q-46. Write an SQL query to fetch three max salaries from a table using co-related subquery

-- Co-related Sub-queries
    With a normal nested subquery, the inner SELECT query runs first and executes once, 
    returning values to be used by the main query(outer query) , A coorelated sub query , however
    executes once for each candidate row considered by the outer query. In other words ,
    the inner query is driven by the outer query.

    select Distinct SALARY from Worker w1 where 3 > (select Count(Distinct SALARY) as cnt from Worker w2 where w1.SALARY < w2.SALARY) order by w1.SALARY desc;


-- DRY RUN AFTER REVISING THE CORELATED SUBQUERY CONCEPT FROM LEC-9.

-- Q-47. Write an SQL query to fetch three min salaries from a table using co-related subquery

    select Distinct SALARY from Worker w1 where 3 < (select Count(Distinct SALARY) as cnt from Worker w2 where w1.SALARY < w2.SALARY) order by w1.SALARY desc;


-- Q-48. Write an SQL query to fetch nth max salaries from a table.
    select Distinct SALARY from Worker w1 where 3 = (select Count(Distinct SALARY) as cnt from Worker w2 where w1.SALARY <= w2.SALARY) order by w1.SALARY desc;


-- Q-49. Write an SQL query to fetch departments along with the total salaries paid for each of them.
Select SUM(SALARY) as SALARY, DEPARTMENT from Worker  group by DEPARTMENT order by SALARY desc;

-- Q-50. Write an SQL query to fetch the names of workers who earn the highest salary.
SELECT FIRST_NAME from Worker order by salary desc limit 1;


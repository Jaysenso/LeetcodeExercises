# Write your MySQL query statement below
select unique_id, name 
FROM Employees LEFT JOIN EmployeeUNI 
ON Employees.id = EmployeeUNI.id;

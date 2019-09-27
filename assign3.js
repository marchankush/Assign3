const sqlite3=require('sqlite3').verbose();
var db = new sqlite3.Database('./mydb.db3');  
//Create Table  
db.serialize(function() {  
    db.run("CREATE TABLE IF NOT EXISTS Students (student_id INTEGER, Student_name VARCHAR2(30), Program_Grp VARCHAR2(20) )");  
});  

//Create Table  
db.serialize(function() {  
    db.run("CREATE TABLE IF NOT EXISTS Classroom (Class_id INTEGER, Class_name VARCHAR2(30), Room VARCHAR2(20) ,Datesession VARCHAR2(20) )");  
});  

//Create Table  
db.serialize(function() {  
    db.run("CREATE TABLE IF NOT EXISTS Enrollment (student_id INTEGER, Class_id INTEGER, Enroll_id INTEGER )");  
});  
// Insert into Table  
db.serialize(function() {  
    db.run("INSERT into Students(Student_id,Student_name,Program_Grp) VALUES (12,'Devinder','CSAT')");  
    db.run("INSERT into Students(Student_id,Student_name,Program_Grp) VALUES (13,'Lovepreet','CPCT')");
    db.run("INSERT into Students(Student_id,Student_name,Program_Grp) VALUES (14,'Navjot','Business')");
    db.run("INSERT into Students(Student_id,Student_name,Program_Grp) VALUES (15,'Prabhjot','HR')");
    db.run("INSERT into Students(Student_id,Student_name,Program_Grp) VALUES (16,'Gunni nunni','Finance')");
   
});  

db.serialize(function() {  
    db.run("INSERT into Classroom(Class_id,Class_name,Room,Datesession) VALUES (1,'Autocad','101','15oct')");  
    db.run("INSERT into Classroom(Class_id,Class_name,Room,Datesession) VALUES (2,'Mechanical','102','19oct')");  
    db.run("INSERT into Classroom(Class_id,Class_name,Room,Datesession) VALUES (3,'Mathematics','103','21oct')");  
    db.run("INSERT into Classroom(Class_id,Class_name,Room,Datesession) VALUES (4,'Arts','104','25oct')");  
    db.run("INSERT into Classroom(Class_id,Class_name,Room,Datesession) VALUES (5,'ComputerLab','105','27oct')");  
  
   
});  

db.serialize(function() {  
    db.run("INSERT into Enrollment(Student_id,Class_id,Enroll_id) VALUES (15,2,001)");  
    db.run("INSERT into Enrollment(Student_id,Class_id,Enroll_id) VALUES (16,3,003)");
    db.run("INSERT into Enrollment(Student_id,Class_id,Enroll_id) VALUES (12,4,004)");
    db.run("INSERT into Enrollment(Student_id,Class_id,Enroll_id) VALUES (14,5,005)");
    db.run("INSERT into Enrollment(Student_id,Class_id,Enroll_id) VALUES (13,1,002)");
    
});  

db.serialize(function() {  
    db.all("SELECT s.Student_name,c.Class_name,c.Room,c.Datesession, e.Enroll_id from Students s INNER JOIN Enrollment e  on s.Student_id = e.Student_id INNER JOIN Classroom c on c.Class_id=e.Class_id",function(err,rows){  
        if(err)  
                             {  
            console.log(err);  
        }  
        else{  
            console.log(rows);  
        }  
    });  
});  
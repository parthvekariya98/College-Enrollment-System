const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'CollegeEnrollmentSystem';

MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);

  //data for students
  const studentsCollection = db.collection('students');
  const students = [
    {
      "Name": "John Doe",
      "Age": 20,
      "Gender": "Male",
      "Email": "johndoe@example.com",
      "Phone Number": "1234567890",
      "Address": "123 Main St, Anytown USA"
    },
    {
      "Name": "Jane Smith",
      "Age": 19,
      "Gender": "Female",
      "Email": "janesmith@example.com",
      "Phone Number": "0987654321",
      "Address": "456 Elm St, Anytown USA"
    },
    {
      "Name": "Bob Johnson",
      "Age": 21,
      "Gender": "Male",
      "Email": "bobjohnson@example.com",
      "Phone Number": "5555555555",
      "Address": "789 Oak St, Anytown USA"
    },
    {
      "Name": "Sara Lee",
      "Age": 18,
      "Gender": "Female",
      "Email": "saralee@example.com",
      "Phone Number": "7777777777",
      "Address": "111 Pine St, Anytown USA"
    },
    {
      "Name": "Tom Smith",
      "Age": 22,
      "Gender": "Male",
      "Email": "tomsmith@example.com",
      "Phone Number": "2222222222",
      "Address": "222 Maple St, Anytown USA"
    }
  ];

  //insert student data
  studentsCollection.insertMany(students, function(err, result) {
    console.log(`${result.insertedCount} students inserted`);
  });

   //data for courses
  const coursesCollection = db.collection('courses');
  const courses = [
    {
      "Course Name": "Introduction to Computer Science",
      "Instructor Name": "Dr. Jane Doe",
      "Course Description": "This course provides an introduction to computer science and programming.",
      "Course Duration": "10 weeks"
    },
    {
      "Course Name": "Data Structures and Algorithms",
      "Instructor Name": "Dr. John Smith",
      "Course Description": "This course covers data structures and algorithms used in computer science.",
      "Course Duration": "12 weeks"
    },
    {
      "Course Name": "Database Management Systems",
      "Instructor Name": "Dr. Bob Johnson",
      "Course Description": "This course covers database management systems.",
      "Course Duration": "8 weeks"
    },
    {
      "Course Name": "Web Development",
      "Instructor Name": "Dr. Sara Lee",
      "Course Description": "This course covers web development technologies such as HTML, CSS, and JavaScript.",
      "Course Duration": "10 weeks"
    },
    {
      "Course Name": "Artificial Intelligence",
      "Instructor Name": "Dr. Tom Smith",
      "Course Description": "This course covers artificial intelligence and machine learning.",
      "Course Duration": "12 weeks"
    }
  ];

  //insert course data
  coursesCollection.insertMany(courses, function(err, result) {
    console.log(`${result.insertedCount} courses inserted`);
    client.close();
  });
});

// Class Course
class Course {
  subjectName: string;
  grade: number;

  constructor(subjectName: string, grade: number) {
    this.subjectName = subjectName;
    this.grade = grade;
  }
}

// Class Student
class Student {
  studentID: number;
  name: string;
  courses: Course[];

  constructor(studentID: number, name: string, courses: Course[] = []) {
    this.studentID = studentID;
    this.name = name;
    this.courses = courses;
  }

  // เพิ่มรายวิชาใหม่
  addCourse(course: Course): void {
    this.courses.push(course);
  }

  
  getAverage(): number {
    if (this.courses.length === 0) return 0;
    const sum = this.courses.reduce((total, course) => total + course.grade, 0);
    return sum / this.courses.length;
  }

  
  displayInfo(): void {
    console.log(`\n Student ID: ${this.studentID}, Name: ${this.name}`);
    this.courses.forEach((c, i) => {
      console.log(`   [${i + 1}] ${c.subjectName} - Grade: ${c.grade}`);
    });
    console.log(`  Average Grade: ${this.getAverage().toFixed(2)}`);
  }
}


const students: Student[] = [
  new Student(1, "ธมล", [
    new Course("Math", 3.5),
    new Course("English", 3.0),
    new Course("Programming", 4.0),
    new Course("Physics", 3.2),
  ]),
  new Student(2, "บูมมี่", [
    new Course("Math", 2.8),
    new Course("English", 3.1),
    new Course("Programming", 3.9),
    new Course("History", 3.5),
  ]),
  new Student(3, "แอม", [
    new Course("Math", 3.7),
    new Course("English", 3.8),
    new Course("Programming", 3.9),
    new Course("Biology", 3.6),
  ]),
];


console.log("=== ข้อมูลนักศึกษาก่อนเพิ่มรายวิชา ===");
students.forEach(s => s.displayInfo());

// เพิ่มรายวิชาใหม่ คนละ 1 วิชา
students[0].addCourse(new Course("Chemistry", 3.6));
students[1].addCourse(new Course("Economics", 3.4));
students[2].addCourse(new Course("Art", 4.0));


console.log("\n=== ข้อมูลนักศึกษาหลังเพิ่มรายวิชา ===");
students.forEach(s => s.displayInfo());

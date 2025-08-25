
interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
}


const employees: Employee[] = [
  { id: 1, name: "ธมล", position: "CEO", salary: 10000000 },
  { id: 2, name: "วรฤทธิ์", position: "Intern", salary: 5000 },
  { id: 3, name: "Amm", position: "Programmer", salary: 35000 },
];


function findEmployeeByName(name: string): Employee | undefined {
  return employees.find(emp => emp.name === name);
}


console.log(" ข้อมูลพนักงานทั้งหมด:");
employees.forEach(emp => {
  console.log(`ID: ${emp.id}, Name: ${emp.name}, Position: ${emp.position}, Salary: ${emp.salary}`);
});


const searchName = "วรฤทธิ์";
const result = findEmployeeByName(searchName);

console.log(`\nค้นหาพนักงานชื่อ "${searchName}"`);
if (result) {
  console.log(`พบ: ID=${result.id}, Name=${result.name}, Position=${result.position}, Salary=${result.salary}`);
} else {
  console.log("ไม่พบพนักงาน");
}


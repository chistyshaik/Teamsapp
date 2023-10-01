import React,{useState} from 'react';
import myImage from '../images/female.png';

export default function Employees() {
    const [employees, setEmployees] = useState([
        {
            id: 1,
            fullname: "John Doe",
            designation: "Software Engineer",
            gender: "Male",
            teamname: "Development Team"
          },
          {
            id: 2,
            fullname: "Jane Smith",
            designation: "Product Manager",
            gender: "Female",
            teamname: "Product Team"
          },
          {
            id: 3,
            fullname: "Robert Johnson",
            designation: "UI/UX Designer",
            gender: "Male",
            teamname: "Design Team"
          },
          {
            id: 4,
            fullname: "Emily Brown",
            designation: "Data Analyst",
            gender: "Female",
            teamname: "Data Team"
          },
          {
            id: 5,
            fullname: "Michael Wilson",
            designation: "QA Engineer",
            gender: "Male",
            teamname: "Quality Assurance Team"
          },
          {
            id: 6,
            fullname: "Olivia Lee",
            designation: "Marketing Specialist",
            gender: "Female",
            teamname: "Marketing Team"
          }
    ])
  return (
    <main>
         {employees.map((employee) => (
        <p key={employee.id}>{employee.fullname}</p>
  ))}
</main>

  )
}

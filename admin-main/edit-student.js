import { students } from "../js/students.js";

let form = document.getElementById("addForm");
let remove = document.getElementById("removeForm");

form.addEventListener('submit', addStudent)
function addStudent(event) {
    let fName = document.getElementById("firstName").value;
    let Mname = document.getElementById("middleName").value;
    let Lname = document.getElementById("lastName").value;
    let Age = document.getElementById("age").value;
    let Sex = document.getElementById("sex").value;
    let Birthday = document.getElementById("birthday").value;
    let Email = document.getElementById("email").value;
    let Address = document.getElementById("address").value;
    let ClaimStatus = document.getElementById("claimStatus").value;
    let Balance = document.getElementById("balance").value;

  students.push({
     firstName: fName,
     middleName: Mname,
     lastName: Lname,
     age: Age,
     sex: Sex,
     birthday: Birthday,
     email: Email,
     address: Address,
     claimStatus: ClaimStatus,
     balance: Balance,
     scholarship: "pending"
  })

    alert("Student Succesfully Added")
    localStorage.setItem("students", JSON.stringify(students));
    event.preventDefault() // prevents the form from restarting the page when submitting
}

remove.addEventListener('submit', removeStudent)

function removeStudent(event) {

  let studentToRemove =  document.getElementById("remove").value;
  studentToRemove = Number(studentToRemove)
  students.splice(studentToRemove - 1, 1);

  localStorage.setItem("students", JSON.stringify(students))
  alert("Student Succesfully Removed");
  event.preventDefault(); 
}
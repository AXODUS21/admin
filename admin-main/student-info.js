import { students, Chosen } from "../js/students.js";
let status;
const studentInfo = students[Chosen];
console.log(studentInfo)
displayStudentInfo();

function displayStudentInfo() {
    let studentHtml = "";
    
    const html = `
        <tr>
          <th>First Name: </th>
          <td>${studentInfo.firstName} </td>
        </tr>
        <tr>
          <th>Middle Name: </th>
          <td>${studentInfo.middleName} </td>
        </tr>
        <tr>
          <th>Last Name: </th>
          <td>${studentInfo.lastName} </td>
        </tr>
        <tr>
          <th>Age: </th>
          <td>${studentInfo.age} </td>
        </tr>
        <tr>
          <th>Sex: </th>
          <td>${studentInfo.sex} </td>
        </tr>
        <tr>
          <th>Birthday: </th>
          <td>${studentInfo.birthday} </td>
        </tr>
        <tr>
          <th>Email: </th>
          <td>${studentInfo.email} </td>
        </tr>
        <tr>
          <th>Address: </th>
          <td>${studentInfo.address} </td>
        </tr>
        <tr>
          <th>Balance: </th>
          <td>${studentInfo.balance} </td>
        </tr>
        <div class="Scholarship">Scholarship: 
            <div class="dropdown">
                <button class="dropbtn">${studentInfo.scholarship || "Status"}</button>
                <div class="dropdown-content">
                    <div class="choice Approved">Approved</div>
                    <div class="choice Rejected">Rejected</div>
                    <div class="choice Pending">Pending</div>
                </div>
            </div>
        </div>
    `;

    studentHtml += html

    document.querySelector(".student").innerHTML = studentHtml
}

document.querySelector(".Approved").addEventListener("click", handleDropDown);
document.querySelector(".Rejected").addEventListener("click", handleDropDown);
document.querySelector(".Pending").addEventListener("click", handleDropDown);

function handleDropDown(event) {
    
  if (event.target.classList.contains("Approved")) {
    status = "Approved";
  } else if (event.target.classList.contains("Rejected")) {
    status = "Rejected";
  } else if (event.target.classList.contains("Pending")) {
    status = "Pending";
  }

  if (status) { 
    document.querySelector(".dropbtn").innerHTML = status;
    studentInfo.scholarship = status;

    localStorage.setItem("students", JSON.stringify(students));
  }
}


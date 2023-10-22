import { students, Chosen } from "../js/students.js";



const searchInput = document.querySelector(".search-bar-input")
let listHtml = "";

renderList();
function renderList() {
  
   students.forEach((student, index) => {
    let firstName = student.firstName;
    let middleName = student.middleName;
    let lastName = student.lastName;
    let age = student.age;
    let sex = student.sex;
    let birthday = student.birthday;
    let email = student.email;

    const html = `
      <a href="student-info.html">
        <div class="student ${index}" data-tooltip="View More Info">
            <div class="student-number">${index + 1}</div>
            <div class="first-name">${firstName}</div>
            <div class="middle-name">${middleName}</div>
            <div class="last-name">${lastName}</div>
            <div class="age">${age}</div>
            <div class="sex">${sex}</div>
            <div class="birthday">${birthday}</div>
            <div class="email">${email}</div>
        </div>
      <a/>
    `;

    listHtml += html;
  });

  document.querySelector(".student-container").innerHTML = listHtml;

  // Add event listener to the container for event delegation
  document.querySelector(".student-container")
    .addEventListener("click", handleStudentClick);
}

function handleStudentClick(event) {
  // Check if a student div is clicked
  if (event.target.classList.contains("student")) {
    // Extract the whereAtList value
    const whereAtList = event.target.classList[1];
    // Output whereAtList value wherever you need
    Chosen.splice(0, Chosen.length)
    Chosen.push(
      whereAtList
    )
    
    localStorage.setItem("Chosen", JSON.stringify(Chosen))
    // You can replace the console.log with code to update some other part of your application.
  }
}


  //Search Bar

  searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    
    let found = students.some((student) =>
      student.firstName.toLowerCase().includes(value)
    );
    let studentIndex = students.findIndex((student) =>
      student.firstName.toLowerCase().includes(value)
    );



      if (found) {
        listHtml = `
        <a href="student-info.html">
            <div class="student ${studentIndex}" data-tooltip="View More Info">
                <div class="student-number">${studentIndex + 1}</div>
                <div class="first-name">${students[studentIndex].firstName}</div>
                <div class="middle-name">${
                  students[studentIndex].middleName
                }</div>
                <div class="last-name">${students[studentIndex].lastName}</div>
                  <div class="age">${students[studentIndex].age}</div>
                  <div class="sex">${students[studentIndex].sex}</div>
                  <div class="birthday">${students[studentIndex].birthday}</div>
                  <div class="email">${students[studentIndex].email}</div>
            </div>
          <a/>
        
        `;

        document.querySelector(".student-container").innerHTML = listHtml;
      } else if (!found) {
        document.querySelector(".student-container").innerHTML =
          "Please Search First Name The Name Of The Student";
      }
      
  })  
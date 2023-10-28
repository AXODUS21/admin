import {students} from "/js/students.js"

renderList(); 

function renderList() {
    let listHtml = ""

      students.map((student, index) => {
        let firstName = student.firstName;
        let middleName = student.middleName;
        let lastName = student.lastName;
        let age = student.age;
        let sex = student.sex;
        let birthday = student.birthday;
        let email = student.email;
        let address =  student.address;
        let scholarhip = student.scholarship;
        let balance = student.balance;

        const html = `
        <tr class="student ${index}" data-tooltip="View More Info">
            <td class="student-number">${index + 1}</td>
            <td class="first-name">${firstName}</td>
            <td class="middle-name">${middleName}</td>
            <td class="last-name">${lastName}</td>
            <td class="age">${age}</td>
            <td class="sex">${sex}</td>
            <td class="birthday">${birthday}</td>
            <td class="email">${email}</td>
            <td class="sex">${address}</td>
            <td class="birthday">${scholarhip}</td>
            <td class="email">${balance}</td>
        </tr>
    `;

        listHtml += html;
      });

      document.querySelector(".student-list").innerHTML = listHtml;
}

    document.querySelector(".printbtn")
    .addEventListener("click", handlePrintBtn)

function handlePrintBtn() {
    document.querySelector(".printbtn").style.display = "none"
    document.querySelector(".back-button-container").style.display = "none"
    window.print()
    
    setTimeout(() => {
        document.querySelector(".printbtn").style.display = "block"
        document.querySelector(".back-button-container").style.display = "block";
    },2000)
}
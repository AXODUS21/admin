import { students } from "../js/students.js";

renderScholars()
function renderScholars () {
    let scholarHtml =""

    students.forEach((student, index) => {

        const html = `
            <tr>
                <td class="student-name">
                     ${index + 1} ${student.firstName} ${student.middleName} ${student.lastName}
                </td>
                <td class="student-scholarship-status">
                     ${student.scholarship}
                </td>
            </tr>
        `;

        scholarHtml += html
    })

    document.querySelector(".student")
    .innerHTML = scholarHtml
}
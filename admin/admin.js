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


  $(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            iphone: 2666,
            ipad: null,
            itouch: 2647
        }, {
            period: '2010 Q2',
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2010 Q3',
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }, {
            period: '2010 Q4',
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: '2011 Q1',
            iphone: 6810,
            ipad: 1914,
            itouch: 2293
        }, {
            period: '2011 Q2',
            iphone: 5670,
            ipad: 4293,
            itouch: 1881
        }, {
            period: '2011 Q3',
            iphone: 4820,
            ipad: 3795,
            itouch: 1588
        }, {
            period: '2011 Q4',
            iphone: 15073,
            ipad: 5967,
            itouch: 5175
        }, {
            period: '2012 Q1',
            iphone: 10687,
            ipad: 4460,
            itouch: 2028
        }, {
            period: '2012 Q2',
            iphone: 8432,
            ipad: 5713,
            itouch: 1791
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});

$(function() {

    $('#side-menu').metisMenu();

});

// Loads the correct sidebar on window load, collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});
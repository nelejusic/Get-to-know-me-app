var intro =
  " This website will help you to get to know me just a little bit. You'll get to know who I am, what my skillset is and what kind of technologies, and projects I've worked on ";
document.getElementById("intro").innerHTML = intro;
let aboutMe =
  "My name is Nedžib Jusić, I am a software developer from Tuzla. I am an educated software developer that has a becherlors degree in IT. I am currently based in Sarajevo. ";
document.getElementById("about-me").innerHTML = aboutMe;

let expertise =
  "I am a web developer. Working with technologies such as Angular and node.js. I have closely worked with MySql, MariaDB, knex.js, google API, Java, Java Spring Boot, Angular material and etc.";

document.getElementById("expertise").innerHTML = expertise;

let whatILove =
  "I consider myself as a very social person I enjoj working with others and I love people. I love anything that includes computers so that means I love exploring the hardware, software of the computer, video games and coding";
document.getElementById("what-i-love").innerHTML = whatILove;

let dashboard =
  "Summary: Dashboard is a project that i worked on during my employment as a web developer. It is my third web project and one of the more complex projects I've worked on. This project demanded of me to gather and manipulate data while fetching the same data from Google api. I needed to get a grip on how Google OAuth works, manage and mantain the database, Authenthificate all users, get their info, while integrating numerous APIs and connecting them to the application. The app was written in Angular and Node.js";
let libary =
  "Summary: Libary is my first web project it is also one my first projects. It is a project created with basicaly one purpose, to mange the libary. It has an UI that is written with JQuery and for the request I used the AJAX method for requests. The backend of this application is written in Java Spring Boot";
let tellYourStory =
  "Summar: Tell your story by its importance is the most important project I have worked on, its importance is rather symbolical, because it was this project that made me truly fall in love with web development. Before this the projects I've worked one were mainly consloe projects in C and Java programming languages. This project is also written with the sam technologies such as the Libary project. In these two projects I've got to know how web development process works, what is spring boot and how algorithms and data structures function";
document.getElementById("project-description").innerHTML = dashboard;
let spaceTravel =
  "Summary: Space Travel is a Frontend type application, it is written in angular while focusing on the structure of the project. It has an unique design.It as an moder look to it, it is still in development.  The application is written in Angular ";
  let quoteGenerator = "Summary: Quote generator does what it name said it does. It generates quotes from an API. It is written in vanila Java Script. it is a basic project that puts its focus on fetching data from and API rather than being robust in its functionality. It has an optipn to share the generated quote to your twitter account"
  let quiz = "Summary: The quiz application is a console application written in Java. It lets you create, play, and delete the quizzes. The main focus of this application was to push myself(keep in mind that this was one of mine first projects) to create a project that is rather complex with many flow controls. I had to learn how classes, interfaces, loops, and if statments work so that why I am putting it up here, not because of its complexity rather because of its meaning to me  "
function buttonClick(clickedId) {
  console.log(clickedId);
  if (clickedId === "dashboard") {
    document.getElementById("project-description").innerHTML = dashboard;
  }
  if (clickedId === "libary") {
    document.getElementById("project-description").innerHTML = libary;
  }
  if (clickedId === "tellYourStory") {
    document.getElementById("project-description").innerHTML = tellYourStory;
  }
  if (clickedId === "spaceTravel") {
    document.getElementById("project-description").innerHTML = spaceTravel;
  }
   if (clickedId === "quoteGenerator") {
    document.getElementById("project-description").innerHTML = quoteGenerator;
  }
    if (clickedId === "quiz") {
    document.getElementById("project-description").innerHTML = quiz;
  }
}
const toggleSwitch = document.querySelector('input[type="checkbox"]');
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        document.documentElement.setAttribute('data-theme','light');
    }
}
toggleSwitch.addEventListener('change',switchTheme);
import pro1 from "../assets/project1.PNG";
import pro2 from "../assets/project2.jpg";
import pro3 from "../assets/project3.PNG";
import pro4 from "../assets/project4.PNG";
import pro5 from "../assets/project5.PNG";
import pro7 from "../assets/project3.JPG"



const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "Psychic Journey Word Guessing Game",
        text: "The motivation for the project Psychic Journey was to create a playable game with many of the concepts learned in the course. It was also to learn how to cycle through the view of a client with handlebars, create a back-end server, and seed tables with SQL.",
        view: "https://psychic-journey.herokuapp.com/",
        source: "https://github.com/NathanKryz/psychic-journey",
    },
    {
        imgsrc: pro2,
        title: "Check Your Movie - Movie Database",
        text: "A movie database that allows a user to get info and ratings on a specific movie. Our application also gives a brief summary of the specified movie and a short trailer from YouTube to be viewed.",
        view: "https://roflmelon.github.io/movie-db-app/",
        source: "https://github.com/roflmelon/movie-db-app",
    },
    {
        imgsrc: pro7,
        title: "EZ DOSSIER",
        text: "EZ Dossier is a portfolio maker for users to create a beautiful portfolio and land their first job. ",
        view: "https://ezdossier.herokuapp.com/",
        source: "https://github.com/ConstantMotion1/EZDossier",
    },
    {
        imgsrc: pro4,
        title: "NoteTaker",
        text: "This application is a simple and easy-to-use notetaking application, allowing for users to write notes to be saved to a list for viewing later, and delete previously written notes to free up space for more notes. Assembled with express.js for the backend, the notes will persist between sessions as each is saved from a database that is stored, and can handle GET, POST, and DELETE requests respectively within its functionality",
        view: "https://notetaker12344567.herokuapp.com/notes",
        source: "https://github.com/ShayneKaruna/Note-Taker",
    },
    {
        imgsrc: pro5,
        title: "Password Generator",
        text: "This web application allows you to generate a random password based on your own password criteria. You must choose a password length between 8 and 128 characters, then you will be prompted with other information such as including symbols, numbers, letters, etc.",
        view: "https://shaynekaruna.github.io/mypassword-generator/",
        source: "https://github.com/ShayneKaruna/mypassword-generator",
    },
    {
        imgsrc: pro3,
        title: "Weather Dashboard",
        text: "The motivation for the project Weather Dashboard was to create a weather app with many of the concepts I have learned using a third party API's",
        view: "https://shaynekaruna.github.io/Weather-Dash/",
        source: "https://shaynekaruna.github.io/Weather-Dash/",
    }
];

export default ProjectCardData;
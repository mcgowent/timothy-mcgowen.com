// let nav = {
//         name: "Timothy McGowen",
//         nav_items: {
//             home: "Home",
//             more: "More",
//             books: "Books",
//             newsletter: "Newsletter",
//             about: "About"
//         }
// }

//     // Connects to Nav
//     document.querySelector(".nav").innerHTML = `
//     <h1>${nav.name}</h1> 
//     `;
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
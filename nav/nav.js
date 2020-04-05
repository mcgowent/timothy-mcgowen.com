let nav = {
        name: "Timothy McGowen",
        nav_items: {
            home: "Home",
            more: "More",
            books: "Books",
            newsletter: "Newsletter",
            about: "About"
        }
}

    // Connects to Nav
    document.querySelector(".nav").innerHTML = `
    <h1>${nav.name}</h1> 
    `;
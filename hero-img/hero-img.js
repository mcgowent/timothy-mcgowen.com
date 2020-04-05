let hero_img = {
    title: "Out Now!",
    subtitle: "Eldritch Knight",
    callout: "Buy Now",
    callout_link: "amazon.com",
    img: {
        src: "./assets/HighResEK.png",
        alt: "textless cover Eldritch Knight",
    }
}

    // Connects to Nav
    document.querySelector(".hero-img").innerHTML = `
    <img src=${hero_img.img.src} alt=${hero_img.img.alt} class="ek-img">
    <div class="text-block">
    <h3>${hero_img.title}</h3>
    <a href=${hero_img.callout_link}><p>${hero_img.callout}</p></a>
    <h2>${hero_img.subtitle}</h2>
    </div>
    `;

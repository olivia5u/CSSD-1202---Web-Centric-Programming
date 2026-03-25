
document.addEventListener("DOMContentLoaded", function () {

    const main = document.querySelector("main");
    const cards = document.querySelectorAll(".card");
    const navLinks = document.querySelectorAll("nav a");
    const pageTitle = document.querySelector(".page-title");
    const body = document.body;

    // Nav hover
    navLinks.forEach(function (link) {
        link.addEventListener("mouseover", function () {
            link.style.backgroundColor = "#dff3ff";
            link.style.color = "#0077cc";
        });

        link.addEventListener("mouseout", function () {
            link.style.backgroundColor = "";
            link.style.color = "";
        });
    });

    // Card hover effect
    cards.forEach(function (card) {
        card.addEventListener("mouseover", function () {
            card.style.transform = "scale(1.02)";
            card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.18)";
        });

        card.addEventListener("mouseout", function () {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.12)";
        });
    });

    // Title click toggle
    if (pageTitle) {
        const originalTitle = pageTitle.textContent;

        pageTitle.addEventListener("click", function () {
            pageTitle.textContent =
                pageTitle.textContent === originalTitle
                    ? originalTitle + " ✨"
                    : originalTitle;
        });
    }


    // Rotating quotes
    if (main) {
        const quoteBox = document.createElement("div");
        quoteBox.style.textAlign = "center";
        quoteBox.style.fontStyle = "italic";

        const quotes = [
            "Growth happens one habit at a time.",
            "Your future depends on what you do today.",
            "Success starts with consistency.",
            "Keep moving forward."
        ];

        let i = 0;
        quoteBox.textContent = quotes[i];
        main.appendChild(quoteBox);

        setInterval(function () {
            i = (i + 1) % quotes.length;
            quoteBox.textContent = quotes[i];
        }, 3000);
    }

 
    // Double click card
    cards.forEach(function (card) {
        card.addEventListener("dblclick", function () {
            card.style.backgroundColor = "#eef9ff";

            setTimeout(function () {
                card.style.backgroundColor = "#ffffff";
            }, 800);
        });
    });

});
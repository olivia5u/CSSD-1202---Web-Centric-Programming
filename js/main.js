
document.addEventListener("DOMContentLoaded", function () {

    const main = document.querySelector("main");
    const cards = document.querySelectorAll(".card");
    const navLinks = document.querySelectorAll("nav a");
    const pageTitle = document.querySelector(".page-title");
    const body = document.body;
    const form = document.querySelector("form");

    //form validation
    if (form){
        form.addEventListener("submit", function (event) {
            const username = document.getElementById("userName").value.trim();
            const phone = document.getElementById("telephoneNum").value.trim();
            const email = document.getElementById("email").value.trim();
            const feedback = document.getElementById("feedback");
            const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
            let isValid = true;
            let errorMessage = "";

            if (username === "") {
                isValid = false;
                errorMessage += "Username is required\n";
            }
            if (!email.includes("@") || !email.includes(".")) {
                isValid = false;
                errorMessage += "Invalid email\n";
            }
            

            if(phone === ""){
                isValid = false;
                errorMessage += "Phone is required\n";
            } else if (!phonePattern.test(phone)) {
                isValid = false;
                errorMessage += "Phone must be in format (123) 456-7890\n";
            }
            if (feedback && feedback.value.trim() === "") {
                isValid = false;
                errorMessage += "Feedback cannot be empty\n";
            }
            if (!isValid) {
                event.preventDefault();
                alert(errorMessage);
            }
        });
    }

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
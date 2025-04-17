window.addEventListener("load", () => {
    const savedText = localStorage.getItem("Polytechnic University");
    if (savedText) {
        const uniContainer = document.createElement("div");
        uniContainer.className = "card";
        uniContainer.id = `${savedText}`;

        const uniButton = document.createElement("button");
        uniButton.className = "btn btn-info btn-block btn-lg text-start rounded-0 uniFont";
        uniButton.setAttribute("data-bs-toggle", "collapse");
        uniButton.setAttribute("data-bs-target", `#${savedText}1`);
        uniButton.innerHTML = savedText;
        uniContainer.appendChild(uniButton);

        const accordion = document.createElement("div");
        accordion.className = "collapse fade";
        accordion.setAttribute("data-bs-parent", "accordian");
        accordion.id = `${savedText}1`;
        uniContainer.appendChild(accordion);

        const cardHeader = document.createElement("div");
        cardHeader.className = "card-header";
        accordion.appendChild(cardHeader);

        const cardTitle = document.createElement("div");
        cardTitle.className = "card-title";
        cardHeader.appendChild(cardTitle);

        const cardButton = document.createElement("button");
        cardButton.type = "button";
        cardButton.className = "btn btn-info border border-1 border-white buttons btn-block text-start rounded-3 text-white uniFont";
        cardButton.setAttribute("data-target", `${savedText}11`);
        cardTitle.appendChild(cardButton);

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        accordion.appendChild(cardBody);

        const pApplication = document.createElement("p");
        pApplication.style.fontSize = "small";
        pApplication.className = "fw-bold";
        pApplication.innerHTML = "Application";
        cardBody.appendChild(pApplication);

        const linebreak = document.createElement("hr");
        linebreak.className = "border border-1 border-info opacity-100";
        cardBody.appendChild(linebreak);

        const buttonsContainer = document.createElement("div");
        buttonsContainer.className = "d-md-flex flex-column";
        cardBody.appendChild(buttonsContainer);

        const button1 = document.createElement("button");
        button1.className = "d-block btn btn-light mb-1 text-start fw-bold text-secondary";
        button1.type = "button";
        button1.style.fontFamily = "Times New Roman', Times, serif";
        button1.innerHTML = "Questions";

        const button2 = document.createElement("button");
        button2.className = "d-block btn btn-light mb-1 text-start fw-bold text-secondary";
        button2.type = "button";
        button2.style.fontFamily = "Times New Roman', Times, serif";
        button2.innerHTML = "Recommenders";

        const button3 = document.createElement("button");
        button3.className = "d-block btn btn-light text-start fw-bold text-secondary";
        button3.type = "button";
        button3.style.fontFamily = "Times New Roman', Times, serif";
        button3.innerHTML = "Submit";


    }
});
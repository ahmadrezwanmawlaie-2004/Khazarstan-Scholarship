let universityFirstHidden = () => {
    let toggle = document.getElementById("FirstUniversity");
    toggle.toggleAttribute("hidden");
}
let universitySecondHidden = () => {
    let toggle = document.getElementById("SecondUniversity");
    toggle.toggleAttribute("hidden");
}
let universityThirdHidden = () => {
    let toggle = document.getElementById("ThirdUniversity");
    toggle.toggleAttribute("hidden");
}
let universityFourthHidden = () => {
    let toggle = document.getElementById("FourthUniversity");
    toggle.toggleAttribute("hidden");
}
let universityFifthHidden = () => {
    let toggle = document.getElementById("FifthUniversity");
    toggle.toggleAttribute("hidden");
}
let universitySixthHidden = () => {
    let toggle = document.getElementById("SixthUniversity");
    toggle.toggleAttribute("hidden");
}

const buttons = document.querySelectorAll(".navButtons");
const content = document.querySelectorAll(".universityP");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        
        const targetId = button.getAttribute("data-target");
        content.forEach(contentPart => {
            contentPart.style.display = "none";
        });
        const targetDetail = document.getElementById(targetId);
        targetDetail.style.display = "block";
    })
});

const csButtonAdd = document.querySelectorAll(".buttonCSadd");
const collegesDetails = document.getElementById("NewCollege");

let csAdd = () => {
    csButtonAdd.forEach(button => {
        button.addEventListener("click", () => {
            // Now I show create a row
            const newRow = document.createElement("div");
            newRow.className = "row rounded-2 shadow-lg mx-1 mb-2";

            // Now I should create a new div inside this row
            const ndivInNewRow = document.createElement("div");
            ndivInNewRow.className = "d-flex p-3 justify-content-between gap-2";

            newRow.appendChild(ndivInNewRow);


            //Inside this div, I create two divs
            // The first div
            const ndivInDiv1 = document.createElement("div");
            ndivInDiv1.className = "d-flex justify-content-center align-items-center gap-2";
            
            ndivInNewRow.appendChild(ndivInDiv1);

            // Now it is time for the first div content which is image
            // The first part of content
            const imgDiv = document.createElement("div");
            const imgs = document.createElement("img");
            imgs.src = "./images/uni9.jpg";
            imgs.className = "img-fluid rounded-2";
            imgs.height = "80px";
            imgs.width = "80px";
            imgDiv.appendChild(imgs);

            ndivInDiv1.appendChild(imgDiv);

            
            // The second part of content
            const collegeNameContainer = document.createElement("div");
            ndivInDiv1.appendChild(collegeNameContainer);


            // The content inisde the collegeName which is only the name of the college
            const collegeName = document.createElement("h4");
            collegeName.className = "fw-bold";
            collegeName.style.fontFamily = "Arial, Helvetica, sans-serif";
            const csNames = document.getElementById("csName6").textContent;
            collegeName.textContent = csNames;
            collegeNameContainer.appendChild(collegeName);

            const removeBtn = document.createElement("button");
            removeBtn.innerText = "Remove";
            removeBtn.className = "btn btn-danger btn-sm";
            removeBtn.onclick = function () {
                newRow.remove();
                saveData();
            };
            ndivInNewRow.appendChild(removeBtn);

            collegesDetails.appendChild(newRow);
            saveData();
        });
    });
}

function saveData() {
    localStorage.setItem("data", collegesDetails.innerHTML);
}
function dispalyData() {
    collegesDetails.innerHTML = localStorage.getItem("data");
}

document.addEventListener("DOMContentLoaded", () => {
    csAdd();
    dispalyData();
});

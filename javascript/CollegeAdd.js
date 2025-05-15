// Initially the program should access to all add college buttons.
const addCollegeButtons = document.querySelectorAll(".buttonCs");

// The program should access to all colleges contributed with the college containers.
const collegeContainers = document.querySelectorAll(".csUniversities");

// The program should access to all college names.
const collegeNames = document.querySelectorAll(".mainCollegeName");

// The program should also access to the allColleges containers
const collegesDetail = document.getElementById("NewCollege");
// The program iterate over the buttons of buttonsCs

// Now I should have access to alerts
const newCollegesAlerts = document.querySelectorAll(".alerts");

// Now I want to access to the images
const images = document.querySelectorAll(".csImgs");
let addedCollege = new Set();

const collegeNamess = document.querySelectorAll(".collegeName");
// I create an array where the university names are added to it, and then I will
// change the array to JSON and store that in the local storage
let universityArray = [];

let AddingCollege = () => {
    for (let i = 0; i < addCollegeButtons.length; i++) {
        
        addCollegeButtons[i].addEventListener("click", () => {
            const csNam = collegeNames[i].textContent.trim();
            if (addedCollege.has(csNam)) {
                alert(`${collegeNames[i].innerHTML} is already added to Dashboard`);
                return;
            }
            if (true) {
                addedCollege.add(csNam);
                universityArray.push( collegeNamess[i].textContent);
            }
            
            localStorage.setItem(`${i}`, collegeNames[i].innerHTML);
            // Now I show create a row
            const newRow = document.createElement("div");
            newRow.className = "row rounded-2 shadow-lg mx-1 mb-2 uniSearch colleges";
            newRow.id = `${i}1111`;

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



            imgDiv.appendChild(imgs);

            ndivInDiv1.appendChild(imgDiv);


            // The second part of content
            const collegeNameContainer = document.createElement("div");
            ndivInDiv1.appendChild(collegeNameContainer);



            // The second div 
            const ndivInDiv2 = document.createElement("div");
            ndivInDiv2.className = "d-flex flex-column";
            ndivInNewRow.appendChild(ndivInDiv2);

            imgs.src = images[i].src;
            imgs.className = "img-fluid rounded-2";
            imgs.height = "170";
            imgs.width = "170";
            // The content inisde the collegeName which is only the name of the college
            const collegeName = document.createElement("h4");
            collegeName.className = "fw-bold college-name";
            collegeName.style.fontFamily = "Arial, Helvetica, sans-serif";
            const csNames = collegeNames[i].textContent;
            collegeName.textContent = csNames;
            collegeNameContainer.appendChild(collegeName);


            // The first div and button inside the second div

            const buttonContainer1 = document.createElement("div");
            buttonContainer1.className = "mb-2";

            const button1 = document.createElement("button");
            button1.type = "button";
            button1.innerText = "Detail"
            button1.className = "btn btn-outline-info btn";
            buttonContainer1.appendChild(button1);

            ndivInDiv2.appendChild(buttonContainer1);

            localStorage.setItem("jsonUniversities", JSON.stringify(universityArray));

            // The second div and button inside the second div
            const buttonContainer2 = document.createElement("div");
            const button2 = document.createElement("button");
            button2.type = "button";
            button2.className = "btn btn-outline-info btn buttons";
            button2.innerText = "Remove";
            button2.setAttribute("data-id", i);
            button2.id = `${i}111`;
            button2.onclick = function () {
                const idToRemove = this.getAttribute("data-id");
                newCollegesAlerts[i].style.display = "block";
                newRow.remove();
                localStorage.removeItem(idToRemove); // ❗ removes `${i}` from localStorage
                saveAddedColleges();
            };
            buttonContainer2.appendChild(button2);
            ndivInDiv2.appendChild(buttonContainer2);

            collegesDetail.appendChild(newRow);
            alert("University is added to Dashboard");
            saveAddedColleges();
        });
    };
};

function saveAddedColleges() {
    localStorage.setItem("data", collegesDetail.innerHTML);
}
function displayAddedColleges() {
    collegesDetail.innerHTML = localStorage.getItem("data");

    // Reattach event listeners to all 'Remove' buttons
    const removeButtons = collegesDetail.querySelectorAll(".buttons");

    removeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const idToRemove = this.getAttribute("data-id");

            // Optional: show alert if it exists
            const alertBox = document.querySelectorAll(".alerts")[idToRemove];
            if (alertBox) alertBox.style.display = "block";

            // Remove the row
            const rowToRemove = document.getElementById(`${idToRemove}1111`);
            if (rowToRemove) rowToRemove.remove();

            localStorage.removeItem(idToRemove);
            saveAddedColleges();
        });
    });
}

// Now I change the university array to JSON
// const jsonObject = JSON.stringify(addedCollege);

// const objectJson = JSON.parse(jsonObject);
// console.log(objectJson[0])

AddingCollege();
displayAddedColleges();

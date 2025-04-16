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



// For the first College
const csButtonAdd = document.querySelectorAll(".buttonCSadd");
const collegesDetails = document.getElementById("NewCollege");

let addedColleges = new Set();
addedColleges.add("Kabul University");
addedColleges.add("Khazar University");
addedColleges.add("Brayan College");
addedColleges.add("Bayat College");
addedColleges.add("Moryan Univerrsity");
addedColleges.add("Kathryan College");

// let csAdd = () => {
//     csButtonAdd.forEach(button => {
//         button.addEventListener("click", () => {

//             const csName = document.getElementById("csName6").textContent.trim();
//             if (addedColleges.has(csName)){
//                 alert(`${document.getElementById("csName6").innerHTML} is already added to Dashboard`);
//                 return;
//             }
//             addedColleges.add(csName)
//             // Now I show create a row
//             const newRow = document.createElement("div");
//             newRow.className = "uniSearch";
//             newRow.className = "row rounded-2 shadow-lg mx-1 mb-2 colleges";
//             newRow.id = "TwelveUniversity";
//             // Now I should create a new div inside this row
//             const ndivInNewRow = document.createElement("div");
//             ndivInNewRow.className = "d-flex p-3 justify-content-between gap-2";

//             newRow.appendChild(ndivInNewRow);


//             //Inside this div, I create two divs
//             // The first div
//             const ndivInDiv1 = document.createElement("div");
//             ndivInDiv1.className = "d-flex justify-content-center align-items-center gap-2";
            
//             ndivInNewRow.appendChild(ndivInDiv1);

//             // Now it is time for the first div content which is image
//             // The first part of content
//             const imgDiv = document.createElement("div");
//             const imgs = document.createElement("img");
            
            
            
//             imgDiv.appendChild(imgs);
            
//             ndivInDiv1.appendChild(imgDiv);
            
            
//             // The second part of content
//             const collegeNameContainer = document.createElement("div");
//             ndivInDiv1.appendChild(collegeNameContainer);
            
            
            
//             // The second div 
//             const ndivInDiv2 = document.createElement("div");
//             ndivInDiv2.className = "d-flex flex-column";
//             ndivInNewRow.appendChild(ndivInDiv2);
            
//             imgs.src = "./images/uni9.jpg";
//             imgs.className = "img-fluid rounded-2";
//             imgs.height = "170";
//             imgs.width = "170";
//             // The content inisde the collegeName which is only the name of the college
//             const collegeName = document.createElement("h4");
//             collegeName.className = "fw-bold college-name";
//             collegeName.style.fontFamily = "Arial, Helvetica, sans-serif";
//             const csNames = document.getElementById("csName6").textContent;
//             collegeName.textContent = csNames;
//             collegeNameContainer.appendChild(collegeName);
                

//             // The first div and button inside the second div

//             const buttonContainer1 = document.createElement("div");
//             buttonContainer1.className = "mb-2";

//             const button1 = document.createElement("button");
//             button1.type = "button";
//             button1.innerText = "Detail"
//             button1.className = "btn btn-outline-info btn";
//             buttonContainer1.appendChild(button1);

//             ndivInDiv2.appendChild(buttonContainer1);


//             // The second div and button inside the second div
//             const buttonContainer2 = document.createElement("div");
//             const button2 = document.createElement("button");
//             button2.type = "button";
//             button2.className = "btn btn-outline-info btn";
//             button2.innerText = "Remove";
//             button2.onclick = function () {
//                 newRow.remove();
//                 saveData();
//             };
//             buttonContainer2.appendChild(button2);
//             ndivInDiv2.appendChild(buttonContainer2);

//             collegesDetails.appendChild(newRow);
//             saveData();
//             alert("Herat University is added to Dashboard")
//         });
//     });
// };

// // for the second college
// const csButtonAdd1 = document.querySelectorAll(".buttonCSadd1");
// let csAdd1 = () => {
//     csButtonAdd1.forEach(button => {
//         button.addEventListener("click", () => {
//             // Now I show create a row

//             const csName = document.getElementById("csName5").textContent.trim();
//             if (addedColleges.has(csName)) {
//                 alert(`${document.getElementById("csName5").innerHTML} is already added`);
//                 return;
//             }

//             addedColleges.add(csName);

//             const newRow = document.createElement("div");
//             newRow.className = "row rounded-2 shadow-lg mx-1 mb-2 uniSearch colleges";
//             newRow.id = "ElventhUniversity";

//             // Now I should create a new div inside this row
//             const ndivInNewRow = document.createElement("div");
//             ndivInNewRow.className = "d-flex p-3 justify-content-between gap-2";

//             newRow.appendChild(ndivInNewRow);


//             //Inside this div, I create two divs
//             // The first div
//             const ndivInDiv1 = document.createElement("div");
//             ndivInDiv1.className = "d-flex justify-content-center align-items-center gap-2";

//             ndivInNewRow.appendChild(ndivInDiv1);

//             // Now it is time for the first div content which is image
//             // The first part of content
//             const imgDiv = document.createElement("div");
//             const imgs = document.createElement("img");



//             imgDiv.appendChild(imgs);

//             ndivInDiv1.appendChild(imgDiv);


//             // The second part of content
//             const collegeNameContainer = document.createElement("div");
//             ndivInDiv1.appendChild(collegeNameContainer);



//             // The second div 
//             const ndivInDiv2 = document.createElement("div");
//             ndivInDiv2.className = "d-flex flex-column";
//             ndivInNewRow.appendChild(ndivInDiv2);

//             imgs.src = "./images/uni8.jpg";
//             imgs.className = "img-fluid rounded-2";
//             imgs.height = "170";
//             imgs.width = "170";
//             // The content inisde the collegeName which is only the name of the college
//             const collegeName = document.createElement("h4");
//             collegeName.className = "fw-bold college-name";
//             collegeName.style.fontFamily = "Arial, Helvetica, sans-serif";
//             const csNames = document.getElementById("csName5").textContent;
//             collegeName.textContent = csNames;
//             collegeNameContainer.appendChild(collegeName);


//             // The first div and button inside the second div

//             const buttonContainer1 = document.createElement("div");
//             buttonContainer1.className = "mb-2";

//             const button1 = document.createElement("button");
//             button1.type = "button";
//             button1.innerText = "Detail"
//             button1.className = "btn btn-outline-info btn";
//             buttonContainer1.appendChild(button1);

//             ndivInDiv2.appendChild(buttonContainer1);


//             // The second div and button inside the second div
//             const buttonContainer2 = document.createElement("div");
//             const button2 = document.createElement("button");
//             button2.type = "button";
//             button2.className = "btn btn-outline-info btn";
//             button2.innerText = "Remove";
//             button2.onclick = function () {
//                 newRow.remove();
//                 saveData();
//             };
//             buttonContainer2.appendChild(button2);
//             ndivInDiv2.appendChild(buttonContainer2);

//             collegesDetails.appendChild(newRow);
//             saveData();
//             alert("Balkh University is added to Dashboard")
//         });
//     });
// }

// // for the third college
// const csButtonAdd2 = document.querySelectorAll(".buttonCSadd2")
// let csAdd2 = () => {
//     csButtonAdd2.forEach(button => {
//         button.addEventListener("click", () => {

//             const csName = document.getElementById("csName4").textContent.trim();
//             if (addedColleges.has(csName)) {
//                 alert(`${document.getElementById("csName4").innerHTML} is already added!`);
//                 return;
//             }
//             addedColleges.add(csName);
//             // Now I show create a row
//             const newRow = document.createElement("div");
//             newRow.className = "row rounded-2 shadow-lg mx-1 mb-2 uniSearch colleges";
//             newRow.id = "TenthUniversity";

//             // Now I should create a new div inside this row
//             const ndivInNewRow = document.createElement("div");
//             ndivInNewRow.className = "d-flex p-3 justify-content-between gap-2";

//             newRow.appendChild(ndivInNewRow);


//             //Inside this div, I create two divs
//             // The first div
//             const ndivInDiv1 = document.createElement("div");
//             ndivInDiv1.className = "d-flex justify-content-center align-items-center gap-2";

//             ndivInNewRow.appendChild(ndivInDiv1);

//             // Now it is time for the first div content which is image
//             // The first part of content
//             const imgDiv = document.createElement("div");
//             const imgs = document.createElement("img");



//             imgDiv.appendChild(imgs);

//             ndivInDiv1.appendChild(imgDiv);


//             // The second part of content
//             const collegeNameContainer = document.createElement("div");
//             ndivInDiv1.appendChild(collegeNameContainer);



//             // The second div 
//             const ndivInDiv2 = document.createElement("div");
//             ndivInDiv2.className = "d-flex flex-column";
//             ndivInNewRow.appendChild(ndivInDiv2);

//             imgs.src = "./images/uni14.jpg";
//             imgs.className = "img-fluid rounded-2";
//             imgs.height = "170";
//             imgs.width = "170";
//             // The content inisde the collegeName which is only the name of the college
//             const collegeName = document.createElement("h4");
//             collegeName.className = "fw-bold college-name";
//             collegeName.style.fontFamily = "Arial, Helvetica, sans-serif";
//             const csNames = document.getElementById("csName4").textContent;
//             collegeName.textContent = csNames;
//             collegeNameContainer.appendChild(collegeName);


//             // The first div and button inside the second div

//             const buttonContainer1 = document.createElement("div");
//             buttonContainer1.className = "mb-2";

//             const button1 = document.createElement("button");
//             button1.type = "button";
//             button1.innerText = "Detail"
//             button1.className = "btn btn-outline-info btn";
//             buttonContainer1.appendChild(button1);

//             ndivInDiv2.appendChild(buttonContainer1);


//             // The second div and button inside the second div
//             const buttonContainer2 = document.createElement("div");
//             const button2 = document.createElement("button");
//             button2.type = "button";
//             button2.className = "btn btn-outline-info btn";
//             button2.innerText = "Remove";
//             button2.onclick = function () {
//                 newRow.remove();
//                 saveData();
//             };
//             buttonContainer2.appendChild(button2);
//             ndivInDiv2.appendChild(buttonContainer2);

//             collegesDetails.appendChild(newRow);
//             saveData();
//             alert("Ghazni University is added to Dashboard")
//         });
//     });
// };

// // for the fourth college
// const csButtonAdd3 = document.querySelectorAll(".buttonCSadd3");
// let csAdd3 = () => {
//     csButtonAdd3.forEach(button => {
//         button.addEventListener("click", () => {
//             const csName = document.getElementById("csName3").textContent.trim();
//             if (addedColleges.has(csName)) {
//                 alert(`${document.getElementById("csName3").innerHTML} is already added`);
//                 return;
//             }
//             addedColleges.add(csName);
//             // Now I show create a row
//             const newRow = document.createElement("div");
//             newRow.className = "row rounded-2 shadow-lg mx-1 mb-2 uniSearch colleges";
//             newRow.id = "NinethUniversity";

//             // Now I should create a new div inside this row
//             const ndivInNewRow = document.createElement("div");
//             ndivInNewRow.className = "d-flex p-3 justify-content-between gap-2";

//             newRow.appendChild(ndivInNewRow);


//             //Inside this div, I create two divs
//             // The first div
//             const ndivInDiv1 = document.createElement("div");
//             ndivInDiv1.className = "d-flex justify-content-center align-items-center gap-2";

//             ndivInNewRow.appendChild(ndivInDiv1);

//             // Now it is time for the first div content which is image
//             // The first part of content
//             const imgDiv = document.createElement("div");
//             const imgs = document.createElement("img");



//             imgDiv.appendChild(imgs);

//             ndivInDiv1.appendChild(imgDiv);


//             // The second part of content
//             const collegeNameContainer = document.createElement("div");
//             ndivInDiv1.appendChild(collegeNameContainer);



//             // The second div 
//             const ndivInDiv2 = document.createElement("div");
//             ndivInDiv2.className = "d-flex flex-column";
//             ndivInNewRow.appendChild(ndivInDiv2);

//             imgs.src = "./images/uni13.jpg";
//             imgs.className = "img-fluid rounded-2";
//             imgs.height = "170";
//             imgs.width = "170";
//             // The content inisde the collegeName which is only the name of the college
//             const collegeName = document.createElement("h4");
//             collegeName.className = "fw-bold college-name";
//             collegeName.style.fontFamily = "Arial, Helvetica, sans-serif";
//             const csNames = document.getElementById("csName3").textContent;
//             collegeName.textContent = csNames;
//             collegeNameContainer.appendChild(collegeName);


//             // The first div and button inside the second div

//             const buttonContainer1 = document.createElement("div");
//             buttonContainer1.className = "mb-2";

//             const button1 = document.createElement("button");
//             button1.type = "button";
//             button1.innerText = "Detail"
//             button1.className = "btn btn-outline-info btn";
//             buttonContainer1.appendChild(button1);

//             ndivInDiv2.appendChild(buttonContainer1);


//             // The second div and button inside the second div
//             const buttonContainer2 = document.createElement("div");
//             const button2 = document.createElement("button");
//             button2.type = "button";
//             button2.className = "btn btn-outline-info btn";
//             button2.innerText = "Remove";
//             button2.onclick = function () {
//                 newRow.remove();
//                 saveData();
//             };
//             buttonContainer2.appendChild(button2);
//             ndivInDiv2.appendChild(buttonContainer2);

//             collegesDetails.appendChild(newRow);
//             saveData();
//             alert("Somra College is added to Dashboard")
//         });
//     });
// };

// // for the fifth college
// const csButtonAdd4 = document.querySelectorAll(".buttonCsadd4");
// let csAdd4 = () => {
//     csButtonAdd4.forEach(button => {
//         button.addEventListener("click", () => {
//             const csName = document.getElementById("csName2").textContent.trim();
//             if (addedColleges.has(csName)) {
//                 alert(`${document.getElementById("csName2").innerHTML} is already added`);
//                 return;
//             }
//             addedColleges.add(csName);
//             // Now I show create a row
//             const newRow = document.createElement("div");
//             newRow.className = "row rounded-2 shadow-lg mx-1 mb-2 uniSearch";
//             newRow.id = "EigthUniversity";
//             // Now I should create a new div inside this row
//             const ndivInNewRow = document.createElement("div");
//             ndivInNewRow.className = "d-flex p-3 justify-content-between gap-2 colleges";

//             newRow.appendChild(ndivInNewRow);


//             //Inside this div, I create two divs
//             // The first div
//             const ndivInDiv1 = document.createElement("div");
//             ndivInDiv1.className = "d-flex justify-content-center align-items-center gap-2";

//             ndivInNewRow.appendChild(ndivInDiv1);

//             // Now it is time for the first div content which is image
//             // The first part of content
//             const imgDiv = document.createElement("div");
//             const imgs = document.createElement("img");



//             imgDiv.appendChild(imgs);

//             ndivInDiv1.appendChild(imgDiv);


//             // The second part of content
//             const collegeNameContainer = document.createElement("div");
//             ndivInDiv1.appendChild(collegeNameContainer);



//             // The second div 
//             const ndivInDiv2 = document.createElement("div");
//             ndivInDiv2.className = "d-flex flex-column";
//             ndivInNewRow.appendChild(ndivInDiv2);
//             imgs.src = "./images/uni12.jpg";
//             imgs.className = "img-fluid rounded-2";
//             imgs.height = "170";
//             imgs.width = "170";
//             // The content inisde the collegeName which is only the name of the college
//             const collegeName = document.createElement("h4");
//             collegeName.className = "fw-bold college-name";
//             collegeName.style.fontFamily = "Arial, Helvetica, sans-serif";
//             const csNames = document.getElementById("csName2").textContent;
//             collegeName.textContent = csNames;
//             collegeNameContainer.appendChild(collegeName);


//             // The first div and button inside the second div

//             const buttonContainer1 = document.createElement("div");
//             buttonContainer1.className = "mb-2";

//             const button1 = document.createElement("button");
//             button1.type = "button";
//             button1.innerText = "Detail"
//             button1.className = "btn btn-outline-info btn";
//             buttonContainer1.appendChild(button1);

//             ndivInDiv2.appendChild(buttonContainer1);


//             // The second div and button inside the second div
//             const buttonContainer2 = document.createElement("div");
//             const button2 = document.createElement("button");
//             button2.type = "button";
//             button2.className = "btn btn-outline-info btn";
//             button2.innerText = "Remove";
//             button2.onclick = function () {
//                 newRow.remove();
//                 saveData();
//             };
//             buttonContainer2.appendChild(button2);
//             ndivInDiv2.appendChild(buttonContainer2);

//             collegesDetails.appendChild(newRow);
//             saveData();
//             alert("Panama College is added to Dashboard")
//         });
//     });
// };

// // for the sixth college
// const csButtonAdd5 = document.querySelectorAll(".buttonCsadd5");
// let csAdd5 = () => {
//     csButtonAdd5.forEach(button => {
//         button.addEventListener("click", () => {

//             const csName = document.getElementById("csName1").textContent.trim();
//             if (addedColleges.has(csName)) {
//                 alert(`${document.getElementById("csName1").innerHTML} is already added!`)
//                 return;
//             }
//             addedColleges.add(csName);

//             // Now I show create a row
//             const newRow = document.createElement("div");
//             newRow.className = "row rounded-2 shadow-lg mx-1 mb-2 uniSearch colleges";
//             newRow.id = "SeventhUniversity";

//             // Now I should create a new div inside this row
//             const ndivInNewRow = document.createElement("div");
//             ndivInNewRow.className = "d-flex p-3 justify-content-between gap-2";

//             newRow.appendChild(ndivInNewRow);


//             //Inside this div, I create two divs
//             // The first div
//             const ndivInDiv1 = document.createElement("div");
//             ndivInDiv1.className = "d-flex justify-content-center align-items-center gap-2";

//             ndivInNewRow.appendChild(ndivInDiv1);

//             // Now it is time for the first div content which is image
//             // The first part of content
//             const imgDiv = document.createElement("div");
//             const imgs = document.createElement("img");



//             imgDiv.appendChild(imgs);

//             ndivInDiv1.appendChild(imgDiv);


//             // The second part of content
//             const collegeNameContainer = document.createElement("div");
//             ndivInDiv1.appendChild(collegeNameContainer);



//             // The second div 
//             const ndivInDiv2 = document.createElement("div");
//             ndivInDiv2.className = "d-flex flex-column";
//             ndivInNewRow.appendChild(ndivInDiv2);

//             imgs.src = "./images/uni11.jpg";
//             imgs.className = "img-fluid rounded-2";
//             imgs.height = "170";
//             imgs.width = "170";
//             // The content inisde the collegeName which is only the name of the college
//             const collegeName = document.createElement("h4");
//             collegeName.className = "fw-bold college-name";
//             collegeName.style.fontFamily = "Arial, Helvetica, sans-serif";
//             const csNames = document.getElementById("csName1").textContent;
//             collegeName.textContent = csNames;
//             collegeNameContainer.appendChild(collegeName);


//             // The first div and button inside the second div

//             const buttonContainer1 = document.createElement("div");
//             buttonContainer1.className = "mb-2";

//             const button1 = document.createElement("button");
//             button1.type = "button";
//             button1.innerText = "Detail"
//             button1.className = "btn btn-outline-info btn";
//             buttonContainer1.appendChild(button1);

//             ndivInDiv2.appendChild(buttonContainer1);


//             // The second div and button inside the second div
//             const buttonContainer2 = document.createElement("div");
//             const button2 = document.createElement("button");
//             button2.type = "button";
//             button2.className = "btn btn-outline-info btn";
//             button2.innerText = "Remove";
//             button2.onclick = function () {
//                 newRow.remove();
//                 saveData();
//             };
//             buttonContainer2.appendChild(button2);
//             ndivInDiv2.appendChild(buttonContainer2);

//             collegesDetails.appendChild(newRow);
//             saveData();
//             alert("Polytechnic University is added to Dashboard");
//         });
//     });
// };

function saveData() {
    localStorage.setItem("data", collegesDetails.innerHTML);
}
function dispalyData() {
    collegesDetails.innerHTML = localStorage.getItem("data");
}

document.addEventListener("DOMContentLoaded", () => {
    csAdd();

    csAdd1();

    csAdd2();

    csAdd3();

    csAdd4();

    csAdd5();
    dispalyData();
});

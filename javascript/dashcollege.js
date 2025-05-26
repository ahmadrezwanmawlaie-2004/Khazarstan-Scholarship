// const dashCollege = document.getElementById("dashCollege");

// dashCollege.addEventListener("click", () => {
//     window.location.href = "E:/WEB DEVELOPMENT/Khazarstan Scholarship/Dashboard.html";
//     document.getElementById("dashboardUniversities").style.display = "none";
//     document.getElementById("collegeSearchUniversity").style.display = "block";
    
// });
const userNameJS = document.getElementById("userName");

const userEmailJS = document.getElementById("userEmail");

const userIdJS = document.getElementById("userId");


const khazarID = Math.floor(Math.random() * 1000000);
const transfterStudentInformationJSON = localStorage.getItem("transferStudentInformation");
const firstyearStudentInformationJSON= localStorage.getItem("FirstYearStudentAccount");
if(transfterStudentInformationJSON){
    const transfterStudentInformation = JSON.parse(transfterStudentInformationJSON);
    userNameJS.innerHTML = transfterStudentInformation.nameFirst;
    userEmailJS.innerHTML = transfterStudentInformation.emailAddress;
    userIdJS.innerHTML = khazarID;
};
if(firstyearStudentInformationJSON){
    const firstYearStudentInformation= JSON.parse(firstyearStudentInformationJSON);
    userNameJS.innerHTML = firstYearStudentInformation.firstNameF;
    userEmailJS.innerHTML = firstYearStudentInformation.emailAddressF;
    userIdJS.innerHTML = khazarID;
}
























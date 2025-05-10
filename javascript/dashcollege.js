// const dashCollege = document.getElementById("dashCollege");

// dashCollege.addEventListener("click", () => {
//     window.location.href = "E:/WEB DEVELOPMENT/Khazarstan Scholarship/Dashboard.html";
//     document.getElementById("dashboardUniversities").style.display = "none";
//     document.getElementById("collegeSearchUniversity").style.display = "block";
    
// });
const userNameJS = document.getElementById("userName");
userNameJS.innerHTML = localStorage.getItem(`name:1`)

const userEmailJS = document.getElementById("userEmail");
userEmailJS.innerHTML = localStorage.getItem("email:1");

const userIdJS = document.getElementById("userId");
userIdJS.innerHTML = localStorage.getItem("khazarID:1");
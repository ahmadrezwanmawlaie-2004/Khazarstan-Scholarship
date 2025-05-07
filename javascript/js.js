document.getElementById("firstYear").addEventListener("click", () => {
    document.getElementById("part2FirstyearStudent").style.display = "block";
    document.getElementById("part1Welcome").style.display = "none";
    
});

const passwordU1 = document.getElementById("password");
const repasswordU1 = document.getElementById("repassword");
const pattern = /^[a-zA-Z]+[0-9]+[$]+$/;
let passswordPatternsRules = () => {
    passwordU1.addEventListener("input", () => {
        if (pattern.test(passwordU1.value)) {
            document.getElementById("x1").innerHTML = "&#10004";
            document.getElementById("x2").innerHTML = "&#10004";
            document.getElementById("x3").innerHTML = "&#10004";
            document.getElementById("x4").innerHTML = "&#10004";
            document.getElementById("x5").innerHTML = "&#10004";
            document.getElementById("x6").innerHTML = "&#10004";
        };

    });
    repasswordU1.addEventListener("input", () => {
        if (passwordU1.value === repasswordU1.value) {
            document.getElementById("x7").innerHTML = "&#10004";
        }
    });
};
passswordPatternsRules();
const randomNumber = Math.floor((Math.random() * 10));
const locationSubmission = document.getElementById("locationSubmission");
locationSubmission.addEventListener("click", () => {
    const country = document.getElementById("address");
    const buttonLocation = document.getElementById("addressLocationButton");
    const locationAddress = document.getElementById("addressLoc");
    if (country.value === "" && locationAddress.value === "") {
        alert("Please add your address!🤔")
    } else {
        localStorage.setItem(`country:${randomNumber}`, country.value);
        localStorage.setItem(`location:${randomNumber}`, locationAddress.value);
        buttonLocation.innerHTML = localStorage.getItem(`country:${randomNumber}`);
        locationSubmission.setAttribute("data-bs-dismiss", "modal");

    }
});




const saveButton = document.getElementById("saveForm");
let information = () => {
    saveButton.addEventListener("click", () => {
        const emailAddres = document.getElementById("emailAdress");
        const retypeEmailAddres = document.getElementById("retypeemailAdress");
        if (emailAddres.value === retypeEmailAddres.value) {
            localStorage.setItem(`email:${randomNumber}`, emailAddres.value);
        } else {
            alert("The email do not match! 🤔")
        };


        const passwordU = document.getElementById("password");
        const repasswordU = document.getElementById("repassword");
        const pattern = /^[a-zA-Z]+[0-9]+[$]+$/;
        if (pattern.test(passwordU.value)) {
            document.getElementById("x1").innerHTML = "&#10004";
            document.getElementById("x2").innerHTML = "&#10004";
            document.getElementById("x3").innerHTML = "&#10004";
            document.getElementById("x4").innerHTML = "&#10004";
            document.getElementById("x5").innerHTML = "&#10004";
            document.getElementById("x6").innerHTML = "&#10004";
            if (passwordU.value === repasswordU.value) {
                localStorage.setItem(`password:${randomNumber}`, passwordU.value)
            } else {
                alert("The passwords do not match! 🤔")
            }
        } else {
            alert("Password must contain letters, numbers, and end with at least one $ sign. ❗");
        };
        
        
        const name = document.getElementById("firstname");
        if (name.value === "") {
            alert("Please write the name! 🤔")
        } else {
            localStorage.setItem(`name:${randomNumber}`, name.value)
        };

        const lastName = document.getElementById("lastName");
        if (lastName.value === "") {
            alert("Please write the last name! 🤔")
        } else {
            localStorage.setItem(`lastName:${randomNumber}`, lastName.value)
        };

        const birthDate = document.getElementById("birthdate");
        if (birthDate.value === "") {
            alert("Please select your birthday date! 🤔")
        } else {
            localStorage.setItem(`birthdate:${randomNumber}`, birthDate.value);
        };

        const phone = document.getElementById("phoneNumber");
        if (phone.value === "") {
            alert("Please write valid phone number! 🤔")
        } else {
            localStorage.setItem(`phone:${randomNumber}`, phone.value);
        }
       

    });
};
information();





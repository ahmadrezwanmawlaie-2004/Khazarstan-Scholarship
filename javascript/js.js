document.getElementById("firstYear").addEventListener("click", () => {
    document.getElementById("part2FirstyearStudent").style.display = "block";
    document.getElementById("part1Welcome").style.display = "none";
    
});
document.getElementById("transferStudent").addEventListener("click", () => {
    document.getElementById("registrationbody").style.background = "#F3F3F3";
    document.getElementById("part3TransfterStudent").style.display = "block";
    document.getElementById("part1Welcome").style.display = "none";
    
});

const passwordU1 = document.getElementById("password");
const repasswordU1 = document.getElementById("repassword");
const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[\d]).{8,32}$/;
let passswordPatternsRules = () => {
    passwordU1.addEventListener("input", () => {
        if (pattern.test(passwordU1.value)) {
            document.getElementById("x1").innerHTML = "&#10004";
            document.getElementById("x2").innerHTML = "&#10004";
            document.getElementById("x3").innerHTML = "&#10004";
            document.getElementById("x4").innerHTML = "&#10004";
            document.getElementById("x5").innerHTML = "&#10004";
        } else {
            document.getElementById("x1").innerHTML = "&#10008";
            document.getElementById("x2").innerHTML = "&#10008";
            document.getElementById("x3").innerHTML = "&#10008";
            document.getElementById("x4").innerHTML = "&#10008";
            document.getElementById("x5").innerHTML = "&#10008";
        };

    });
    repasswordU1.addEventListener("input", () => {
        if (passwordU1.value === repasswordU1.value) {
            document.getElementById("x7").innerHTML = "&#10004";
        } else {
            document.getElementById("x7").innerHTML = "&#10008";
        }
    });
};
passswordPatternsRules();



const randomNumber1 = Math.floor((Math.random() * 1000000));
const locationSubmission1 = document.getElementById("locationSubmission");
const saveButton = document.getElementById("saveForm");
let newForm = true;
let information = () => {
    saveButton.addEventListener("click", () => {
        const emailAddres = document.getElementById("emailAdress");
        const retypeEmailAddres = document.getElementById("retypeemailAdress");
        if (emailAddres.value === retypeEmailAddres.value) {
            localStorage.setItem(`email:${1}`, emailAddres.value);
        } else {
            alert("The email do not match! 🤔");
            newForm = false;
        };


        const passwordU = document.getElementById("password");
        const repasswordU = document.getElementById("repassword");
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[\d]).{8,32}$/;
        if (pattern.test(passwordU.value)) {
            if (passwordU.value === repasswordU.value) {
                localStorage.setItem(`password:${1}`, passwordU.value)
            } else {
                alert("The passwords do not match! 🤔");
                
            }
        } else {
            alert("Password must contain letters, numbers ❗");
            
        };
        
        
        const name = document.getElementById("firstname");
        if (name.value === "") {
            alert("Please write the name! 🤔");
            newForm = false;
        } else {
            localStorage.setItem(`name:${1}`, name.value);
            newForm = true;
        };

        const lastName = document.getElementById("lastName");
        if (lastName.value === "") {
            alert("Please write the last name! 🤔");
            newForm = false;
        } else {
            localStorage.setItem(`lastName:${1}`, lastName.value);
            
            newForm = true;
        };

        const birthDate = document.getElementById("birthdate");
        if (birthDate.value === "") {
            alert("Please select your birthday date! 🤔")
            newForm = false;
        } else {
            localStorage.setItem(`birthdate:${1}`, birthDate.value);
            newForm = true;
            
        };

        const phone = document.getElementById("phoneNumber");
        if (phone.value === "") {
            alert("Please write valid phone number! 🤔")
            newForm = false;
        } else {
            localStorage.setItem(`phone:${1}`, phone.value);
            newForm = true;
            
        }

        const selected = document.querySelector('input[name="checkBox"]:checked');
        if (selected) {
            localStorage.setItem(`status:${1}`, selected.value);
            newForm = true;
        } else {
            alert("Please Check! 🤔");
            newForm = false;
        };

        const selectedEuropean = document.querySelector('input[name="checkbox7"]:checked');
        if (selectedEuropean) {
            localStorage.setItem(`european:${1}`, selectedEuropean.value);
            newForm = true;
        } else {
            alert("Please Check! 🤔");
            newForm = false;
        };

        const selectedEmail = document.querySelector('input[name="checkbox11"]:checked');
        if (selectedEmail) {
            localStorage.setItem(`emailReciver:${1}`, selectedEmail.value);
            newForm = true;
        } else {
            alert("Please Check! 🤔");
            newForm = false;
        };
        localStorage.setItem("khazarID:1", randomNumber1);
        if (newForm) {
            window.open("Dashboard.html", "_self");
        } else {
            alert("Please fill all the fields! 🤔");
        }
        
        
    });
};
information();

const addressLocationButtonJS = document.getElementById("addressLocationButton");
const locationSubmissionJS = document.getElementById("locationSubmission");
const addressesJS = document.getElementById("addresses");
const addressLocJS = document.getElementById("addressLoc");
locationSubmissionJS.addEventListener("click", () => {
    if (addressesJS.value === "" && addressLocJS.value === "") {
        alert("Please write your adddress! 🤔");
    } else {
        addressLocationButtonJS.innerHTML = addressesJS.value + " " + addressLocJS.value;
        localStorage.setItem(`address:${1}`, addressesJS.value + " " + addressLocJS.value);
        // document.getElementById("AddresssLocation").style.display = "none";
        locationSubmissionJS.setAttribute("data-bs-dismiss", "modal");
    };
});
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

const transferAccountCreation = document.getElementById("transferButtonAccount");
const inputValues = document.querySelectorAll(".transferValues");
// Now accessing each txts, radios, checkbox
const txt1 = document.getElementById("fName");
const txt2 = document.getElementById("lName");
const txt3 = document.getElementById("sName");
const txt4 = document.getElementById("tCemail");
const txt5 = document.getElementById("temail");
const txt6 = document.getElementById("preferNumber");
const txt7 = document.getElementById("alternatePhone");
const txt8 = document.getElementById("userName");
const txt9 = document.getElementById("passwordT");
const txt10 = document.getElementById("passwordRT");
const pattern2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[\d]).{8,32}$/;
const pattern3 = /^\+?[0-9]+$/;
const alertAccountCreationTransferStudent = document.getElementById("alertAccountCreation");

transferAccountCreation.addEventListener("click", () => {
    for (let i = 0; i < inputValues.length; i++) {
        if (inputValues[i].value === "") {
            alert("Please fill all the fields! 🤔");
            break;
        };
    };
    if (txt4.value !== txt5.value) {
        alert("The email addresses do not match! ❗");
        return;

    } else if (pattern3.test(txt6.value) === false && pattern3.test(txt7.value) === false) {
        alert("Please write a valid phone number! ❗");
        return;

    } else if (pattern2.test(txt9.value) === false) {
        alert("The password must contain letters, numbers and special characters! ❗");
        return;

    } else if (txt9.value !== txt10.value) {
        alert("The passwords do not match! ❗");
        return;
    } else {
        let transferStudentInfo = {
            nameFirst: `${txt1.value}`, nameLast: `${txt2.value}`, suffix: `${txt3.value}`, emailAddress: `${txt5.value}`, phoneNumber: `${txt6.value}`, alternativePhoneNumber: `${txt7.value}`, userName: `${txt8.value}`, userPassword: `${txt9.value}`
        };
        const tranferInformation = JSON.stringify(transferStudentInfo);
        localStorage.setItem("transferStudentInformation", tranferInformation);
        alertAccountCreationTransferStudent.style.display = "block";
        setTimeout(() => {
            window.open("Dashboard.html", "_self");
        }, 1000);
    }
    for (let i = 0; i < inputValues.length; i++) {
        inputValues[i].value = "";
    }
})

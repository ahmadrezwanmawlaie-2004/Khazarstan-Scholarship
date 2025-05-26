document.getElementById("firstYear").addEventListener("click", () => {
    document.getElementById("part2FirstyearStudent").style.display = "block";
    document.getElementById("part1Welcome").style.display = "none";
    
});
document.getElementById("transferStudent").addEventListener("click", () => {
    document.getElementById("registrationbody").style.background = "#F3F3F3";
    document.getElementById("part3TransfterStudent").style.display = "block";
    document.getElementById("part1Welcome").style.display = "none";
    
});

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

//
// 
// The tranfer Account Creation
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
});


//
//
// 
// The first year Account Creation
const text1= document.getElementById("emailAdress");
const text2= document.getElementById("retypeemailAdress");
const text3= document.getElementById("password");
const text4= document.getElementById("repassword");
const text5= document.getElementById("firstname");
const text6= document.getElementById("lastName");
const text7= document.getElementById("birthdate");

const randomNumber1 = Math.floor((Math.random() * 1000000));
const firstYearAccount = document.getElementById("FirstYearStudentAccount");
const firstYearTextsValues = document.querySelectorAll(".firstYearTexts");
firstYearAccount.addEventListener("click", () => {
    for (let i = 0; i < firstYearTextsValues.length; i++) {
        if (firstYearTextsValues[i].value === "") {
            alert("Please fill all the fields! 🤔");
            break;
        };
    }
    if(text1.value !== text2.value){
        alert("The email addresses do not match! ❗");
        return;
    } else if(pattern2.test(text3.value)=== false){
        alert("The password must contain letters, numbers and special characters! ❗");
        return;
    } else if(text3.value !== text4.value){
        alert("The passwords do not match! ❗");
        return;
    } else{
        let firstYearStudent={emailAddressF: `${text1.value}`, passwrodF: `${text3.value}`, firstNameF: `${text5.value}`, lastNameF: `${text6.value}`, birthDate: `${text7.value}` };
        const firstYearStudentJSON= JSON.stringify(firstYearStudent);
        localStorage.setItem("FirstYearStudentAccount", firstYearStudentJSON);
        alertAccountCreationTransferStudent.style.display = "block";
        setTimeout(() => {
            window.open("Dashboard.html", "_self");
        }, 1000);
    };
    for (let i = 0; i < firstYearTextsValues.length; i++) {
        firstYearTextsValues[i].value = "";
    }
});


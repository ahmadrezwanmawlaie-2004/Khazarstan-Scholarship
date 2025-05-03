document.getElementById("firstYear").addEventListener("click", () => {
    document.getElementById("part2FirstyearStudent").style.display = "block";
    document.getElementById("part1Welcome").style.display = "none";
    
});

document.getElementById("password").addEventListener("input", () => {
    const password = document.getElementById("password").value;
    if (password.length >= 10 && password.length <= 32) {
        document.getElementById("x1").innerHTML = "&#10004";
    } else {
        document.getElementById("x1").innerHTML = "&#10008";
    };
    for (let i = 0; i < password.length; i++){
        if (password[i] == password[i].toUpperCase()) {
            document.getElementById("x2").innerHTML = "&#10004";
        } else {
            document.getElementById("x2").innerHTML = "&#10008";
        };

        if (password[i] == password[i].toLowerCase()) {
            document.getElementById("x3").innerHTML = "&#10004";
        } else {
            document.getElementById("x3").innerHTML = "&#10008";
        };
    }
});


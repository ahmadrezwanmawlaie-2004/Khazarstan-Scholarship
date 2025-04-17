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



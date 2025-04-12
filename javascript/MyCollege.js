const buttons = document.querySelectorAll(".buttons");
const detailCollege = document.querySelectorAll(".colleges");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        detailCollege.forEach(detail => {
            detail.style.display="none";
        });
        document.getElementById("myCollege").style.display = "none";
        const targetDetail = document.getElementById(targetId);
        targetDetail.style.display = 'block';
    });
});
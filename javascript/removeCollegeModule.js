const collegebuttons = document.querySelectorAll(".buttons");
const colleges = document.querySelectorAll(".colleges");
// Using this loop, we iterate through the buttons and add an event listener to each button.
// When button with the (i) index is clicked,  it will remove the content with the same index (i) in the colleges array.
let toggleColleges = () => {
    for (let i = 0; i <= collegebuttons.length - 1; i++) {
        collegebuttons[i].addEventListener("click", () => {
            colleges[i].toggleAttribute("hidden");

        });
    };
};
toggleColleges();



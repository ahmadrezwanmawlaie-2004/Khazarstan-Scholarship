const searchValue = document.getElementById("searchBar");
searchValue.addEventListener("input", function () {
    const searchString = searchValue.value.toLowerCase();
    const searchResults = document.querySelectorAll(".colleges");
    searchResults.forEach((college) => {
        const collegeName = college.querySelector(".college-name").textContent.toLowerCase();
        if (collegeName.includes(searchString)) {
            college.style.display = "block";
        } else {
            college.style.display = "none";
        }
        
    });
});

// Get the elements with class="column"
let column = document.querySelectorAll(".column");
let btn = document.getElementsByClassName("btn");
// decelare the variable
let i;
// Full-width images
btn[0].addEventListener("click", () => {
    for (i = 0; i < column.length; i++) {
        column[i].style.msFlex = "100%"; // IE10
        column[i].style.flex = "100%";
    }
});

// Two images side by side
btn[1].addEventListener("click", () => {
    for (i = 0; i < column.length; i++) {
        column[i].style.msFlex = "50%"; // IE10
        column[i].style.flex = "50%";
    }
});

// Four images side by side
btn[2].addEventListener("click", () => {
    for (i = 0; i < column.length; i++) {
        column[i].style.msFlex = "30%"; // IE10
        column[i].style.flex = "30%";
    }
});

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
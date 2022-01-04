//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// console.log(btns);

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // console.log(e.currentTarget); - this logs to console when you click a button to say which one you clicked
    const styles = e.currentTarget.classList;
    //by adding classList were targeting the classList within the current target within the event (within the object).
    //And this returns an array into the console with the list of classes against the button pressed, (eg Reset button = "btn" "reset" and "btn reset").
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if ((count = 0)) {
      value.style.color = "black";
    }
    //so below we ensure the logic above is updating the text content within the count variable.
    value.textContent = count;
  });
});

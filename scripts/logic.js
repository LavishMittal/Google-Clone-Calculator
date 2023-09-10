// code to show the string in input box
var btn = document.getElementsByTagName("button");

for (let i = 0; i < btn.length; i++) {
  // console.log(btn[i].value);
  btn[i].addEventListener("click", function () {
    document.getElementById("result").value += btn[i].value;
  });
 
}

// code for keyboard key
$("#result").keypress(function (event) {
    if (event.keyCode === 13) {
        $("#output").click();
    }
});


// code for output and result
output.addEventListener("click", function () {
        let x = document.getElementById("result").value;
        let y = eval(x);
        document.getElementById("result").value = y;
});

// code to clear the input box
clear.addEventListener("click", function () {
  document.getElementById("result").value = "";
});


const test = document.getElementById("paragrafo-id");
console.log(test);

test.addEventListener(
    "mouseenter",
    (event) => {
      // highlight the mouseenter target
      event.target.style.fontSize = "100px";
  
      // reset the color after a short delay
      setTimeout(() => {
        event.target.style.fontSize = "50px";
      }, 500);
    },
    false,
  );
  
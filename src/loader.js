/*
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "main").style.visibility = "hidden";
        document.querySelector(
          "#lds-ellipsis").style.visibility = "visible";
    } else {
        document.querySelector(
          "#lds-ellipsis").style.display = "none";
        document.querySelector(
          "main").style.visibility = "visible";
    }
};
*/

function end_loader() {
    var loader = document.querySelector(".lds-ellipsis");
    loader.style.opacity = 0;
    setTimeout(function () {
      loader.style.display = "none";
    }, 800);
  }
  
  window.addEventListener("load", function () {
    setTimeout(function () {
      end_loader();
    }, 3000);
  });
var buttons = document.getElementsByClassName("button");
var arr = [...buttons];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.background = "#F6F6F6";

    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.background = "#FFFFFF";
      });
  });
});

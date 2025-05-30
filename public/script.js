function showPopup() {
  const popup = document.getElementById("popup");
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 3000); // visible for 3 seconds
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  const keyCode = event.keyCode;

  if (
    (keyCode >= 112 && keyCode <= 123) ||           // F1-F12
    (key === "Tab" || keyCode === 9) ||             // Tab
    (event.ctrlKey && key.toUpperCase() === 'U') || // Ctrl+U
    (event.ctrlKey && (key === '+' || key === '-' || keyCode === 187 || keyCode === 189)) || // Ctrl + + / -
    (event.ctrlKey && event.shiftKey && ['I', 'J', 'C'].includes(key.toUpperCase())) // DevTools keys
  ) {
    event.preventDefault();
    showPopup();
  }
});

document.addEventListener("wheel", function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
    showPopup();
  }
}, { passive: false });

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  showPopup();
});
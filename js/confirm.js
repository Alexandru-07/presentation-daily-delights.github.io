const outputTime = document.getElementById("timer");
document.addEventListener("DOMContentLoaded", () => {
  let theTimer = setInterval(() => {
    outputTime.innerHTML -= 1;
  }, 1000);

  setTimeout(() => {
    clearInterval(theTimer);
    window.location.href = "../html/main.html";
  }, 5000);
});

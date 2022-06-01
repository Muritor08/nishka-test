var count = 20; // Timer
var redirect = "/"; // Target URL

export default function countDown() {
  var timer = document.getElementById("timer"); // Timer ID
  if (count > 0) {
    count--;
    timer.innerHTML = "This page will redirect in " + count + " seconds."; // Timer Message
    setTimeout("countDown()", 1000);
  } else {
    window.location.href = redirect;
  }
}
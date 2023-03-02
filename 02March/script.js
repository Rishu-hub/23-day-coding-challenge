var ball = document.querySelector(".ball");
y = 1;
ga = 1;

setInterval(function () {
  if (y > 420) {
    ga = -ga;
  }
  ga += 1;
  y = y + ga;
  ball.style.top = y + "px";
  info.innerText = "Y : " + y + ", G : " + ga;
}, 50);

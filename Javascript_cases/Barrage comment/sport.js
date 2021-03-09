function startMove(oSpan, endPos, endFunc) {
  console.log(oSpan.innerHTML);
  if(oSpan.innerHTML === "") {
    endFunc();
    return;
  }
  console.log("Good node.");
  let oSpanLeft = oSpan.offsetLeft;
  let barrageTimer = setInterval(function () {
    oSpan.style.left = oSpanLeft - 10 + "px";
    oSpanLeft = oSpan.offsetLeft;

    if (oSpanLeft < endPos.left) {
      endFunc();
      clearInterval(barrageTimer);
    }
  }, 50);
}

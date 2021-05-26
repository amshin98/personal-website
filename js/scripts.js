// Used to change today's quote text
window.onload = function changeTQ() {
  const quoteH1 = document.getElementById("quote");
  const dateDayNum = new Date().getDate();
  let quote = "Today's quote: \"I don't know what I did, but it ";

  if (dateDayNum % 2 == 0) {
    quote = quote + "works.\" ";
  }
  else {
    quote = quote + "stopped working.\" ";
  }

  quote = quote + " - Me";

  quoteH1.innerHTML = quote;
}
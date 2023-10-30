document.querySelector(".printbtn").addEventListener("click", handlePrintBtn);

function handlePrintBtn() {
  document.querySelector(".printbtn").style.display = "none";
  document.querySelector(".back-button-container").style.display = "none";
  window.print();

  setTimeout(() => {
    document.querySelector(".printbtn").style.display = "block";
    document.querySelector(".back-button-container").style.display = "block";
  }, 2000);
}

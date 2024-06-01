function readMoreClicked(buttonId) {
    console.log(buttonId)
    var dots = document.getElementById("dots"+buttonId);
    var moreText = document.getElementById("more"+buttonId);
    var btnText = document.getElementById("myBtn"+buttonId);
    console.log("dots"+buttonId+88888887777777)
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Close";
        moreText.style.display = "inline";
    }
}

window.onload = (event) => {
    setTimeout(() => {
      document.querySelector('.container').style.display = "none";
      document.querySelector('.everything').style.display = "block";
    },1000);
}

function openNav() {
    document.getElementById("myNav").style.display = "block";
}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
}

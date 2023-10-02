function scrolltoTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Berubah Warna Pada h4 Jumbotron
const title = document.getElementById("name-jumbotron");

const colorarrayrainbow = [
  "#0197b8",
  "#4682B4",
  "#7DF9FF",
  "white",
  "40E0D0",
  "#00FFFF",
];

let counter = 0;

const titleinterval = setInterval(function () {
  title.style.color = colorarrayrainbow[counter % colorarrayrainbow.length];
  counter += 1;
}, 1000);

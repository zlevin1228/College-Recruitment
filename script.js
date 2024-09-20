// code from geeks for geeks
function search_majors() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('majors');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
        }

    }
}

const teamMembers = [
    {
      name: "Edgar Allan Poe",
      age: "40 (deceased)",
      birth: "January 19, 1809-October 7, 1849",
      profession: "Poet",
      position: "Center",
      biography:
        "Edgar Allan Poe, born in 1809, was an influential American writer whose works, like <i>The Raven</i>, are celebrated for their macabre and gothic style. His life was marked by personal loss and financial hardship, leading to his early death in 1849, leaving a lasting literary legacy.",
      img: "imgs/eap2.webp"
    },
    {
      name: "D'Brickashaw Ferguson",
      age: 40,
      birth: "December 10, 1983-Present Day",
      profession: "NFL Offensive Tackle",
      position: "Winger",
      biography:
        "D'Brickashaw Ferguson, born in 1983, is a former NFL offensive tackle who played for the New York Jets. Known for his strong performance and leadership on the field, Ferguson earned multiple Pro Bowl selections before retiring and focusing on community and philanthropic efforts.",
      img: "imgs/dbrick.jpg"
    },
    {
      name: "Sarah Drew",
      age: 43,
      birth: "October 1, 1980-Present Day",
      profession: "Actress",
      position: "Defenseman",
      biography:
        "Sarah Drew, born in 1980, is an American actress known for her role as April Kepner on <i>Grey's Anatomy</i> and her work in theater. With a career spanning television, film, and philanthropy, Drew continues to make a significant impact both on and off the screen, balancing her many roles.",
      img: "imgs/sarahgreys.webp"
    },
  ];

function generateTeamCards() {
    const teamCardsContainer = document.getElementById("teamCardsExtras");

  teamMembers.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");
    card.classList.add("py-2");

    let backgroundColor;
    switch (member.name) {
      case "Edgar Allan Poe":
        backgroundColor = "#A9A9A9"; // Red for centers
        break;
      case "D'Brickashaw Ferguson":
        backgroundColor = "#125740"; // Blue for defensemen
        break;
      case "Sarah Drew":
        backgroundColor = "#000035"; // Green for wingers
        break;
      default:
        backgroundColor = "gray"; // Gray for other positions
    }

    card.innerHTML = `
        <div class = "card text-white">
          <div class = "card-header">
            ${member.name}
          </div>
          <div class = "card-image">
            <img src="${member.img}" class="img-fluid" style="max-height:200px;">
          </div>
          <div class = "card-body py-0" style="background-color:${backgroundColor};">
           <p><strong>Age: </strong>${member.age}</p> 
          </div>
          <div class = "card-body py-0" style="background-color:${backgroundColor};">
            <p><strong>Lifetime: </strong>${member.birth}</p> 
          </div>
          <div class = "card-body py-0" style="background-color:${backgroundColor};">
            <p><strong>Profession: </strong>${member.profession}</p> 
          </div>
          <div class = "card-body py-0" style="background-color:${backgroundColor};">
            <p><strong>Biography: </strong>${member.biography}</p> 
          </div>
        </div>
        `;
    for (let i = 0; i < card.children.length; i++) {
      card.children[i].style.backgroundColor = backgroundColor;
    }
    teamCardsContainer.appendChild(card);
  });   
}

// CODE FOR QUOTE SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

window.onload = function (event) {
  setInterval(function () {
    plusSlides(1);
  }, 7500);
  generateTeamCards();
};
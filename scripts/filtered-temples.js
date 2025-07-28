const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5088.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-45825.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015-06-05",
    area: 96630,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-11086.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020-05-02",
    area: 6861,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-27360.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974-11-19",
    area: 156558,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-26454.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986-01-10",
    area: 9600,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-los-olivos-temple/lima-peru-los-olivos-temple-42523.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004-01-11",
    area: 17400,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-5151.jpg"
  },
  {
    templeName: "Barranquilla Colombia",
    location: "Barranquilla, Colombia",
    dedicated: "2018-12-09",
    area: 24643,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-43.jpg"
  },
  {
    templeName: "Antananarivo Madagascar",
    location: "Antananarivo, Madagascar",
    dedicated: "2021-11-01",
    area: 9600,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/antananarivo-madagascar-temple/antananarivo-madagascar-temple-57247.jpg"
  }
];

function creatTempleCard(temple) {
  const card = document.createElement("figure");
  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = "lazy";
  img.width = 400;
  img.height = 600;

  const caption = document.createElement("figcaption");
  caption.innerHTML = `<strong>${temple.templeName}</strong><br> 
  Location: ${temple.location}<br>
  Dedicated: ${temple.dedicated}<br>
  Area: ${temple.area.toLocaleString()} sq ft`;

  card.appendChild(img);
  card.appendChild(caption);
  return card;
}
function displayTemples(filteredTemples) {
  const container = document.getElementById("Temples");
  container.innerHTML = "";
  filteredTemples.forEach(temple => {
    const card = creatTempleCard(temple);
    container.appendChild(card);
  }); 
  }
  displayTemples(temples);
  document.getElementById("home").addEventListener("click", () =>
  displayTemples(temples));

  document.getElementById("menu").addEventListener("click", function () {
    document.querySelector(".navigation").classList.toggle("show");
  });

  document.getElementById("old").addEventListener("click", () => {
    displayTemples(temples.filter(t => new
      Date(t.dedicated).getFullYear() <1900));
  });

  document.getElementById("new").addEventListener("click", () => {
    displayTemples(temples.filter(t => new
      Date(t.dedicated).getFullYear() <2000));
  });
  
  document.getElementById("large").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area > 90000));
  });

  document.getElementById("small").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area < 10000))
  });
  document.getElementById("year").textContent = new
  Date().getFullYear();
  document.getElementById("lastModified").
  textContent = `Last Modified: ${document.lastModified}`;





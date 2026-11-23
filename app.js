// Builds one card per home in LISTINGS (from listings.js) and puts it on the page.

const priceFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});
const numberFormat = new Intl.NumberFormat("en-US");

function makeCard(home) {
  const card = document.createElement("li");
  card.className = "card";

  const photo = document.createElement("div");
  photo.className = "card-photo";
  photo.style.backgroundColor = home.color;
  photo.setAttribute("role", "img");
  photo.setAttribute("aria-label", "Photo placeholder");
  photo.textContent = "Photo placeholder";

  const body = document.createElement("div");
  body.className = "card-body";

  const price = document.createElement("p");
  price.className = "card-price";
  price.textContent = priceFormat.format(home.price);

  const address = document.createElement("p");
  address.className = "card-address";
  address.textContent = home.address;

  const area = document.createElement("p");
  area.className = "card-area";
  area.textContent = home.neighborhood + ", Las Vegas area";

  const facts = document.createElement("ul");
  facts.className = "card-facts";
  [
    home.beds + (home.beds === 1 ? " bed" : " beds"),
    home.baths + (home.baths === 1 ? " bath" : " baths"),
    numberFormat.format(home.sqft) + " sq ft"
  ].forEach(function (text) {
    const item = document.createElement("li");
    item.textContent = text;
    facts.appendChild(item);
  });

  body.append(price, address, area, facts);
  card.append(photo, body);
  return card;
}

const list = document.getElementById("listings");
LISTINGS.forEach(function (home) {
  list.appendChild(makeCard(home));
});

document.getElementById("listing-count").textContent =
  LISTINGS.length + " sample homes";

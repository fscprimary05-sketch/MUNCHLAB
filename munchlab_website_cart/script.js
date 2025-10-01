let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change every 4 seconds
}


function openLightbox(img) {
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = img.src;
  document.getElementById("caption").innerHTML = img.alt;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}


let cart = [];

function addToCart(item, price) {
  cart.push({ item, price });
  alert(item + " added to cart!");
  updateCartDisplay();
}

function updateCartDisplay() {
  let cartList = document.getElementById("cart-items");
  if (!cartList) return; // Only run on cart page
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach(c => {
    let li = document.createElement("li");
    li.textContent = c.item + " - $" + c.price;
    cartList.appendChild(li);
    total += c.price;
  });
  let totalDisplay = document.getElementById("cart-total");
  if (totalDisplay) totalDisplay.innerText = "Total: $" + total;
}

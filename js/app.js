document.addEventListener('DOMContentLoaded', () => {
  const addCartButtons = document.querySelectorAll('.card_content button');

  addCartButtons.forEach((item, index) => {
    item.addEventListener('click', () => {
      alert("Successfully Added to Cart");

      // Retrieve cart items from localStorage
      let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};

      // Update item count in cart
      if (cartItems[index]) {
        cartItems[index]++;
      } else {
        cartItems[index] = 1;
      }

      // Save updated cart items back to localStorage
      localStorage.setItem('cartItems', JSON.stringify(cartItems));

      // Redirect to Cart Page
      location.href = '../Pages/Cart_page.html';
    });
  });
});

function solve() {
   const button1 = document.querySelector('.product:nth-child(2) .add-product');
   let products = new Set();
   let textarea = document.querySelector('textarea');
   let totalPrice = 0;
   button1.addEventListener('click', calc);

   const button2 = document.querySelector('.product:nth-child(3) .add-product');
   button2.addEventListener('click', calc);

   const button3 = document.querySelector('.product:nth-child(4) .add-product');
   button3.addEventListener('click', calc);

   const checkoutButton = document.querySelector('.checkout');
   checkoutButton.addEventListener('click', () => {
      textarea.value += `You bought ${Array.from(products).join(', ')} for ${totalPrice.toFixed(2)}.`
      let buttons = Array.from(document.querySelectorAll('button'));
      buttons.forEach(button => button.disabled = true);
   })

   function calc(e){
      const productName = e.target.parentElement.parentElement.children[1].children[0].textContent;
      const price = Number(e.target.parentElement.parentElement.children[3].textContent);
      totalPrice += price;
      products.add(productName);
      textarea.value += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`;
   }
}
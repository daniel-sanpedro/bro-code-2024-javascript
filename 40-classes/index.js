// CLASSES

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  displayProduct() {
    console.log(`Product ${this.name}`);
    console.log(`Price ${this.price.toFixed(2)}`);
  }
  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const salesTax = 0.07;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.5);
const product3 = new Product("Underwear", 100.0);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total1 = product1.calculateTotal(salesTax);
console.log(`Total price for (with tax) ${total1.toFixed(2)}`);

const total2 = product2.calculateTotal(salesTax);
console.log(`Total price (with tax) ${total2.toFixed(2)}`);

const total3 = product3.calculateTotal(salesTax);
console.log(`Total price (with tax) ${total3.toFixed(2)}`);

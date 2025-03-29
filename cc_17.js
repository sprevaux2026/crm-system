// Task 1: Create a Customer Class
class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = []; // Array to store purchase amounts
    }
  
    //Add a purchase amount to purchaseHistory
    addPurchase(amount) {
      this.purchaseHistory.push(amount);
    }
  
    // calculate the total amount spent by the customer
    getTotalSpent() {
      return this.purchaseHistory.reduce((total, purchase) => total + purchase, 0);
    }
  }
  
  //Create a new customer, add some purchases, and log total spent
  const customer1 = new Customer('Bruce Wayne', 'MaybeBatman@batmail.com');
  customer1.addPurchase(100);
  customer1.addPurchase(150);
  console.log(`Customer: ${customer1.name} | Total Spent: $${customer1.getTotalSpent()}`);
  
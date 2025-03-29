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
  
  // Task 2: Create a SalesRep Class
class SalesRep {
    constructor(name) {
      this.name = name;
      this.clients = []; // Array to store Customer objects
    }
  
    //Add a customer as a client
    addClient(customer) {
      this.clients.push(customer);
    }
  
    //Get a specific client's total spent by name
    getClientTotal(clientName) {
      const client = this.clients.find(cust => cust.name === clientName);
      if (client) {
        return client.getTotalSpent();
      } else {
        console.error(`Client ${clientName} not found.`);
        return 0;
      }
    }
  }
  
  //Create a SalesRep, add a customer and log client's total spent
  const rep1 = new SalesRep('Tony Stark');
  rep1.addClient(customer1);
  console.log(`SalesRep: ${rep1.name} | ${customer1.name}'s Total: $${rep1.getClientTotal('Bruce Wayne')}`);
  
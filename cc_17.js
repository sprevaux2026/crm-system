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
  
  // Task 3: Create a VIPCustomer Class (extends Customer)
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
      super(name, email);
      this.vipLevel = vipLevel; // Additional property for VIP level (e.g., 'Gold', 'Platinum')
    }
  
    // Override the getTotalSpent method to include a 10% loyalty bonus
    getTotalSpent() {
      const baseTotal = super.getTotalSpent();
      return baseTotal * 1.10; // Adds a 10% bonus
    }
  }
  
  //Create a VIP customer, add purchases, and log total with bonus
  const vipCustomer = new VIPCustomer('Nick Furry', 'Nick@Techmail.com', 'Gold');
  vipCustomer.addPurchase(200);
  vipCustomer.addPurchase(300);
  console.log(`VIP Customer: ${vipCustomer.name} (Level: ${vipCustomer.vipLevel}) | Total with Bonus: $${vipCustomer.getTotalSpent().toFixed(2)}`);
  
  // Task 4: Build a Client Report System

// Create multiple customers (regular and VIP)
const customer2 = new Customer('Baker Mayfield', 'baker@bucs.com');
customer2.addPurchase(250);
customer2.addPurchase(100);

const vipCustomer2 = new VIPCustomer('Mike Evans', 'Mike@1kYardsmail.com', 'Platinum');
vipCustomer2.addPurchase(400);
vipCustomer2.addPurchase(150);

// Create a SalesRep and add all customers as clients
const rep2 = new SalesRep('Tom Brady');
rep2.addClient(customer1);
rep2.addClient(customer2);
rep2.addClient(vipCustomer);
rep2.addClient(vipCustomer2);

// Store all customers in an array for reporting purposes
const allCustomers = [customer1, customer2, vipCustomer, vipCustomer2];

// Use .reduce() to calculate total revenue from all customers
const totalRevenue = allCustomers.reduce((total, customer) => total + customer.getTotalSpent(), 0);
console.log(`Total Revenue: $${totalRevenue.toFixed(2)}`);

// Use .filter() to find customers who spent over $500
const highSpenders = allCustomers.filter(customer => customer.getTotalSpent() > 500);
console.log('High-Spending Customers:', highSpenders.map(cust => cust.name));

// Use .map() to create an array of customer summaries (name and total spent)
const customerSummary = allCustomers.map(customer => {
  return { name: customer.name, totalSpent: customer.getTotalSpent().toFixed(2) };
});
console.log('Customer Summary:', customerSummary);

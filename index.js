// BankAccount constructor function
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true; // Assuming all accounts are initially active
  }
  
  // Methods added to the BankAccount prototype
  BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
      console.log('Invalid deposit amount');
    }
  };
  
  BankAccount.prototype.withdraw = function(amount) {
    if (this.active && amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    } else {
      console.log('Invalid withdrawal amount or insufficient funds');
    }
  };
  
  BankAccount.prototype.checkBalance = function() {
    console.log(`Account balance: $${this.balance}`);
  };
  
  BankAccount.prototype.isActive = function() {
    return this.active;
  };
  
  // Function to calculate total balance of all active accounts
  function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (const account of accounts) {
      if (account.isActive()) {
        totalBalance += account.balance;
      }
    }
    return totalBalance;
  }
  
  // Creating multiple BankAccount objects
  const account1 = new BankAccount(1, 'John Doe', 'Savings', 1000);
  const account2 = new BankAccount(2, 'Jane Doe', 'Checking', 2000);
  const account3 = new BankAccount(3, 'Bob Smith', 'Savings', 1500);
  
  // Performing operations on accounts
  account1.deposit(500);
  account2.withdraw(1000);
  account3.deposit(200);
  account1.checkBalance();
  account2.checkBalance();
  
  // Testing isActive method
  console.log(`Account 1 is active: ${account1.isActive()}`);
  console.log(`Account 2 is active: ${account2.isActive()}`);
  console.log(`Account 3 is active: ${account3.isActive()}`);
  
  // Testing getTotalBalance function
  const accounts = [account1, account2, account3];
  const totalBalance = getTotalBalance(accounts);
  console.log(`Total balance of all active accounts: $${totalBalance}`);
  
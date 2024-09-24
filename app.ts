//Interfaces

interface IProduct {
  type: string;
  id: number;
  size: string;
  color: string;
  isAvailable: boolean;

  assignToCustomer(customer: ICustomer): void;
}

interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  paymentMethod: string;

  orderProduct(product: IProduct): void;
}

interface IProductionProcess {
  processName: string;
  description: string;
  productsInProduction: IProduct[];

  addProduct(product: IProduct): void;
}

//Classes

class Product implements IProduct {
  constructor(
    public type: string,
    public id: number,
    public size: string,
    public color: string,
    public isAvailable: boolean
  ) {}

  assignToCustomer(customer: ICustomer): void {
    console.log(
      `Product ${this.type}-${this.size}-${this.color} bought by ${customer.firstName} ${customer.lastName}`
    );
    this.isAvailable = false;
  }
}

class Customer implements ICustomer {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public paymentMethod: string
  ) {}

  orderProduct(product: IProduct): void {
    if (product.isAvailable) {
      console.log(
        `The customer ${this.firstName} ${this.lastName} ordered ${product.type}-${product.color}-${product.size}`
      );
    } else {
      console.log(`Product not available`);
    }
  }
}

class ProductionProcess implements IProductionProcess {
  constructor(
    public processName: string,
    public description: string,
    public productsInProduction: Product[]
  ) {}

  addProduct(product: IProduct): void {
    this.productsInProduction.push(product);
    console.log(
      `Product: ${product.type}-${product.size}-${product.color} added to ${this.processName}`
    );
  }
}

//Instance and testing

const blueSwimsuit = new Product("Swimsuit", 1, "M", "Blue", true);
const greenSwimsuit = new Product("Swimsuit", 2, "L", "Green", true);
const flipflop = new Product("Flip-Flop", 3, "43", "Pink", true);
const sunglasses = new Product("Sunglasses", 4, "Unique", "Black", true);

const customer1 = new Customer(
  "Mario",
  "Rossi",
  "mario.rossi@email.com",
  "Credit Card"
);
const customer2 = new Customer(
  "Anna",
  "Verdi",
  "anna.verdi@email.com",
  "Paypal"
);

const swimsuitProcess = new ProductionProcess(
  "Swimsuit production",
  "Production process of beachwear swimsuits with recycled plastic",
  []
);

customer2.orderProduct(blueSwimsuit);
greenSwimsuit.assignToCustomer(customer1);

swimsuitProcess.addProduct(greenSwimsuit);

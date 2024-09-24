# Sunnee sustainable beachwear

This project simulates the management of a production and sales system for beachwear items made from recycled plastic. It includes the management of customers, products, and production processes.

## Project Structure

The project is developed in TypeScript and includes three main classes:

1. **Product**: Represents beachwear items.
2. **Customer**: Represents the brand’s customers, who can order products.
3. **ProductionProcess**: Represents the production processes for various items.

## Classes

### Product

Represents a beachwear product.

```typescript
class Product implements IProduct {
  constructor(
    public type: string,
    public id: number,
    public size: string,
    public color: string,
    public isAvailable: boolean
  ) {}

  assignToCustomer(customer: ICustomer): void {
    // Assigns the product to the customer and marks it as unavailable
  }
}
```

### Customer

Represents a customer who can order products.

```typescript
class Customer implements ICustomer {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public paymentMethod: string
  ) {}

  orderProduct(product: IProduct): void {
    // Orders an available product
  }
}
```

### ProductionProcess

Manages products within a production process.

```typescript
class ProductionProcess implements IProductionProcess {
  constructor(
    public processName: string,
    public description: string,
    public productsInProduction: Product[]
  ) {}

  addProduct(product: IProduct): void {
    // Adds a product to the production process
  }
}
```

## Example Usage

```typescript
// Instantiate some products
const swimsuit1 = new Product("Swimsuit", 1, "M", "Blue", true);
const pareo1 = new Product("Pareo", 3, "One size", "Pink", true);

// Instantiate a customer
const customer1 = new Customer(
  "Mario",
  "Rossi",
  "mario.rossi@email.com",
  "Credit card"
);

// Order a product
customer1.orderProduct(swimsuit1);

// Assign the product to the customer
swimsuit1.assignToCustomer(customer1);

// Create a production process and add products
const swimsuitProcess = new ProductionProcess(
  "Swimsuit Production",
  "Production of swimsuits using recycled plastic",
  []
);
swimsuitProcess.addProduct(swimsuit1);
```

## Requirements

- Node.js
- TypeScript

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/VincenzoCastrovilli/sustainable-beachwear.git
   ```

2. Install TypeScript:

   ```bash
   npm install -g typescript
   ```

3. Compile TypeScript:

   ```bash
   tsc app.ts
   ```

4. Run the script:
   ```bash
   node app.js
   ```

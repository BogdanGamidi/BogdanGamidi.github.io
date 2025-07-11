type Category = {
  id: string;
  name: string;
  photo?: string;
};

type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

type Operation = Cost | Profit;

export const createRandomProduct = (createdAt: string): Product => {
  return <Product>{
    id: getRandomId(),
    name: `Product ` + getRandomValueForName(),
    photo: 'Some Photo',
    desc: 'desc',
    createdAt: createdAt,
    oldPrice: getRandomAmountOrPrice(),
    price: getRandomAmountOrPrice(),
    category: getRandomCategory(),
  };
};

export const createRandomOperation = (createdAt: string): Operation => {
  const nameOfOperation = getRandomOperation();
  return <Operation>{
    id: getRandomId(),
    name: nameOfOperation + getRandomValueForName(),
    desc: 'desc',
    createdAt: createdAt,
    amount: getRandomAmountOrPrice(),
    category: getRandomCategory(),
    type: nameOfOperation,
  };
};

function getRandomId(): string {
  const id = Math.floor(Math.random() * 9999) + 999;
  return id.toString();
}

function getRandomValueForName(): string {
  const value = Math.floor(Math.random() * 50) + 1;
  return value.toString();
}

function getRandomAmountOrPrice(): number {
  return Math.floor(Math.random() * 99999) + 9999;
}

function getRandomCategory(): Category {
  return <Category>{
    id: getRandomId(),
    name: 'Category ' + getRandomValueForName(),
  };
}

function getRandomOperation(): string {
  return Math.random() < 0.5 ? 'Cost' : 'Profit';
}

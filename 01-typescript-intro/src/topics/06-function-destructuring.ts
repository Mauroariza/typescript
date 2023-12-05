interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150,
};
const tablet: Product = {
  description: "Ipad Air",
  price: 350,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}



// Con desestructuración
function taxCalculation({ tax, products }: TaxCalculationOptions): number[] {
  let total = 0;
  products.forEach(({price}) => {
    total += price; //product es un elemento del array y es un objeto
  });
  return [total, total * tax];
}


const products: Product[] = [phone, tablet];//esto es un array de objetos porque tablet y phone son objetos

const tax = 0.12;

const result = taxCalculation({
  tax: tax,
  products: products,
});

console.log("total:", result[0]);
console.log("tax:", result[1]);

export {};


//sin desestructuración
/*
function taxCalculation(options: TaxCalculationOptions): number[] {
  let total = 0;
  options.products.forEach((product) => {
    total += product.price; //product es un elemento del array y es un objeto
  });
  return [total, total * options.tax];
}
*/
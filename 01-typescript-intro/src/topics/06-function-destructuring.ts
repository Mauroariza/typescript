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


const tax = 0.12;
// Con desestructuración
function taxCalculation({ tax, products }: TaxCalculationOptions): number[] {
  let total = 0;
  products.forEach(({price}) => {
    total += price; //product es un elemento del array y es un objeto
  });
  const taxResult = total * tax;
  return [total, taxResult];
}


const products: Product[] = [phone, tablet];//esto es un array de objetos porque tablet y phone son objetos

const [total,taxResult] = taxCalculation(
  {
    tax:tax,
    products:products
  }
)

console.log("total:", total);
console.log("tax:", taxResult);

export {};


/*
const result = taxCalculation({
  tax: tax,
  products: products,
});

console.log("total:", result[0]);
console.log("tax:", result[1]);
*/



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
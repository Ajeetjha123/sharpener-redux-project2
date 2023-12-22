import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "my-first-book",
    discription: "this is my first book i ever wrote",
  },
  {
    id: "p2",
    price: 8,
    title: "my-2nd-book",
    discription: "this is my second book i ever wrote",
  },
  {
    id: "p3",
    price: 14,
    title: "my-3rd-book",
    discription: "this is my third book i ever wrote",
  },
  {
    id: "p4",
    price: 16,
    title: "my-4th-book",
    discription: "this is my forth book i ever wrote",
  },
  {
    id: "p5",
    price: 26,
    title: "my-5th-book",
    discription: "this is my fifth book i ever wrote",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.discription}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

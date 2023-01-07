import ProductCard from "../../components/product-card/product-card.component";
import { Fragment } from "react";
import "../category/category.styles.scss";
import { useSelector } from "react-redux";
import { selectProducts } from "../../store/products/products.selector";
// styles used from category component with same class name

const ProductsPreview = () => {
  document.title = "Shop";
  const products = useSelector(selectProducts);
  return (
    <Fragment>
      {products.length > 0 ? (
        <div className="category-container">
          {products
            .slice(0)
            .reverse()
            .map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      ) : (
        <h1 style={{ textAlign: "center", margin: "50px auto" }}>
          No Products to show, Please connect backend server.
        </h1>
      )}
    </Fragment>
  );
};

export default ProductsPreview;

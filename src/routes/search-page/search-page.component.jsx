import ProductCard from "../../components/product-card/product-card.component";
import { Fragment } from "react";
import "../category/category.styles.scss";
import { useSelector } from "react-redux";
import {
  selectProducts,
  selectSearchProducts,
} from "../../store/products/products.selector";
// styles used from category component with same class name

const SearchPage = () => {
  const products = useSelector(selectProducts);
  // const { searchProducts } = useContext(ProductsContext);
  const searchProducts = useSelector(selectSearchProducts);

  document.title = `Search Results for "${searchProducts}"`;
  const newFilteredProducts = products.filter((product) => {
    return product.name.toLocaleLowerCase().includes(searchProducts);
  });
  return (
    <Fragment>
      {newFilteredProducts.length > 0 ? (
        <Fragment>
          <h1 style={{ textAlign: "center", margin: "50px auto" }}>
            Showing Search Results for "{searchProducts}"
          </h1>
          <div className="category-container">
            {newFilteredProducts
              .slice(0)
              .reverse()
              .map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      ) : (
        <h1 style={{ textAlign: "center", margin: "50px auto" }}>
          No Results found for "{searchProducts}"
        </h1>
      )}
    </Fragment>
  );
};

export default SearchPage;

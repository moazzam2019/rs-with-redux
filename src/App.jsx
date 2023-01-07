import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./routes/home/home.component";
import HeaderFooter from "./routes/Header-Footer/header-footer.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import Contact from "./routes/contact/contact.component";
import AddProduct from "./routes/crud/add-product.component";
import UpdatePassword from "./routes/crud/update-password.component";
import UpdateData from "./routes/crud/update-data.component";
import { setCurrentUser, setCurrentToken } from "./store/user/user.action";
import { useDispatch } from "react-redux";

const App = () => {
  document.title = "Repair Solutions";

  const dispatch = useDispatch();
  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    // dispatch({
    //   type: USER_ACTION_TYPES.SET_CURRENT_USER,
    //   payload: JSON.parse(user),
    // });
    // dispatch({
    //   type: USER_ACTION_TYPES.SET_CURRENT_TOKEN,
    //   payload: JSON.parse(token),
    // });

    dispatch(setCurrentUser(JSON.parse(user)));
    dispatch(setCurrentToken(JSON.parse(token)));
  }, [dispatch]);
  // useEffect(() => {

  //   setCurrentToken(JSON.parse(token));
  // }, []);
  return (
    <Routes>
      <Route path="/" element={<HeaderFooter />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="contact" element={<Contact />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="update-password" element={<UpdatePassword />} />
        <Route path="update-data" element={<UpdateData />} />
      </Route>
    </Routes>
  );
};

export default App;

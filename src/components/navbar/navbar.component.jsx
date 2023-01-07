import NavbarButton from "./navbar-button/navbar-button.component";
import { useSelector } from "react-redux";
import { setCurrentToken, setCurrentUser } from "../../store/user/user.action";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const signOutHandler = () => {
    localStorage.clear();
    dispatch(setCurrentToken(""));
    dispatch(setCurrentUser(null));
  };

  return (
    <>
      <NavbarButton label="Shop" link="/shop" />
      <NavbarButton label="Contact" link="/contact" />
      {!currentUser ? (
        <NavbarButton label="Sign In" link="/sign-in" />
      ) : (
        <NavbarButton label="Sign Out" onClick={signOutHandler} link="../" />
      )}
    </>
  );
};

export default NavBar;

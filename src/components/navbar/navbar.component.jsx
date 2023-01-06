import NavbarButton from "./navbar-button/navbar-button.component";
import { INITIAL_STATE } from "../../store/user/user-reducer";

const NavBar = () => {
  const { currentUser } = INITIAL_STATE;
  console.log(currentUser);

  const signOutHandler = () => {
    localStorage.clear();
    window.location.replace("../");
  };

  return (
    <>
      <NavbarButton label="Shop" link="/shop" />
      <NavbarButton label="Contact" link="/contact" />
      {Object.keys(currentUser).length === 0 ? (
        <NavbarButton label="Sign In" link="/sign-in" />
      ) : (
        <NavbarButton label="Sign Out" onClick={signOutHandler} />
      )}
    </>
  );
};

export default NavBar;

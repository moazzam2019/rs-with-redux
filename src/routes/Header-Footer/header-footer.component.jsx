import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import "./header-footer.styles.scss";
import { Container } from "@mui/system";
import Header from "./header.component";
import Footer from "./footer.component";
import HeaderMobile from "./header-mobile.component";
import { useTheme, useMediaQuery } from "@mui/material";
import { INITIAL_STATE } from "../../store/user/user-reducer";

const HeaderFooter = () => {
  const { currentUser } = INITIAL_STATE;
  console.log(currentUser);
  const theme = useTheme();
  let matches = useMediaQuery(
    theme.breakpoints.down(currentUser.length !== 0 ? "lg" : "md")
  );
  return (
    <Fragment>
      {/* Header */}
      {matches ? <HeaderMobile /> : <Header />}
      {/* Main Content */}
      <Container maxWidth="lg">
        <Outlet />
      </Container>
      {/* Footer */}

      <Footer />
    </Fragment>
  );
};

export default HeaderFooter;

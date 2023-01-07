import SignUp from "./sign-up.component";
import { Grid } from "@mui/material";
import SignInBox from "./sign-in-box.component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  document.title = "Sign in/Sign up";
  const currentUser = useSelector((state) => state.user.currentUser);
  // if (currentUser && Object.keys(currentUser).length !== 0) {
  //   window.location.replace("../");
  // }
  if (currentUser && Object.keys(currentUser).length !== 0) {
    navigate("../");
  } else {
    return (
      <div>
        <Grid container>
          <Grid item xs={12} md={6}>
            <SignInBox />
          </Grid>
          <Grid item xs={12} md={6}>
            <SignUp />
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default SignIn;

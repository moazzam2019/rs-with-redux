import SignUp from "./sign-up.component";
import { Grid } from "@mui/material";
import SignInBox from "./sign-in-box.component";
import { useSelector } from "react-redux";

const SignIn = () => {
  document.title = "Sign in/Sign up";
  const currentUser = useSelector((state) => state.user.currentUser);
  if (currentUser && Object.keys(currentUser).length !== 0) {
    window.location.replace("../");
  }

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
};

export default SignIn;

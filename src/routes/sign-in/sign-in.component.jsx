import SignUp from "./sign-up.component";
import { Grid } from "@mui/material";
import SignInBox from "./sign-in-box.component";
import { useNavigate } from "react-router-dom";
import { INITIAL_STATE } from "../../store/user/user-reducer";
import { useEffect } from "react";

const SignIn = () => {
  document.title = "Sign in/Sign up";
  const { currentUser } = INITIAL_STATE;
  const navigate = useNavigate();
  console.log(currentUser);
  console.log(Object.keys(currentUser).length !== 0);
  useEffect(() => {
    if (Object.keys(currentUser).length !== 0) {
      navigate("../");
    }
  }, [currentUser]);
  // if (Object.keys(currentUser).length !== 0) {
  //   navigate("../");
  // }
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

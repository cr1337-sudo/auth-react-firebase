import { Button } from "@material-ui/core";
import {auth, provider} from "../../firebase"
import {signInWithPopup} from "firebase/auth"
import {actionTypes} from "../../Reducer";
import { useStateValue } from "../../StateProvider";
import "./login.css";

const Login = () => {
  const [{user}, dispatch] = useStateValue()
  const signin = async ()=>{
    try{
    const log = await signInWithPopup(auth, provider)
    dispatch({type: actionTypes.SET_USER, user : log.user})
    }catch(e){
    }
  }
  return (
    <div className="login">
      <h1>Welcome To Our Blog</h1>
      <Button variant="contained" color="primary" onClick={signin}>
        Sign in with Google
      </Button>
    </div>
  );
};

export default Login;

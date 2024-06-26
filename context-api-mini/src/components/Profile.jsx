import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);
  if (!user) {
    return <div>Please Log In</div>;
  } else {
    return <div>Welcome {user.username}</div>;
  }
}

export default Profile;

import Button from "../Button";
import { useState } from "react";

const User = () => {
  const [userLoggedIn, setuserLoggedIn] = useState(false);

  const isLoggedIn = () => {
    setuserLoggedIn(!userLoggedIn);
  }

  return ( 
    <main>
      <Button onClick={isLoggedIn} label="Login" />
    </main>
   );
}
 
export default User;
import useRegisterModal from "`@/app/hooks/useRegisterModal`";
import Button from "../Button";
import { useState } from "react";

const User = () => {
  const registerModal = useRegisterModal();

  return ( 
    <main>
      <Button onClick={registerModal.onOpen} label="Login" />
    </main>
   );
}
 
export default User;
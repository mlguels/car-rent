"use client";

import { useCallback, useState } from "react";

import useRegisterModal from "`@/app/hooks/useRegisterModal`";
import useLoginModal from "`@/app/hooks/useLoginModal`";

import Button from "../Button";
import Avatar from "../Avatar";

import { User } from "@prisma/client";
import { signOut } from "next-auth/react";


interface UserMenuProps {
  currentUser?: User | null;
}


const UserMenu: React.FC<UserMenuProps> = ({ currentUser } ) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return ( 
    <main className="flex flex-row gap-3">
      <button onClick={toggleOpen}>
        <Avatar src={currentUser?.image}/> 
      {isOpen && (
        <div
          className="
          absolute
          p-2
          py-2
          border-b-[3px]
          rounded-xl
          top-16
          right-1
          shadow-lg
          "
        >
          <div className="flex flex-col gap-2 cursor-pointer">
            {currentUser ? (
              <>
                <Button onClick={() => {}} label="My Rentals" />            
                <Button onClick={() => {}} label="My Favorites" />                                    
                <hr />
                <Button onClick={() => signOut()} label="Logout" /> 
              </>

            ) : (
              <>
                <Button onClick={loginModal.onOpen} label="Login" />
                <Button onClick={registerModal.onOpen} label="Register" />              
              </>
            )}
          </div>
        </div>
      )}
      </button> 
    </main>
   );
}
 
export default UserMenu;
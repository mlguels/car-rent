"use client";

import { User } from "@prisma/client";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

interface NavBarProps {
  currentUser?: User | null;
}

const Navbar: React.FC<NavBarProps> = ({ currentUser }) => {
  return ( 
    <main className="fixed w-full bg-white z-10 shadow-sm" >
      <div className="py-4">
        <Container>
          <div 
            className="
            flex
            flex-row
            items-center
            justify-between
            gap-3
            md:gap-0
            "
          >
            <div>
              <Logo />
            </div>
            <div className="flex gap-4">
              <Search />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
    </main>
   );
}
 
export default Navbar;
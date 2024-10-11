"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../img/logo.png";
import { Avatar , AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";


const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-800 text-white py-2 px-4 flex justify-between items-center h-[8vh]">
      <Link href="/">
        <Image src={Logo} alt="perfi" width={90} height={90} />
      </Link>
      <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-white text-black">FS</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem>
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/auth">Log out</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
    </div>
  );
};

export default Navbar;

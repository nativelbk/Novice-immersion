import React from "react";
import { Button } from "@nextui-org/react";
import { MenuIcon } from "../utils/Icons";

const Navbar = ({ showNav, setShowNav }) => {
    return (
        <nav className="bg-[#111114] p-2  ">
            <Button
                radius="full"
                className="bg-white"
                onClick={() => setShowNav(!showNav)}
            >
                <MenuIcon className="h-8 w-8 text-gray-700 cursor-pointer" />
            </Button>
        </nav>
    );
};

export default Navbar;

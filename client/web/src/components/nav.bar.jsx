/** @format */

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { registerCompenentState } from "../utils/states";

const navItems = [
  {
    label: "ENI immersion",
    target : "#imersion",
    isSelected: true,
  },
  {
    label: "A propos",
    target : "#description",
    isSelected: false,
  },
  {
    label: "Divers club",
    target : "#club",
    isSelected: false,
  }
];

export default function NavBar() {
  const [navItemState, setNavItemState] = useState(navItems);
  const [current_register_component, setCRC] = useRecoilState(registerCompenentState);
  const navigate = useNavigate()

  const navigateTo = (path,action)=>{
    if(action == "Signin") {
      setCRC("SignIn")
    } else {
      setCRC("Login")
    }
    navigate(path)
  }

  const setActiveItem = (item) => {
    const items = navItemState.map((i) => {
      if (i == item) {
        return { ...i, isSelected: true };
      } else {
        return { ...i, isSelected: false };
      }
    });
    setNavItemState(items);
  };

  return (
    <Navbar maxWidth="2xl" className=" z-[99999999999999] bg-back text-white">
      <NavbarBrand>
        {/* <label htmlFor="">logo</label>
        <p className="font-bold text-inherit">ENI</p> */}
        <img className="logo" src="/301233346_455362809937832_3213526383772469179_n.jpg" alt="" />
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4 text-white" justify="center">
        {navItemState.map((item, key) => {
          if (item.isSelected) {
            return (
              <NavbarItem key={key}>
                <Link onClick={()=>setActiveItem(item)} className="text-secondary font-semibold" href={item.target}>{item.label}</Link>
              </NavbarItem>
            );
          } else {
            return (
              <NavbarItem key={key}>
              <Link  onClick={()=>setActiveItem(item)} className="text-white font-semibold" href={item.target}>{item.label}</Link>
            </NavbarItem>
            )
          }
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="secondary"
            className="px-4 py-2 rounded-full font-semibold"
            onClick={()=>navigateTo("/register" , "Login")}
            variant="flat"
          >
            Se connecter
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="bg-secondary text-black px-4 py-2 rounded-full font-semibold"
            as={Link}
            variant="flat"
            onClick={()=>navigateTo("/register" , "Signin")}
          >
            S'inscrire
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

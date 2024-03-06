import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const navItems = [
  {
    label: "Eni immersion",
    isSelected: true,
  },
  {
    label: "A propos",
    isSelected: false,
  },
  {
    label: "Partenaires",
    isSelected: false,
  },
  {
    label: "Mentions & Parcours",
    isSelected: false,
  },
];

export default function NavBar() {
  const [navItemState, setNavItemState] = useState(navItems);

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
    <Navbar maxWidth="2xl" className=" bg-back text-white">
      <NavbarBrand>
        <label htmlFor="">logo</label>
        <p className="font-bold text-inherit">ENI</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4 text-white" justify="center">
        {navItemState.map((item, key) => {
          if (item.isSelected) {
            return (
              <NavbarItem key={key}>
                <Link onClick={()=>setActiveItem(item)} className="text-secondary font-semibold" href="#">{item.label}</Link>
              </NavbarItem>
            );
          } else {
            return (
              <NavbarItem key={key}>
              <Link  onClick={()=>setActiveItem(item)} className="text-white font-semibold" href="#">{item.label}</Link>
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
            className="font-semibold"
            href="#"
            variant="flat"
          >
            Se connecter
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="bg-secondary text-black font-semibold"
            as={Link}
            href="#"
            variant="flat"
          >
            S'inscrire
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

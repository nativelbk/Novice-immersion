import { useState } from "react";

const Menus = [
  { title: "Dashboard", src: "Chart_fill", isSelected: true },
  { title: "Inbox", src: "Chat", isSelected: false },
  { title: "Accounts", src: "User", gap: false, isSelected: false },
  { title: "Schedule ", src: "Calendar", isSelected: false },
  { title: "Search", src: "Search", isSelected: false },
  { title: "Analytics", src: "Chart" },
  { title: "Files ", src: "Folder", gap: true, isSelected: false },
  { title: "Setting", src: "Setting", isSelected: false },
];

export default function SideBar() {
  const [open, setOpen] = useState(true);
  const [menus, setMenuState] = useState(Menus);

  const setActiveItem = (item) => {
    setMenuState(
      menus.map((i) => {
        if (i == item) {
          return { ...i, isSelected: true };
        } else {
          return { ...i, isSelected: false };
        }
      })
    );
  };

  return (
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {menus.map((item, key) => {
            if (item.isSelected) {
              return (
                <li
                  onClick={() => setActiveItem(item)}
                  key={key}
                  className={`flex  rounded-md p-2 cursor-pointe bg-secondary text-tertiary text-sm items-center gap-x-4 
                        ${item.gap ? "mt-9" : "mt-2"} ${
                    key === 0 && "bg-light-white"
                  } `}
                >
                  <img src={`./src/assets/${item.src}.png`} />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {item.title}
                  </span>
                </li>
              );
            } else {
              return (
                <li
                  onClick={() => setActiveItem(item)}
                  key={key}
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-tertiary transition duration-300 ease-linear text-gray-300 text-sm items-center gap-x-4 
                        ${item.gap ? "mt-9" : "mt-2"} ${
                    key === 0 && "bg-light-white"
                  } `}
                >
                  <img src={`./src/assets/${item.src}.png`} />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {item.title}
                  </span>
                </li>
              );
            }
          })}
        </ul>
      </div>
  );
}

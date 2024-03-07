import React, { forwardRef } from "react";
import { Avatar, Listbox, ListboxItem, Link } from "@nextui-org/react";
import { ConfigIcon, HomeIcon, UserIcon } from "../utils/Icons";

const SideBar = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="w-64 bg-[#111114] p-8 flex flex-col items-center"
            {...props}
        >
            <h1 className="text-2xl font-bold mb-8 text-secondary">CHRISVDEV9</h1>
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="lg" />
            <p className="text-sm text-white mt-4">Bienvenido de vuelta,</p>
            <p className="font-bold text-white">Juan Simora</p>
            <Listbox>
                <ListboxItem
                    className="mb-4 mt-10 text-pink-500 p-3"
                    startContent={<HomeIcon className="w-4 h-4" />}
                >
                    Explore communaute
                </ListboxItem>
                <ListboxItem
                    startContent={<UserIcon className="w-4 h-4" />}
                    className="mb-4 p-3 text-white"
                >
                    Recommandation
                </ListboxItem>
                <ListboxItem
                    className="p-3 text-white"
                    startContent={<ConfigIcon className="w-4 h-4 " />}
                >
                    Notification
                </ListboxItem>
            </Listbox>
            <div className="mt-[100%]">
                {" "}
                <p className=" text-sm text-white">
                    Created by{" "}
                    <strong>
                        <Link
                            className="text-white text-sm"
                            isExternal
                            href="https://github.com/Chrisvd9"
                        >
                            Chrisvdev9 &copy;
                        </Link>
                    </strong>
                </p>
            </div>
        </div>
    );
});

export default SideBar;

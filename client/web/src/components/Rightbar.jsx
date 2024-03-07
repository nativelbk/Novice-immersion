import React from 'react'
import { Badge, Avatar, Switch } from "@nextui-org/react";
import { NotificationIcon } from "../components/Notification";
import { Button } from '@nextui-org/react';

const Rightbar = () => {
    const [isInvisible, setIsInvisible] = React.useState(false);

    return (
        <div className="w-10 mx-auto pt-10">
            <Badge color="danger" content={5} isInvisible={isInvisible} shape="circle">
                <NotificationIcon className="fill-current" size={30} />
            </Badge>

        </div>
    );
}

export default Rightbar

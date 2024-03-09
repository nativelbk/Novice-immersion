/** @format */

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Input,
} from "@nextui-org/react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import "../index.css";
import ModalComment from "./modal.comment";
import sary from "../assets/appdev.jpg";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react/dist/cjs/tabler-icons-react";

export default function Publication({
  author,
  category,
  reaction,
  comment,
  user,
  description,
}) {
  const [isFollowed, setIsFollowed] = React.useState(false);
  const [react, setReact] = useState(0);
  const [isLoved, setIsLoved] = useState(false);

  return (
    <Card className="text-gray-300 bg-[#ffffff17] p-5 rounded-xl my-12">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="lg"
            src="/avatars/avatar-1.png"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none">
              {user?.username}
            </h4>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small h-fit">
        <p className=" p-4">{description}</p>
        <div className=" flex items-center justify-center">
          <img src={sary} className=" rounded-lg w-full object-cover" />
        </div>
        <span className="pt-2">
          #FrontendWithZoey
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        {isLoved ? (
          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                setReact(react - 1);
                setIsLoved(false)
              }}
            >
              <IconHeartFilled className=" text-red-500"/>
            </button>
            {react}
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                setReact(react + 1);
                setIsLoved(true)
              }}
            >
              <IconHeart />
            </button>
            {react}
          </div>
        )}
        <div className="flex gap-1">
          <ModalComment /> {comment && comment.length}
        </div>
      </CardFooter>
      <p className="text-xs text-gray-400 ml-2 underline mb-2">
        Votre commentaire
      </p>
      <form>
        <input
          placeholder="Commenter ici ..."
          className=" w-full py-2 px-1 rounded-full pl-4 mt-2 bg-[#ffffff3d]"
        />
      </form>
    </Card>
  );
}

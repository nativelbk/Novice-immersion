/** @format */

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

export default function Publication({
  author,
  category,
  reaction,
  comment,
  user,
  description,
}) {
  const [isFollowed, setIsFollowed] = React.useState(false);

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
        <p className="">{description}</p>
        <span className="pt-2">
          #FrontendWithZoey
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex items-center gap-1">
          <button>
            <FaRegHeart />
          </button>
          {reaction && reaction.length}
        </div>
        <div className="flex gap-1">
          <button>
            <FaRegComment />
          </button>{" "}
          {comment && comment.length}
        </div>
      </CardFooter>
    </Card>
  );
}

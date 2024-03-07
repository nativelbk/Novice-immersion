import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";

export default function Publication({author,content,date}) {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="text-gray-300 bg-[#ffffff17] p-5 rounded-xl my-12">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none">Zoey Lang</h4>
            <h5 className="text-small tracking-tight">@zoeylang</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-tertiary text-foreground border-default-200 py-2 px-4" : "py-2 px-4"}
          color="secondary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small min-h-[200px]">
        <p className="">
          Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
        </p>
        <span className="pt-2">
          #FrontendWithZoey 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-small">4</p>
          <p className="text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-small">97.1K</p>
          <p className="text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}
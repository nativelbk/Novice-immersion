import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import certIcon from "../assets/cert2.png";
import sary from "../assets/image.gif";

export default function Description() {
  return (
    <div className=" grid grid-cols-2 text-white mx-48 my-12 gap-1 p-12 rounded-xl">
      <div className=" col-span-1 grid grid-rows-2">
        <div className=" col-span-1 row-span-1">
          <p className="text-4xl font-semibold">Lorem ipsum dolor sit amet</p>
          <p className="mt-12 w-3/6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime nam
            aliquid soluta odio? Consectetur optio eius quibusdam
            necessitatibus. Perspiciatis, esse. Et, mollitia ut! Repellendus
            maxime veniam pariatur ea animi vitae?
          </p>
          <Button
            as={Link}
            color="primary"
            className="px-4 py-2 rounded-full font-semibold mt-12"
            href="#"
            variant="flat"
          >
            Voir plus
          </Button>
        </div>
        <div className=" grid grid-cols-2">
          <div className="flex-col mt-8">
            <img src={certIcon} alt="" className="w-12" />
            <p className="font-bold text-xl mt-4">Diplomes</p>
            <div>
              <p>Licence</p>
              <p>Master</p>
              <p>DOctorat</p>
            </div>
          </div>
          <div className="flex-col mt-8">
            <img src={certIcon} alt="" className="w-12" />
            <p className="font-bold text-xl mt-4">Certification</p>
            <div>
              <p>Informatique</p>
              <p>Inteligence articielle</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-span-1">
        <img src={sary} alt="" />
      </div>
    </div>
  );
}

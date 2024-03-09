/** @format */

import { Button } from "@nextui-org/react";
import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className=" text-[52px] leading-tight text-white gradient_violet font-bold">
        BIENVENUE À L'ENI : UNE NOUVELLE AVENTURE
      </h1>
      <h2 className=" text-txt text-justify   ">
        Découvrez une communauté dynamique dédiée à votre réussite académique et
        personnelle. À l'ENI, nous vous offrons bien plus qu'une simple
        éducation. Plongez-vous dans un environnement d'apprentissage stimulant,
        où l'innovation et l'excellence sont au cœur de chaque expérience
      </h2>
      <div className="flex justify-between ">
        <Button color="secondary" variant="solid" className="w-[290px]">
          Commencer
        </Button>
        <Button
          variant="bordered"
          className="w-[290px] border-pink text-pink font-bold "
        >
          Decouvrir
        </Button>
      </div>
    </div>
  );
};

export default HeroText;

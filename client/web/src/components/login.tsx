/** @format */

import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import React, { ChangeEvent, useState } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "../utils/cn";
import axios from "axios";
import { useRecoilState } from "recoil";
import { authenticatedState } from "../utils/states";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState<{
    email: "";
    password: "";
  }>({ email: "", password: "" });
  const [authorization, setAuthorization] = useRecoilState(authenticatedState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(login);
    const data = await axios.post("http://localhost:5000/api/v1/login", login);
    console.log(data);
    if (data.data) {
      setAuthorization(true);
      localStorage.setItem("token", data.data.token);
      navigate("/");
    } else {
      setAuthorization(false);
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin((val) => {
      return {
        ...val,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome back
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to aceternity if you can because we don&apos;t have a login flow
        yet
      </p>

      {/* TODO: Add moving gradient maybe maybe? */}
      {/* content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: var(--line-width);
    background: conic-gradient(from calc(var(--angle) + var(--start-angle)), transparent 0, var(--line-color) 20%, transparent 25%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: inherit;

    position: absolute;
    inset: 0;
    border-radius: inherit;
    filter: drop-shadow(0 0 10px var(--line-color)); */}
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4"></div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            onChange={handleChange}
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            name="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={handleChange}
            id="password"
            placeholder="••••••••"
            type="password"
            name="password"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Log in &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
function setAuthorization(arg0: boolean) {
  throw new Error("Function not implemented.");
}

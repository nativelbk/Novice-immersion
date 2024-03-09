/** @format */

import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";
import axios from "axios";
import { IconMessage, IconPlus } from "@tabler/icons-react";
import { BottomGradient, LabelInputContainer } from "./login";
import { Label } from "@radix-ui/react-label";
import { FaRegComment } from "react-icons/fa";
import CommentList from "./comment.list";

// eslint-disable-next-line react/prop-types
export default function ModalComment() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [login, setLogin] = useState({ user: localStorage.getItem("id") });
  const handleChange = (e) => {
    setLogin((val) => {
      return {
        ...val,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {};

  return (
    <>
      <button onClick={onOpen}>
        <IconMessage />
      </button>
      <Modal backdrop={`blur`} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-[#fffefe] rounded-lg">
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">Commentaires</ModalHeader>
              <ModalBody>
                <CommentList />
                <form method="post" className="mt-2" onSubmit={handleSubmit}>
                  <div className=""></div>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Laiser un commentaire</Label>
                    <Textarea
                      className="bg-gray-200 py-2 px-1 rounded-sm"
                      onChange={handleChange}
                      id="email"
                      placeholder="Ajouter du texte"
                      type="email"
                      name="description"
                    />
                  </LabelInputContainer>
                  <button
                    className="bg-secondary relative group/btn w-full text-zinc-800 rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                  >
                    Commenter &rarr;
                    <BottomGradient />
                  </button>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

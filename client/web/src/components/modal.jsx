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
import { IconPlus } from "@tabler/icons-react";
import { BottomGradient, LabelInputContainer } from "./login";
import { Label } from "@radix-ui/react-label";
import LoadingBtn from "./loading.btn";

// eslint-disable-next-line react/prop-types
export default function ModalFormBtn({ text }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [login, setLogin] = useState({ user: localStorage.getItem("id") });

  const [btnState, setBtnState] = useState("idle");

  const handleChange = (e) => {
    setLogin((val) => {
      return {
        ...val,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    console.log(login);
    try {
      setBtnState("loading");
      const data = await axios.post(
        "http://localhost:5000/api/create-pub",
        login
      );
    } catch (error) {
    } finally {
      setBtnState("success");
    }
    console.log(data);
  };

  return (
    <>
      <Button
        className="py-2 px-4 bg-primary text-back rounded-full w-full"
        onPress={onOpen}
      >
        <IconPlus className="font-bold mx-2" />
        <p>{text}</p>
      </Button>
      <Modal backdrop={`blur`} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-back rounded-lg text-gray-300">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Publier</ModalHeader>
              <ModalBody>
                <form
                  method="post"
                  className="my-8"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4"></div>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Ajouter un fichier</Label>
                    <input
                      onChange={handleChange}
                      className="bg-tertiary py-2 px-1 rounded-sm"
                      color="tertiary"
                      id="password"
                      type="file"
                    />
                  </LabelInputContainer>

                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Ajouter du texte</Label>
                    <textarea
                      className="bg-tertiary py-2 px-1 rounded-sm"
                      onChange={handleChange}
                      id="email"
                      placeholder="Ajouter du texte"
                      type="email"
                      name="description"
                    />
                  </LabelInputContainer>

                  <LoadingBtn
                    className="bg-secondary relative group/btn w-full text-zinc-800 rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    handler={handleSubmit}
                    state={btnState}
                  >
                    Publier &rarr;
                    <BottomGradient />
                  </LoadingBtn>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

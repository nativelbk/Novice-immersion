import React from "react";
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
import { IconPlus } from "@tabler/icons-react";
import { BottomGradient, LabelInputContainer } from "./login";
import { Label } from "@radix-ui/react-label";

export default function ModalFormBtn({ text }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleChange = (e) => {
    setLogin((val) => {
      return {
        ...val,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(login);
    const data = await axios.post("http://localhost:5000/api/v1/login", login);
    console.log(data);
    if (data.data) {
      setAuthorization(true);
      localStorage.setItem("token", data.data.token);
      navigate("/dashboard");
      navigate("/dashboard");
    } else {
      setAuthorization(false);
    }
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
        <ModalContent className="rounded-lg text-back bg-white">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Publier
              </ModalHeader>
              <ModalBody>
                <form className="my-8" onSubmit={handleSubmit}>
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4"></div>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Ajouter un fichier</Label>
                    <Input
                      onChange={handleChange}
                      className="py-1 px-2 rounded-sm text-gray-300"
                      color="tertiary"
                      id="password"
                      type="file"
                    />
                  </LabelInputContainer>

                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Ajouter du texte</Label>
                    <Textarea
                      className="py-1 px-2 rounded-sm"
                      onChange={handleChange}
                      id="email"
                      placeholder="Ajouter du texte"
                      type="email"
                      name="email"
                    />
                  </LabelInputContainer>

                  <button
                    className="bg-secondary relative group/btn w-full text-zinc-800 rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                  >
                    Publier &rarr;
                    <BottomGradient />
                  </button>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button className="py-2 px-4 rounded-full" color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

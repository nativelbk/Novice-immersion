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
  input,
} from "@nextui-org/react";
import axios from "axios";
import { IconPlus } from "@tabler/icons-react";
import { BottomGradient, LabelInputContainer } from "./login";
import { Label } from "@radix-ui/react-label";
import { FaRegComment } from "react-icons/fa";
import CommentList from "./comment.list";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ModalComment() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [comment, setComment] = useState('')
  // const [login, setLogin] = useState({ user: localStorage.getItem("id") });
  const [input,setInput] = useState([])
  const navigate = useNavigate()

  const handleChange = (e) => {
    // setLogin((val) => {
    const name = e.target.name;
    const value = e.target.value
    setComment(value)
    setInput(values=>({...values,[name]:value}))
    // });
  };

  const handleSubmit = async (e) =>
  {
    e.preventDefault()
    await axios.post("http://localhost:5000/api/commentaire",input)
    console.log(input);
    navigate("/dashboard")
    setComment("")
  };

  return (
    <>
      <button onClick={onOpen}>
        <FaRegComment />
      </button>
      <Modal backdrop={`blur`} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-[#fffefe] rounded-lg">
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">Commentaires</ModalHeader>
              <ModalBody>
                <CommentList />
                <form className="mt-2" onSubmit={handleSubmit}>
                  <div className=""></div>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Laiser un commentaire</Label>
                    <Textarea
                      className="bg-gray-200 py-2 px-1 rounded-sm"
                      onChange={handleChange}
                      id="email"
                      placeholder="Ajouter du texte"
                      value={comment}
                      name="text"
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
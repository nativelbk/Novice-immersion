import { User } from "@nextui-org/react";
import CommenteElement from "./comment.element";
import icon4 from "../assets/icon (4).png";

export default function CommentList() {
  return (
    <div className="h-48 overflow-y-auto overflow-x-hidden bg-[#2d2d2d6b] rounded-lg px-2">
        <CommenteElement img={icon4} author="Moi" comment="bonjourvjnevhirehgwenfkndcvhuidshfwejkfnw"/>
        <CommenteElement img={icon4} author="Moi" comment="bonjourvjnevhirehgwenfkndcvhuidshfwejkfnw"/>
        <CommenteElement img={icon4} author="Moi" comment="bonjourvjnevhirehgwenfkndcvhuidshfwejkfnw"/>
    </div>
  );
}

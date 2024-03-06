import image from "../assets/image.gif"
import { Tabs } from "./tabs";

export default function About() {
  const tabs = [
    {
      title: "Presentation de l'ecole",
      value: "Presentation de l'ecole",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#2D2D2D]">
          <p>Presentation de l'ecole</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "AEENI",
      value: "AEENI",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#2D2D2D]">
          <p>AEENI</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <img
      src={image}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};


import SchoolGallery from "./shool.galery";
import About from "./about";
import { presentationEni } from "../utils/const";

export default function Description() {
  return (
    <div className=" grid grid-cols-3 text-white mx-24 my-12 gap-1 p-12 rounded-xl">
      <div className=" col-span-1">
        <div className=" col-span-1">
          <p className="text-4xl font-semibold">A propos</p>
          <p className="mt-12 w-5/6">
            {presentationEni}
          </p>
        </div>
        <div className="">
          <About/>
        </div>
      </div>
      <div className="col-span-2">
        <SchoolGallery/>
      </div>
    </div>
  );
}

import Description from "../components/description";
import NavBar from "../components/nav.bar";
import { Club } from "../components/club";
import Hero from "../components/Hero";
import { SVGMaskEffectDemo } from "../components/MaskDemo";
import { LampDemo } from "../components/Lamp";
import { SparklesPreview } from "../components/SpartklePreview";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <SparklesPreview />
      {/* <LampDemo /> */}
      <Description />
      <Club />
      <Footer/>
    </>
  );
}

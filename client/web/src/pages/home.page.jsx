import About from "../components/parcours";
import Description from "../components/description";
import NavBar from "../components/nav.bar";
import { Club } from "../components/club";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Description/>
      <Club/>
    </>
  );
}

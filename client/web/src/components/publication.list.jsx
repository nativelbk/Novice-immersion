import Publication from "./publication.box";
import Communaute from "./Communaute";

export default function PublicationList() {
  return (
    <div className=" col-span-4 h-screen overflow-y-auto px-12 relative">
      <Communaute/>
      <Publication />
      <Publication />
      <Publication />
    </div>
  );
}

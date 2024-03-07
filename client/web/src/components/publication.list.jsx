import Publication from "./publication.box";

export default function PublicationList() {
  return (
    <div className=" col-span-3 h-screen overflow-y-auto px-12 relative">
      <Publication />
      <Publication />
      <Publication />
    </div>
  );
}

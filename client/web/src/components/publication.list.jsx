import Publication from "./publication.box";

export default function PublicationList() {
  return (
    <div className=" col-span-3 h-screen overflow-y-auto">
        <Publication />
        <Publication />
        <Publication />
    </div>
  );
}

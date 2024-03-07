import Rightbar from "../components/Rightbar";
import PublicationList from "../components/publication.list";
import SideBar from "../components/side.bar";
import Communaute from "../components/Communaute";
import Orientation from "../components/Orientation";
export default function DashboarPage() {
    return (
        <div className=" grid grid-cols-5 h-screen mx-auto">
            <SideBar />
            <div className="col-span-3 h-screen overflow-y-auto px-12 ">
                <Orientation />
            </div>
            <Rightbar />
        </div>
    )
}
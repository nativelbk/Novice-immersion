import Rightbar from "../components/Rightbar";
import PublicationList from "../components/publication.list";
import RigthBox from "../components/rigth.box";
import SideBar from "../components/side.bar";
import Communaute from "../components/Communaute";
export default function DashboarPage() {
    return (
        <div className=" grid grid-cols-5 h-screen">
            <SideBar />
            <div className="col-span-3 h-screen overflow-y-auto px-12 ">
                {/* <Communaute /> */}
            <PublicationList/>

            </div>
            <Rightbar />
        </div>
    )
}
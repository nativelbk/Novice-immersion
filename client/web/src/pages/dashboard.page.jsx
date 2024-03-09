import PublicationList from "../components/publication.list";
import RigthBox from "../components/rigth.box";
import SideBar from "../components/side.bar";
import Orientation from "../components/Orientation";
import { useRecoilState } from "recoil";
import { dashMenuState } from "../utils/states";

const components = {
    PublicationList,
    Orientation
}

export default function DashboarPage() {
    const dashMenuItem = useRecoilState(dashMenuState) 

    const DynamicComponent = components[dashMenuItem[0]] || <div>NOt FOund</div>

    return (
        <div className=" grid grid-cols-6 h-screen text-gray-300">
            <SideBar />            
            <DynamicComponent/>
            <RigthBox/>
        </div>
    )
}
import PublicationList from "../components/publication.list";
import SideBar from "../components/side.bar";

export default function DashboarPage (){
    return(
        <div className=" grid grid-cols-5 h-screen">
            <SideBar/>
            <PublicationList/>
        </div>
    )
}
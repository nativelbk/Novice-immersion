import AlertBox from "./alert.box";
import ModalFormBtn from "./modal";

export default function RigthBox(){
    return(
        <div className="p-12">
            <div className="flex items-center justify-center mb-4">
                <ModalFormBtn text="Creer une publication"/>
            </div>
            <AlertBox/>
        </div>
    )
}
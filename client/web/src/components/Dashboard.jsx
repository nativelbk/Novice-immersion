import Sidebar from "./Sidebar";
import Nav from "./Nav";
import { Transition } from "@headlessui/react";
import { useEffect, useState, Fragment } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Button,
    CardFooter,
} from "@nextui-org/react";
import {
    DolarIcon,
    AjusteIcon,
    GraphicIcon,
    UpLineIcon,
    DownLineIcon,
    WarningIcon,
    PresentationChartIcon,
    WalletIcon,
} from "../utils/Icons";
// import GainsGraphic from "./components/GainsGraphic";
// import LostAndGainsGraphic from "./components/LostAndGainsGraphic";
// import TotalAndInversion from "./components/TotalAndInversion";

function Dashboard() {
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 640px)");

        function handleMediaChange(event) {
            if (event.matches) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }
        }

        mediaQuery.addEventListener("change", handleMediaChange);
        handleMediaChange(mediaQuery);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaChange);
        };
    }, []);

    return (
        <div className="flex">
            <Transition
                as={Fragment}
                show={showNav}
                enter="transform transition duration-[500ms]"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform duration-[500ms] transition ease-in-out"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <Sidebar />
            </Transition>
            <div className="flex flex-col w-full h-screen p-2">
                <Nav showNav={showNav} setShowNav={setShowNav} />
                <main
                    className={`transition-all duration-[400ms] bg-[#ad73ab] p-8 rounded-xl h-screen overflow-auto`}
                >
                    <h2 className="text-2xl font-semibold mb-8 text-white">Dashboard</h2>
                    <div className="grid grid-cols-1 gap-4 xl:grid-cols-3 lg:gap-8">
                        <div className="h-full w-full">
                            <Card>
                                <CardHeader className="flex justify-between gap-3 p-4">
                                    <DolarIcon className="w-8 h-8 text-green-500" />
                                    <h4 className="text-lg font-semibold">Ganancias</h4>
                                    <Button isIconOnly className="bg-white">
                                        <AjusteIcon className="w-6 h-6" />
                                    </Button>
                                </CardHeader>
                                <div className="flex">
                                    <CardBody>
                                        <p className="text-3xl font-bold">$5,245.00</p>
                                    </CardBody>
                                    <div>
                                        {" "}
                                        <CardBody>
                                            <GraphicIcon className="w-16 h-8 text-green-500" />
                                        </CardBody>
                                    </div>
                                </div>
                                <CardFooter className="gap-2">
                                    <UpLineIcon className="w-6 h-6 text-green-500" />
                                    <p>Desde la semana pasada</p>
                                </CardFooter>
                            </Card>
                        </div>

                        <div className="h-full w-full">
                            <Card>
                                <CardHeader className="flex justify-between gap-3 p-4">
                                    <WarningIcon className="w-8 h-8 text-red-500" />
                                    <h4 className="text-lg font-semibold">Pérdidas</h4>
                                    <Button isIconOnly className="bg-white">
                                        <AjusteIcon className="w-6 h-6" />
                                    </Button>
                                </CardHeader>
                                <div className="flex">
                                    <CardBody>
                                        <p className="text-3xl font-bold ">
                                            <b>-</b> $1,379.00
                                        </p>
                                    </CardBody>
                                    <div>
                                        {" "}
                                        <CardBody>
                                            <GraphicIcon className="w-16 h-8 text-red-500" />
                                        </CardBody>
                                    </div>
                                </div>
                                <CardFooter className="gap-2">
                                    <DownLineIcon className="w-6 h-6 text-red-500" />
                                    <p>Desde la semana pasada</p>
                                </CardFooter>
                            </Card>
                        </div>

                        <div className="h-full w-full">
                            <Card>
                                <CardHeader className="flex justify-between gap-3 p-4">
                                    <PresentationChartIcon className="w-8 h-8 text-blue-500" />
                                    <h4 className="text-lg font-semibold">Total</h4>
                                    <Button isIconOnly className="bg-white">
                                        <AjusteIcon className="w-6 h-6" />
                                    </Button>
                                </CardHeader>
                                <div className="flex">
                                    <CardBody>
                                        <p className="text-3xl font-bold ">$3,866.00</p>
                                    </CardBody>
                                    <div>
                                        {" "}
                                        <CardBody>
                                            <GraphicIcon className="w-16 h-8 text-blue-500" />
                                        </CardBody>
                                    </div>
                                </div>
                                <CardFooter className="gap-2">
                                    <WalletIcon className="w-6 h-6 text-blue-500" />
                                    <p>Desde la semana pasada</p>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-2 mt-10 gap-4 lg:gap-8">
                        {/* <GainsGraphic /> */}
                        {/* <TotalAndInversion /> */}
                    </div>

                    <div className="mt-10">
                        {/* <LostAndGainsGraphic /> */}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;

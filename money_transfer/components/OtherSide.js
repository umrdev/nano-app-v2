import {CalculatorIcon, LightningBoltIcon, LockClosedIcon, ThumbUpIcon} from "@heroicons/react/outline";

export default function OtherSide(){
    return(
        <div className="flex justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32 mx-auto container md:block">
            <div className="justify-between">
                <div className="flex flex-row items-center py-4 pl-10">
                    <a href="#" className="font-bold text-2xl p-4">
                        LOGO
                    </a>
                </div>
                <div className="">
                    <div className="flex flex-row items-center py-4 pl-10">
                        <LockClosedIcon className="h-8 pr-2 text-purple-900 text-2xl" />
                        <span className="text-gray-400 text-xl font-medium">
                    Sécurisé
                  </span>
                    </div>
                    <div className="flex flex-row items-center py-4 pl-10">
                        <LightningBoltIcon className="h-8 pr-2 text-purple-900 text-3xl" />
                        <span className="text-gray-400 text-xl font-medium">
                    Transfert rapide
                  </span>
                    </div>
                    <div className="flex flex-row items-center py-4 pl-10">
                        <CalculatorIcon className="h-8 pr-2 text-purple-900 text-2xl" />
                        <span className="text-gray-400 text-xl font-medium">
                    {" "}
                            Meilleures frais
                  </span>
                    </div>
                    <div className="flex flex-row items-center py-4 pl-10">
                        <ThumbUpIcon className="h-8 pr-2 text-purple-900 text-2xl" />
                        <span className="text-gray-400 text-xl font-medium">
                    Commission équitable
                  </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
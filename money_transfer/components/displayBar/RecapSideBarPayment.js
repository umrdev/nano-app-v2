import {formatMoney, isEmpty} from "../../configs/tools"
import {useEffect, useContext} from 'react'


export default function RecapSideBarPayment() {

    return (
        <div className="h-screen bg-gray-50 w-full lg:w-1/3 p-2 bg-[#f9f6fb] border-l border-[#f5f0f0">
            <div className="">
                <div className="my-8">
                    <div className="text-2xl text-center text-purple-900 font-bold">
                        Informations de la facture
                    </div>
                </div>
                <div className="text-center mb-3">
                    <div className="text-purple-900 mb-2 text-xl font-thin">Code de la reférence</div>
                    <div className="text-md font-semibold capitalize text-purple-900 tracking-wider">
                        123123123D312
                    </div>
                </div>

                <div className="text-center font-bold text-2xl text-purple-900 my-4">
                    Client
                </div>

                <div className="py-5">
                    <div className="w-full flex flex-row items-center">
                        <div className="text-center lg:w-1/2 sm:w-1/2">
                            <div className="text-purple-900 mb-2 text-lg font-thin">Prénom</div>
                            <div className="text-md font-semibold capitalize text-purple-900">
                                oumar
                            </div>
                        </div>

                        <div className="text-center lg:w-1/2 sm:w-1/2">
                            <div className="text-purple-900 mb-2 text-lg font-thin">Nom</div>
                            <div className="text-md font-semibold text-purple-900 capitalize">
                                diallo
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="border border-gray-200 border-opacity-25"></div> */}

                <div className="py-3">
                    <div className="w-full flex flex-row items-center">
                        <div className="text-center lg:w-1/2 sm:w-1/2">
                            <div className="text-purple-900 mb-2 text-xl font-thin">Adresse</div>
                            <div className="text-md font-semibold capitalize text-purple-900">
                                dakar
                            </div>
                        </div>

                        <div className="text-center lg:w-1/2 sm:w-1/2">
                            <div className="text-purple-900 mb-2 text-lg font-thin">N. Téléphone</div>
                            <div className="text-md font-semibold capitalize text-purple-900">
                                +221 77 456 12 45
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center font-bold text-2xl text-purple-900 my-4">
                    Facture
                </div>

                <div className="py-3">
                    <div className="w-full flex flex-row items-center">
                        <div className="text-center lg:w-1/2 sm:w-1/2">
                            <div className="text-purple-900 mb-2 text-xl font-thin">Montant</div>
                            <div className="text-md font-semibold capitalize text-purple-900">
                                12 434 xof
                            </div>
                        </div>

                        <div className="text-center lg:w-1/2 sm:w-1/2">
                            <div className="text-purple-900 mb-2 text-lg font-thin">Frais</div>
                            <div className="text-md font-semibold capitalize text-purple-900">
                                123 xof
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-3">
                        <div className="max-w-md mx-auto ">
                            <div className="w-full flex items-center justify-between border-2 border-purple-500 rounded-lg p-4 ">
                                <div className="text-2xl font-medium text-purple-900">Total :</div>
                                <div className="text-3xl font-bold text-purple-900">
                                    {formatMoney(12557)} xof
                                </div>
                            </div>
                        </div>
                </div>
            </div>


            <div className="my-5">
                <div className="text-2xl text-center text-purple-900 font-bold">
                    Mes dernières retraits
                </div>
            </div>

        </div>
    );
}



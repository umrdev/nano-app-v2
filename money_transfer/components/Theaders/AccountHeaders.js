import {PencilIcon, TrashIcon, EyeIcon} from '@heroicons/react/solid'
import Dropdown from "../Elements/Dropdown";
let items = [
    {
        label : 'Editer'
    },
    {
        label : 'Supprimer'
    },
    {
        label : 'Visualiser'
    }
]
export const AccountHeaders = [
    {
        Header : 'Numéro de compte',
        accessor : 'number_account'
    },
    {
        Header : 'Balance',
        accessor : 'balance'
    },
    {
        Header : 'Type de compte',
        accessor : 'account_type'
    },
    {
        Header : 'Devise',
        accessor : 'currency'
    },
    {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ cell }) => (
            <div className="flex p-2">
                <div className="px-2" onClick={()=> console.log("Edit")}>
                    <PencilIcon className="text-gray-800 h-5 w-5 cursor-pointer hover:text-gray-500"/>
                </div>
                <div className="px-2" onClick={()=> console.log("View")}>
                    <EyeIcon className="text-gray-800 h-5 w-5 cursor-pointer hover:text-gray-500" />
                </div>
                <div className="px-2" onClick={()=> console.log("Del")}>
                    <TrashIcon className="text-gray-800 h-5 w-5 cursor-pointer hover:text-gray-500" />
                </div>
            </div>

        )

    }
]
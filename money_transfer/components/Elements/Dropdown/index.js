import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function Dropdown({button, items}) {

    return (
        <Menu>
            <Menu.Button as="button">{button}</Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
            <Menu.Items as="div">
                <Menu.Item as="div">
                    {({ active }) => (
                        items.map((item) => {
                            return(
                                <span
                                    className={`${active && 'bg-blue-500'}`}
                                >
                                    {item.label}
                                </span>
                            )
                        })
                    )}
                </Menu.Item>
            </Menu.Items>
            </Transition>
        </Menu>
    )
}
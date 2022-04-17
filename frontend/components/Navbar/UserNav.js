import {Menu} from '@headlessui/react'
import {HiOutlineClipboardList} from 'react-icons/hi'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {GoSignOut} from 'react-icons/go';
import {signOutWithGoogle} from '/lib/firebase'
import Link from 'next/link';

function UserNav({user}) {

    function MyLink(props) {
        let {href, children, ...rest} = props
        return (
            <Link href={href}>
                <a {...rest}>{children}</a>
            </Link>
        )
    }


    return (
        <div className="flex items-center gap-2 relative">
            <div className="mr-2 flex">
                <img width="42" height="42" src={user.photoURL} className="rounded-full" loading="lazy"/>
            </div>
            <Menu>
                <Menu.Button>
                    <h4>{user.displayName}</h4>
                </Menu.Button>
                <Menu.Items className="absolute top-12 right-0 bg-white z-50 border rounded space-y-2 w-48 p-1">
                    <Menu.Item
                        className="flex items-center cursor-pointer hover:bg-primary-blue rounded hover:text-white transition-colors p-2">
                        <MyLink href="/dashboard"><HiOutlineClipboardList className="mr-1"/>Dashboard</MyLink>
                    </Menu.Item>
                    <Menu.Item
                        className="flex items-center cursor-pointer hover:bg-primary-blue rounded hover:text-white transition-colors p-2">
                        <MyLink href="/create/add-menu"><AiOutlinePlusCircle className="mr-1"/>Add Menu</MyLink>
                    </Menu.Item>
                    <Menu.Item
                        className="flex items-center cursor-pointer hover:bg-primary-red rounded hover:text-white transition-colors p-2 w-full">
                        <button onClick={signOutWithGoogle} className="w-full"><GoSignOut className="mr-1"/>Sign out
                        </button>
                    </Menu.Item>
                </Menu.Items>
            </Menu>
        </div>
    );
}

export default UserNav;
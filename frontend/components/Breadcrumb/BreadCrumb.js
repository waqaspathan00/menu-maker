import Link from 'next/link';
import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
const BreadCrumb = ({ step }) =>
{
	const steps = [{ name: 'Add Menu', path: "/create/add-menu" }, {
		name: 'Add a dish', path: "/create/add-menu"
	}, { name: 'Finish', path: "" }]

	return (
		<div className='w-full h-auto p-4 space-x-2 text-sm 2xl:flex lg:flex hidden'>
			<Link href="/dashboard">
				<div className='flex items-center cursor-pointer hover:text-primary-black/80'>
					<h4 className='text-sm group-'>Dashboard</h4>
					<AiOutlineRight className='w-4 h-4 text-gray-400' />
				</div>
			</Link>
			{steps.map((crumb, index) => (index < step ?
				<AddCrumbs key={index} crumb={crumb} isActive={index === step - 1} /> : ""))}
		</div>
	)
}

function AddCrumbs({ crumb, isActive })
{
	return <div >
		<Link href={crumb.path}>
			<a className='flex items-center'>
				<h4 className={`${ isActive ? 'font-bold' : "" }`}>{crumb.name}</h4>
				<svg className="w-4 h-4 text-primary-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
			</a>
		</Link>
	</div>
}


export default BreadCrumb;
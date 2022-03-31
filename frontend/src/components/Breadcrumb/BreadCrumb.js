import React from 'react'
import { useSelector } from 'react-redux'

const BreadCrumb = () =>
{
	const { step } = useSelector(state => state.newMenu)
	const steps = ['Add Menu', 'Add a dish', 'Finish']
	return (
		<div className='w-full h-auto p-4 space-x-2 text-sm 2xl:flex lg:flex hidden '>
			<div className='flex items-center'>
				<h4 className='text-sm'>Dashboard</h4>
				<svg className="w-4 h-4 text-primary-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
			</div>
			{steps.map((crumb, index) => (index < step ? <AddCrumbs key={index} crumb={crumb} isActive={index === step - 1} /> : ""))}
		</div>
	)
}

function AddCrumbs({ crumb, isActive })
{
	return (
		<div className='flex items-center'>
			<h4 className={`${ isActive ? 'font-bold' : "" }`}>{crumb}</h4>
			<svg className="w-4 h-4 text-primary-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
		</div>
	)
}

export default BreadCrumb
import React from 'react'

const BreadCrumb = ({active}) => {
  return (
	<div className='w-full h-auto p-4 flex space-x-2 text-sm'>
		<div className='flex items-center'>
			<h4 className='text-sm'>Dashboard</h4>
			  <svg className="w-4 h-4 text-primary-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
		</div>
		  <div className='flex items-center'>
			  
			  <h4 className={`${active === 'add-menu' && "font-bold"}`}>Add Menu</h4>
			  {active !== 'add-menu' && <svg className="w-4 h-4 text-primary-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>}

		  </div>
	</div>
  )
}

export default BreadCrumb
import { HiQrcode, HiLink } from 'react-icons/hi'

function ActiveMenu({ props, handleSetActive, loading })
{
	return (<>
		<h1 className="text-4xl leading-loose font-black">{(props["menu-name"])}</h1>
		<ul className="flex space-x-4 text-sm">
			{props["menu-data"].map((category, index) => <li key={index}>{category["category-title"]}</li>)}
		</ul>
		<div className='flex items-center mt-4 gap-4 flex-wrap'>
			<button className="font-semibold bg-primary-gray/40 text-sm p-2 border rounded hover:bg-primary-gray/70 transition-colors xl:w-fit lg:w-fit md:w-fit w-full justify-center" disabled={loading} onClick={(e) => handleSetActive(e, props["slug"], true)}>Disable Menu</button>
			<button className='text-xl p-2 border rounded flex space-x-2 hover:bg-primary-blue hover:text-white transition-colors xl:w-fit lg:w-fit md:w-fit w-full justify-center'>
				<HiQrcode />
				<p className='mb-0 text-sm'>Share QR Code</p>
			</button>
			<button className='text-xl p-2 border rounded flex space-x-2 hover:bg-primary-blue hover:text-white transition-colors xl:w-fit lg:w-fit md:w-fit w-full  justify-center'>
				<HiLink />
				<p className='mb-0 text-sm'>Share link</p>
			</button>
		</div>
	</>)
}

export default ActiveMenu;
import { HiQrcode, HiLink } from 'react-icons/hi'

function ActiveMenu({ props, handleSetActive, loading })
{
	return (<div className='text-primary-black'>
		<h1 className="text-4xl leading-loose font-black mb-0 ">{(props["menu-name"])}</h1>

		<ul className="flex space-x-4 text-xs items-center">
			{props["menu-data"].map((category, index) => {
		
				if (index < props["menu-data"].length - 1)
				{
					return <li className='text-sm font-semibold' key={index}>{category["category-title"]}<span className='mx-2'>|</span> </li>
				} else
				{
					return <li className='text-sm font-semibold' key={index}> {category["category-title"]}</li>
				}
			
			})}
		</ul>
		<div className='flex items-center mt-4 gap-4 flex-wrap'>
			<button className="font-semibold bg-primary-gray/20 text-sm p-2 border rounded hover:bg-primary-gray/40 transition-colors xl:w-fit lg:w-fit md:w-fit w-full justify-center" disabled={loading} onClick={(e) => handleSetActive(e, props["slug"], true)} title="Disable Menu">Disable Menu</button>
			<button className='text-xl p-2 border rounded flex space-x-2 hover:bg-primary-blue hover:text-white transition-colors xl:w-fit lg:w-fit md:w-fit w-full justify-center' title='Share QR Code'>
				<HiQrcode />
				<p className='mb-0 text-sm'>Share QR Code</p>
			</button>
			<button className='text-xl p-2 border rounded flex space-x-2 hover:bg-primary-blue hover:text-white transition-colors xl:w-fit lg:w-fit md:w-fit w-full  justify-center' title='Share link'>
				<HiLink />
				<p className='mb-0 text-sm'>Share link</p>
			</button>
		</div>
	</div>)
}

export default ActiveMenu;
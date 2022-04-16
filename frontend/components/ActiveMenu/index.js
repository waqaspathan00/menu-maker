import { useState } from 'react'
import { HiQrcode, HiLink } from 'react-icons/hi'
import { toast } from 'react-toastify';
import QrCode from './QRCode';
import { AiOutlineEye } from 'react-icons/ai'
import { useRouter } from 'next/router';
/**
 * @param  {Object} props
 * @param  {CallableFunction} handleSetActive
 * @param  {Boolean} loading
 */
function ActiveMenu({ props, handleSetActive, loading })
{

	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();


	return (<div className='text-primary-black'>
		<h1 className="text-4xl leading-loose font-black mb-0 ">{(props["menu-name"])}</h1>

		<ul className="flex text-xs items-center">
			{props["menu-data"].map((category, index) =>
			{

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
			<button className='text-xl p-2 border rounded flex space-x-2 hover:bg-primary-blue hover:text-white transition-colors xl:w-fit lg:w-fit md:w-fit w-full justify-center' title='Share QR Code' onClick={() => setIsOpen(true)}>
				<HiQrcode />
				<p className='mb-0 text-sm' >Share QR Code</p>
			</button>
			<button className='text-xl p-2 border rounded flex space-x-2 hover:bg-primary-blue hover:text-white transition-colors xl:w-fit lg:w-fit md:w-fit w-full  justify-center' title='Share link' onClick={() =>
			{
				// navigator.clipboard.writeText(`http://localhost:3000/view/${ props['url_name'] }`);  // localhost

				navigator.clipboard.writeText(`https://menumate.herokuapp.com/api/view/${ props['url_name'] }`);  // production
				toast.success("Successfully copied share link!", {
					pauseOnHover: false
				});
			}}>
				<HiLink />
				<p className='mb-0 text-sm'>Share link</p>
			</button>
			<button className='text-xl p-2 border rounded flex space-x-2 hover:bg-primary-blue hover:text-white transition-colors xl:w-fit lg:w-fit md:w-fit w-full justify-center' title='Preview menu' onClick={() => router.push(`/view/${ props['url_name'] }`)}>
				<AiOutlineEye />
				<p className='mb-0 text-sm' >Preview</p>
			</button>
		</div>

		{isOpen ? <QrCode setIsOpen={setIsOpen} url={props['url_name']} /> : null}
	</div>)
}

export default ActiveMenu;
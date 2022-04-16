import { useEffect } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
/**
 * @param  {string} url - url_name from menu object
 * @param  {CallableFunction} setIsOpen
 */
function QrCode({ url, setIsOpen })
{


	function handleDownload()
	{
		const canvas = document.getElementById('qr-code').children[1];
		let downloadLink = document.createElement('a');
		downloadLink.href = canvas.src;
		downloadLink.download = `${url}-qrcode.png`
		downloadLink.click();
		setIsOpen(false)
	}

	useEffect(() =>
	{
		const qrcode = new QRCode(document.getElementById('qr-code'), {
			// text: `http://127.0.0.1:3000/view/${ url }`,  // localhost
			text: `https://menumate.vercel.app/view/${ url }`,  // production
			colorDark: '#000',
			colorLight: '#fff',
			correctLevel: QRCode.CorrectLevel.H
		});
		return () => qrcode.clear()
	}, [])

	return (
		<div className='fixed w-screen h-screen bg-primary-black/20 top-0 left-0 z-50 grid place-items-center'>
			{console.log(window.location.host)}
			<div className='w-auto h-auto bg-white p-8 space-y-2 rounded relative'>
				<IoCloseOutline className="absolute cursor-pointer right-2 top-3 w-6 h-6" onClick={() => setIsOpen(false)} />
				<div id="qr-code" className='w-48 mx-auto' />
				<div className='mt-4 w-fit mx-auto'>
					<button className='cursor-pointer text-base border p-2 rounded hover:bg-primary-blue hover:text-white transition-colors' onClick={handleDownload}>Download QR Code</button>
				</div>
			</div>
		</div>
	)
}

export default QrCode;
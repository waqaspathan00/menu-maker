import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdOutlineDragIndicator } from 'react-icons/md'

function Dish({ props })
{
	return (
		<div className='mt-4 w-auto border rounded shadow-lg p-4'>
			<div className='flex items-center'>
				<MdOutlineDragIndicator className='mr-4 hover:cursor-grab' />
				<div className='w-full border-l pl-4'>
					<div className='w-full flex justify-between items-center'>
						<h1 className='leading-relaxed font-semibold'>{props['item-name']}</h1>
						<span className='flex items-center text-xs'>Options<BsThreeDotsVertical className='w-4 h-4' /></span>
					</div>

					<div className=''>
						<p className='text-sm leading-relaxed'>{props['item-description']}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Dish
import { BsCalendar2Check } from 'react-icons/bs'
import { SiDatabricks } from 'react-icons/si'
import { AiFillPlusCircle } from 'react-icons/ai'
function Dashboard()
{
	return (
		<main className="mt-20">
			<section className="container mx-auto
		justify-center
		2xl:space-x-12
		lg:space-x-12
		space-x-0
		flex-wrap
		mt-0
		h-auto
		text-primary-black
		">
				<div className="flex w-full justify-evenly">
					<div className="">
						Restaurant info
					</div>
					<div className=" w-3/6 ">
						<div className='w-full relative pb-24 mb-12'>
							<h4 className='font-semibold'>Today's Menu</h4>
							<div className="w-full h-auto">
								<h1 className="text-4xl leading-loose font-black">Crazy Monday</h1>
								<ul className="flex w-full space-x-4 text-sm">
									<li>Breakfast</li>
									<li>|</li>
									<li>Lunch</li>
									<li>|</li>
									<li>Dinner</li>
								</ul>
							</div>
							<BsCalendar2Check className='w-6 h-6 absolute -left-12 top-0' />
							<div className='h-full border  border-primary-gray/40 rounded mt-2 absolute -left-9 top-6'></div>
						</div>
						<div className='w-full relative mt-2'>
							<div className='flex items-center justify-between'>
								<h4 className='font-semibold'>My Menus</h4>
								<button className='flex items-center p-2 border rounded border-primary-black'>
									<AiFillPlusCircle className='w-4 h-4 mr-1' />
									Add Menu
								</button>
							</div>
							<div className="w-full h-auto mt-4">
								<div className='w-full border p-4 rounded'>
									<h1 className='text-xl font-bold'>Dinner is Served</h1>
									<ul>
										<li>Lunch</li>
									</ul>
								</div>
							</div>
							<SiDatabricks className='w-6 h-6 absolute -left-12 top-0' />
							<div className='h-full border  border-primary-gray/40 rounded mt-2 absolute -left-9 top-6'></div>
						</div>



					</div>

				</div>
			</section>
		</main >
	);
}

export default Dashboard;
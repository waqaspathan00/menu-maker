import eatingCat from './../assets/img/eating-cat.png'
const Dashboard = () =>
{
	return (
		<section className="max-w-[1137px] mx-auto flex items-center 
		justify-center
		space-x-12
		flex-wrap
		">
			<div className='p-4'>
				<img src={eatingCat} className="w-[425px] h-auto" alt="Cat eating a popcorn" />
			</div>
			<div className="max-w-[603px] p-4 2xl:block lg:block hidden">
				<h1 className="text-4xl font-extrabold text-primary-black text-left leading-relaxed tracking-normal">Peak your customer’s interest by having a creative menu name!</h1>
			</div>
		</section>
	)
}

export default Dashboard
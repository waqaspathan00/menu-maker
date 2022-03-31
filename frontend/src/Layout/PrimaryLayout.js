import BreadCrumb from "../components/Breadcrumb/BreadCrumb"

const PrimaryLayout = ({ children }) =>
{
	return (
		<main className="mt-4 h-auto grid place-items-center">
			<div className="container mx-auto">
				<BreadCrumb />
			</div>
			{children}
		</main>
	)
}

export default PrimaryLayout
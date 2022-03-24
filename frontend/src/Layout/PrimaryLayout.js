import BreadCrumb from "../components/Breadcrumb/BreadCrumb"

const PrimaryLayout = ({ children }) =>
{
	return (
		<main className="container mx-auto mt-4 h-auto grid place-items-center">
			<BreadCrumb active="add-menu"/>
				{children}
		</main>
	)
}

export default PrimaryLayout
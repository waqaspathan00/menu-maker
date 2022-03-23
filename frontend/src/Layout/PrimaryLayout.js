import BreadCrumb from "../components/Breadcrumb/BreadCrumb"

const PrimaryLayout = ({ children }) =>
{
	return (
		<main className="container mx-auto mt-4 h-auto">
			<BreadCrumb active="add-menu"/>
				{children}

		</main>
	)
}

export default PrimaryLayout
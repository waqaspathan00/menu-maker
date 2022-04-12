import { MdOutlineArrowBack } from "react-icons/md"

const Modal = ({ setModalOn, setChoice, props} ) => {

    
    const handleCloseClick = () => {
        setChoice(false)
        setModalOn(false)
    }

    return (

        <div className="fixed inset-0 z-50 bg-zinc-200 ">
            <div className="object-fill h-full bg-white w-fill ">
                <button onClick={handleCloseClick} >
                    <MdOutlineArrowBack className="p-2 text-5xl"/>
                </button>
                <p className="flex justify-center pb-2 text-base">Some Menu</p>
                <img className="w-full p-4 rounded-3xl h-1/3" src="https://static.onecms.io/wp-content/uploads/sites/43/2022/02/16/21014-Good-old-Fashioned-Pancakes-mfs_001.jpg" alt='no' />
                <h1 className="pl-4 text-2xl">${props.children['item-price']}</h1>
                <h1 className="pl-4 text-3xl font-bold">{props.children['item-name']}</h1>
                <h1 className="pt-4 pl-4 text-xl font-semibold">Description:</h1>
                <p className="px-4 text-lg">{props.children['item-description']}</p>
                
                
            </div>
        </div>
    );
}

export default Modal
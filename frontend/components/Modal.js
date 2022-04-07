import { MdOutlineArrowBack } from "react-icons/md"

const Modal = ({ setModalOn, setChoice }) => {

    const handleCloseClick = () => {
        setChoice(false)
        setModalOn(false)
    }

    return (

        <div className="bg-zinc-200 fixed inset-0 z-50  ">
            <div className="object-fill  bg-white w-fill h-full ">
                <button onClick={handleCloseClick} >
                    <MdOutlineArrowBack className="text-5xl p-2"/>
                </button>
                <p className="text-base flex justify-center  pb-2">Some Menu</p>
                <img className=" p-4 rounded-3xl h-1/3 w-full" src="https://static.onecms.io/wp-content/uploads/sites/43/2022/02/16/21014-Good-old-Fashioned-Pancakes-mfs_001.jpg" alt='no' />
                <h1 className="text-2xl pl-4">$8.00</h1>
                <h1 className="text-3xl pl-4 font-bold">Pancakes</h1>
                <h1 className="text-xl pl-4 pt-4 font-semibold">Description:</h1>
                <p className="text-lg px-4">Just flour, sugar, salt, baking powder, an egg, a little butter, and milk.</p>
                <h1 className="text-xl pl-4 pt-4 font-semibold">Ingredients:</h1>
                <p className="text-lg px-4">A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.</p>
                
            </div>
        </div>
    );
}

export default Modal
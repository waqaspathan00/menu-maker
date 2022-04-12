import { MdOutlineArrowBack } from "react-icons/md"
import MenuItem from "./MenuItem"

const Modal = ({ setModalOn, setChoice, props} ) => {

    
    const handleCloseClick = () => {
        setChoice(false)
        setModalOn(false)
    }
    

    return (

        <div className="fixed inset-0 z-50 bg-zinc-200 ">
            <div className="object-fill h-full bg-white w-fill ">
                <div className="grid w-full grid-cols-3">
                    <button onClick={handleCloseClick} >
                        <MdOutlineArrowBack className="p-2 text-5xl"/>
                    </button>
                    <h1 className="p-6 text-2xl font-logo">{props.children['category-title']}</h1>
                </div>
                {props.children.items.map((item, index) => 
                            <div key={index} className="grid grid-cols-[repeat(auto-fill,minmax(271px,1fr))] w-full justify-items-center">
                                <MenuItem >{item}</MenuItem>
                            </div>
                        )}
                
                
            </div>
        </div>
    );
}

export default Modal
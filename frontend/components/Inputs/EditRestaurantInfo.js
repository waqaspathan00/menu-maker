import { db } from '/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { MenusContext, UserContext } from '../../lib/context';
import { useState } from 'react';
import { toast } from 'react-toastify';

function EditRestaurantInfo({ prevBusName, setOpenEdit }) {
  const { userData } = useContext(UserContext);
  const {setBusName} = useContext(MenusContext)
  const [loading, setLoading] = useState(false);
  const [newBusName, setNewBusName] = useState(prevBusName)
  const handleSubmit = async () => {
    const uid = userData.user.uid;
	setLoading(true)
	try {
	const businessRef = doc(db, `${uid}/business`);
		await setDoc(businessRef, {
		'business-name': [newBusName],
		});
		setBusName(newBusName)
	} catch(error) {
		toast.error(error)
	} finally{
		setLoading(false)
		setNewBusName("");
		setOpenEdit(false)
	}
  };



  return (
    <div className=" fixed top-0 left-0 h-screen w-screen overflow-hidden bg-slate-900/70 grid place-items-center z-50">
      <div className="w-96 border p-4 rounded shadow-xl bg-white">
        <h1 className="font-bold text-lg mb-2">Edit Restaurant Info</h1>
        <input
          type="text"
          className="block w-full border rounded p-2 bg-slate-50"
          value={newBusName}
          onChange={(e) => setNewBusName(e.currentTarget.value)}
          placeholder="Enter Restaurant Name here"
        />
        <div className="w-full flex mt-4 space-x-4">
          <button
            className="w-full text-center border border-primary-gray text-primary-gray hover:text-white hover:bg-primary-gray rounded transition-colors "
            type="button"
            onClick={() => setOpenEdit(false)}>
            Cancel
          </button>
          <button
            className={`w-full text-center border border-primary-blue  text-base font-semibold hover:text-white hover:bg-primary-blue  rounded py-2 transition-colors flex justify-center cursor-pointer ${
              loading ? 'bg-primary-blue/90 text-white/80' : 'text-primary-blue'
            }`}
            onClick={handleSubmit}
			disabled={loading}
			>
            {loading ? (
              <>
                Processing
                <svg
                  className="animate-spin ml-2 h-5 w-5 text-primary-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </>
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditRestaurantInfo;

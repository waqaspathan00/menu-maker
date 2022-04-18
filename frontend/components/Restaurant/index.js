import { useContext, useState, useCallback } from 'react';
import Toggle from '../Inputs/Toggle';
import { MenusContext, UserContext } from '../../lib/context';
import { db } from '/lib/firebase';
import { getDoc, doc } from 'firebase/firestore';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import EditRestaurantInfo from '../Inputs/EditRestaurantInfo';
function RestaurantInfo() {
  const { busName, setBusName } = useContext(MenusContext);
  const { userData } = useContext(UserContext);
  const [restaurantAddress, setRestaurantAddress] = useState(
    '124 Saint Andrews Ln Glen Cove, New York, 11542',
  );

  const [openEdit, setOpenEdit] = useState(false);

  const getBusinnessInfo = useCallback(async () => {
    const uid = userData.user.uid;

    const businessRef = doc(db, `${uid}/business`);
    try {
      const req = await getDoc(businessRef);
	  const res = await req.data();
      if (req.data()) {
		  setBusName(res['business-name'][0]);
      }
    } catch (error) {
      toast.error(error);
    }
  });

  useEffect(() => {
	   getBusinnessInfo();
  }, [busName]);

  return (
    <div className="mb-12 gap-4 xl:w-1/4 lg:w-1/4 w-full">
      <div>
        <h1 className="text-2xl font-bold leading-relaxed">{busName}</h1>
        <p className="text-sm text-primary-gray">{restaurantAddress}</p>
        <div className="mt-2">
          <button className="text-sm font-semibold text-primary-gray hover:underline" onClick={() => setOpenEdit(true)}>Edit Info</button>
        </div>
      </div>
      <Toggle />
      {openEdit ? <EditRestaurantInfo prevBusName={busName} setOpenEdit={setOpenEdit} /> : null}
    </div>
  );
}



export default RestaurantInfo;

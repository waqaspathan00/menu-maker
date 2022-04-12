/* React JS Template using functions */
import React, {useState, useEffect} from "react"
import axios from "axios"
import {useRouter} from 'next/router'
import Footer from "../../components/footer";
import Category from "../../components/category";


export default function Menu() {
     
    // axios.defaults.baseURL = 'http://localhost:8000/view/'
    const [categories, setCategory] = useState([])
    const router = useRouter()

    useEffect(async () => {
          // GET request using axios inside useEffect React hook
        if (router.isReady){
            const menuName = router.query.menuName

            try{
                   await axios.get('http://localhost:8000/view/' + menuName)
                   .then((response) => {
                       const menuData = response.data['menu-data']
                       setCategory(menuData)
                   });
          }catch(error){}
      }
    }, [router.isReady])
        
        
    return (
        <div>
            <p className="flex justify-center p-4 text-2xl font-logo">Categories</p>
            {categories && categories.map((category, index) => {
                return(
                    <div className="w-11/12 p-2 mx-auto" key={index}>
                        <Category>{category}</Category>
                        {/* <p className="w-full p-2 font-logo text-primary-black">{category['category-title']}</p>
                        {category.items.map((item, index) => 
                            <div key={index} className="grid grid-cols-[repeat(auto-fill,minmax(271px,1fr))] w-full justify-items-center">
                                <MenuItem >{item}</MenuItem>
                            </div>
                        )} */}
                    </div>
                )
            })}
            <Footer className='z-50'>{router.query.menuName}</Footer>
        </div>
        
    )
}

/* React JS Template using functions */
import React, {useState, useEffect} from "react"
import axios from "axios"
import {useRouter} from 'next/router'
import Footer from "../../components/footer";
import Category from "../../components/category";

export default function Menu() {
    const [categories, setCategories] = useState([])
    const router = useRouter()
    const [menuName, setMenuName] = useState("")

    /**
     * when page loads, load the menu data using menu name in url
     */
    useEffect(async () => {
        if (router.isReady) {
            const menuUrlName = router.query.menuName

            try {
                const response = await axios.get('http://localhost:8000/api/view/' + menuUrlName)
                const data = response.data
                setCategories(data['menu-data'])
                setMenuName(data["menu-name"])
            } catch (error) {
                console.log(error)
            }
        }
    }, [router.isReady])


    return (
        <div>
            <p className="text-center p-4 font-bold text-4xl">Categories</p>
            {categories && categories.map((category, index) => {
                return (
                    <div className="w-11/12 p-2 mx-auto" key={index}>
                        <Category category={category}/>
                    </div>

                )
            })}
            <Footer className='z-50'>{menuName}</Footer>
        </div>
    )
}

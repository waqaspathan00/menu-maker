import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react";
import { NewMenuContext } from "/lib/context";

import { MdArrowRightAlt } from 'react-icons/md'
import { toast } from "react-toastify";

import Link from 'next/link'

const MenuInput = () =>
{
	const router = useRouter();
	const { newMenu, setNewMenu } = useContext(NewMenuContext);
	const [menuName, setMenuName] = useState(newMenu["menu-name"].length > 0 ? newMenu["menu-name"] : "");
	const handleSubmit = (e) =>
	{
		e.preventDefault();
		if (!menuName.replace(/\s/g, '').length)
		{
			toast.error("Menu name must be valid");
			setMenuName("")
		} else
		{
			const temp = newMenu;
			temp["menu-name"] = menuName;
			setNewMenu(temp);
			router.push("/create/add-items");
		}

	}

	const handleChange = (e) =>
	{
		setMenuName(e.currentTarget.value);
	}

	useEffect(() => {
		setNewMenu({
			"menu-data": [],
			"menu-name": "",
			"isActive": false
		})
	},[])

	return (
		<div className="mt-4 w-full p-4">
			<div className="flex items-center space-x-2 font-medium">
				<svg className='w-6 h-6' viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.880127 17.7037V21.0688H29.3274C30.1271 21.0688 30.7373 17.6444 30.7373 17.6444L0.880127 17.7037Z" fill="#F2C05A" />
					<path d="M0.879709 21.8919C0.386697 21.8919 0 21.5302 0 21.0688V17.7034C0 17.2497 0.394626 16.8806 0.879709 16.8806L30.7581 16.8212C31.0064 16.8212 31.2634 16.9315 31.4126 17.102C31.5841 17.2945 31.6501 17.5284 31.6 17.7624C30.8709 21.8919 29.7649 21.8919 29.3486 21.8919H0.879709ZM29.0812 20.2655L29.1403 20.1546C29.2737 19.9052 29.4275 19.4626 29.6395 18.7193L29.7115 18.4669L1.78068 18.5269V20.2655H1.99475H29.0812Z" fill="#4C2F1B" />
					<path d="M23.0782 1.05404C22.4681 0.758763 21.7106 0.837639 21.2057 1.27079L0.901001 17.7037H4.68869V27.1699C4.68869 28.2917 5.65633 29.1967 6.85571 29.1967C8.05508 29.1967 9.02272 28.2917 9.02272 27.1699V17.7037H11.2741V22.171C11.2741 23.3124 12.2839 24.2572 13.5045 24.2572C14.7248 24.2572 15.735 23.3127 15.735 22.171V17.7037H18.9543C19.27 18.8255 20.3433 19.652 21.6266 19.652C22.9103 19.652 24.0041 18.8255 24.2989 17.7037L30.7794 17.6842C32.8199 6.8009 25.8345 2.35315 23.0782 1.05404Z" fill="#FFDE8A" />
					<path d="M16.3872 8.21764C17.6284 8.21764 18.6177 7.2927 18.6177 6.13146C18.6177 5.32449 18.1337 4.65539 17.4392 4.30146L14.3042 6.84C14.6199 7.64697 15.4192 8.21764 16.3872 8.21764Z" fill="#FF5C5C" />
					<path d="M16.3873 8.6309C15.2719 8.6309 14.2621 7.9618 13.8833 6.97786C13.8202 6.82045 13.862 6.64348 14.0094 6.5255L17.1444 3.98663C17.2706 3.86865 17.481 3.84876 17.6281 3.92764C18.5118 4.36079 19.0379 5.20685 19.0379 6.11225C19.0595 7.5091 17.8602 8.6309 16.3873 8.6309ZM14.83 6.95831C15.1457 7.48989 15.735 7.82427 16.3873 7.82427C17.3762 7.82427 18.1759 7.07663 18.1759 6.15135C18.1759 5.62011 17.9023 5.12798 17.4601 4.81315L14.83 6.95831Z" fill="#4C2F1B" />
					<path d="M23.7727 10.0085C23.52 11.0124 24.2145 12.0357 25.2874 12.2521C26.0449 12.4096 26.7812 12.1537 27.2443 11.642L25.477 8.55236C24.6564 8.65079 23.9619 9.20157 23.7727 10.0085Z" fill="#FF5C5C" />
					<path d="M25.7292 12.7048C25.5609 12.7048 25.3717 12.6853 25.2034 12.6458C23.8988 12.3704 23.0573 11.1502 23.3518 9.91045C23.5831 8.98551 24.4037 8.27697 25.4348 8.15899C25.6031 8.13944 25.7927 8.21798 25.8766 8.37539L27.644 11.4455C27.7283 11.6029 27.7071 11.7799 27.5809 11.8982C27.0969 12.4095 26.4237 12.7048 25.7292 12.7048ZM24.1933 10.0874C24.1089 10.4811 24.1724 10.8745 24.4034 11.1893C24.6351 11.5237 24.9717 11.76 25.3923 11.8389C25.8554 11.9373 26.339 11.8193 26.7178 11.5436L25.2661 9.00506C24.7194 9.18202 24.3194 9.57539 24.1933 10.0874Z" fill="#4C2F1B" />
					<path d="M6.83435 30C5.15422 30 3.78691 28.7215 3.78691 27.1497V18.5066H0.879649C0.504845 18.5066 0.188063 18.298 0.0727389 17.9747C-0.0656504 17.6494 0.0359792 17.2908 0.321407 17.0707L20.63 0.63472C21.1007 0.259214 21.6975 0.0515738 22.3098 0.0515738C22.7131 0.0515738 23.1019 0.137866 23.4659 0.308428C25.9317 1.47101 33.8084 6.16652 31.6201 17.7671C31.5534 18.1564 31.1829 18.4476 30.7577 18.4476L24.8826 18.4679L24.8232 18.5757C24.1964 19.7107 22.9632 20.4158 21.6049 20.4158C20.2469 20.4158 19.0137 19.711 18.3866 18.5757L18.3264 18.4672H16.5933V22.1117C16.5933 23.7051 15.2076 25.0011 13.5041 25.0011C11.8005 25.0011 10.4152 23.7051 10.4152 22.112V18.4675H9.90234V27.1106C9.88288 28.7029 8.50656 30 6.83435 30ZM22.2882 1.69888C22.09 1.69888 21.9065 1.76427 21.7573 1.88832L3.22938 16.8806H4.66697C4.91096 16.8806 5.12359 16.9618 5.26522 17.1094C5.43857 17.2719 5.52578 17.4748 5.52578 17.7037V27.1699C5.52578 27.8447 6.11285 28.3938 6.83399 28.3938C7.56774 28.3938 8.1422 27.8562 8.1422 27.1699V17.7034C8.1422 17.2497 8.53683 16.8806 9.02191 16.8806H11.2733C11.5169 16.8806 11.7295 16.9618 11.8715 17.1094C12.0449 17.2719 12.1321 17.4748 12.1321 17.7037V22.171C12.1321 22.8674 12.7379 23.434 13.4824 23.434C14.227 23.434 14.8328 22.8674 14.8328 22.171V17.6838C14.8328 17.2298 15.2274 16.8607 15.7125 16.8607H18.9319C19.3341 16.8607 19.6736 17.1091 19.7766 17.4785C19.9918 18.2619 20.7436 18.8093 21.6042 18.8093C22.4648 18.8093 23.2165 18.2619 23.4317 17.4782C23.5348 17.1094 23.8743 16.861 24.2761 16.861L30.0174 16.8408L30.043 16.6689C31.4763 7.07225 25.3645 3.06034 22.6702 1.78079C22.5397 1.72517 22.414 1.69888 22.2882 1.69888Z" fill="#4C2F1B" />
					<path d="M30.7581 17.6444C32.8624 6.56461 25.54 2.17584 22.9099 0.975507C22.3837 0.739215 21.7523 0.818091 21.3105 1.17236L19.7114 2.47146C23.2043 4.91157 29.0747 9.41865 27.2861 17.6646L30.7581 17.6444Z" fill="#FFB07B" />
					<path d="M27.2865 18.4675C27.031 18.4675 26.7776 18.3546 26.6097 18.1655C26.4421 17.9778 26.3726 17.7243 26.4234 17.4866C27.9637 10.3642 23.6192 6.22584 19.1666 3.1173C18.9561 2.98079 18.8285 2.74955 18.8102 2.4782C18.7939 2.23348 18.9039 1.99989 19.1122 1.83775L20.7145 0.535955C21.1422 0.190449 21.6832 0 22.2375 0C22.5899 0 22.9413 0.0792135 23.2545 0.228876C25.7729 1.37764 33.8045 6.03337 31.5784 17.7866C31.5117 18.1763 31.1412 18.4675 30.7163 18.4675H27.2865ZM22.2497 1.6473C22.1045 1.6473 21.9618 1.69652 21.8468 1.78618L21.0821 2.42157L21.2839 2.56955C23.302 4.05202 29.4438 8.56348 28.3363 16.5954L28.3053 16.8212H29.9981L30.0237 16.6487C31.4836 6.86899 25.2467 2.93697 22.4977 1.70022C22.4245 1.66618 22.338 1.6473 22.2497 1.6473Z" fill="#4C2F1B" />
					<path d="M27.2864 17.6444C27.2864 17.6444 27.0969 19.8091 26.2554 21.0688H29.3482C29.3482 21.0688 30.4424 20.5176 30.7581 17.6444H27.2864Z" fill="#E2803D" />
					<path d="M26.2553 21.8919C25.9314 21.8919 25.6485 21.7331 25.4978 21.4672C25.3403 21.2046 25.3464 20.8908 25.5111 20.6437C26.117 19.7208 26.3663 18.0822 26.406 17.5807C26.4388 17.1657 26.8165 16.8411 27.2655 16.8411H30.7371C30.9948 16.8411 31.2255 16.9362 31.3711 17.1024C31.5545 17.2915 31.6305 17.5079 31.5977 17.7361C31.241 20.8985 29.981 21.6738 29.732 21.7972C29.6311 21.8589 29.488 21.8919 29.3482 21.8919H26.2553ZM28.044 18.6286C27.9607 19.0183 27.8569 19.5034 27.6919 20.0063L27.6068 20.2655H29.0181L29.0822 20.1799C29.2271 19.9861 29.501 19.5378 29.7046 18.7129L29.7652 18.4675H28.0786L28.044 18.6286Z" fill="#4C2F1B" />
					<path d="M10.58 13.5313C10.58 14.2813 11.2297 14.8891 12.0316 14.8891C12.8335 14.8891 13.4832 14.2813 13.4832 13.5313C13.4832 12.7813 12.8335 12.1736 12.0316 12.1736C11.2297 12.1736 10.58 12.7813 10.58 13.5313Z" fill="#FF5C5C" />
					<path d="M12.0315 15.3027C11.0005 15.3027 10.1377 14.5156 10.1377 13.5317C10.1377 12.5478 10.9792 11.7603 12.0315 11.7603C13.0835 11.7603 13.925 12.5474 13.925 13.5317C13.925 14.5153 13.0835 15.3027 12.0315 15.3027ZM12.0315 12.5869C11.4636 12.5869 11.0217 13.02 11.0217 13.5313C11.0217 14.043 11.4845 14.4758 12.0315 14.4758C12.5786 14.4758 13.0413 14.0427 13.0413 13.5313C13.0413 13.0197 12.5995 12.5869 12.0315 12.5869Z" fill="#4C2F1B" />
					<path d="M19.1856 14.8894H16.1345C15.9662 14.8894 15.8188 14.7516 15.8188 14.5942V13.9446C15.8188 13.7872 15.9662 13.6493 16.1345 13.6493H19.1856C19.3539 13.6493 19.5013 13.7872 19.5013 13.9446V14.5942C19.5222 14.7516 19.3748 14.8894 19.1856 14.8894Z" fill="#3DE25C" />
					<path d="M18.849 15.3027H16.4925C15.8823 15.3027 15.3983 14.85 15.3983 14.2793C15.3983 13.7087 15.8823 13.256 16.4925 13.256H18.849C19.4592 13.256 19.9432 13.7087 19.9432 14.2793C19.9432 14.85 19.4592 15.3027 18.849 15.3027ZM16.4925 14.0626C16.3663 14.0626 16.2611 14.161 16.2611 14.279C16.2611 14.3973 16.3663 14.4957 16.4925 14.4957H18.849C18.9752 14.4957 19.0804 14.3973 19.0804 14.279C19.0804 14.161 18.9752 14.0626 18.849 14.0626H16.4925Z" fill="#4C2F1B" />
					<path d="M21.2896 11.9174L19.6692 10.2644C19.6062 10.2054 19.6062 10.107 19.6692 10.048L20.4055 9.41831C20.4686 9.35933 20.5738 9.35933 20.6373 9.41831L22.2576 11.0713C22.3206 11.1303 22.3206 11.2288 22.2576 11.2878L21.5213 11.9174C21.4788 11.9767 21.3526 11.9767 21.2896 11.9174Z" fill="#3DE25C" />
					<path d="M21.4371 12.3111H21.3953C21.1848 12.3111 20.9952 12.2127 20.8482 12.0748L19.4596 10.6776C19.3122 10.5398 19.2491 10.3433 19.2491 10.1464C19.2491 9.94989 19.3544 9.77259 19.5018 9.63472L19.9645 9.24101C20.1119 9.10315 20.3224 9.04416 20.5328 9.04416C20.7433 9.04416 20.9325 9.14259 21.0799 9.28045L22.4685 10.6776C22.6159 10.8155 22.679 11.0124 22.679 11.2092C22.679 11.4061 22.5737 11.583 22.4263 11.7209L21.9636 12.1146C21.8158 12.2322 21.6263 12.3111 21.4371 12.3111ZM20.1746 10.166L21.4371 11.4452L21.7737 11.1499L20.5112 9.87068L20.1746 10.166Z" fill="#4C2F1B" />
				</svg>
				<h4 className="text-sm font-bold">Add Menu</h4>
			</div>
			<form className="text-left mt-4" onSubmit={handleSubmit}>
				<label htmlFor="menu-name" className=" font-semibold">Menu Name *</label>
				<input type="text" id="menu-name" className="block w-full bg-[#F9F9F9] h-11 border border-[#DADADA] rounded-sm mt-4 pl-4" placeholder="Amazing Monday, Tuesday Bash, etc." value={menuName} onChange={handleChange} required />
				<div className="flex justify-between items-center mt-8 ">
					<Link href="/dashboard">Cancel</Link>
					<button className='flex items-center font-bold' type="submit">Next 	<MdArrowRightAlt className="ml-2" /></button>
				</div>
			</form>

		</div>
	)
}

export default MenuInput
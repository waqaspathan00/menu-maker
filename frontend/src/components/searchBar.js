import React from 'react'

const SearchBar = () => {
  return (
    <div className="w-full" >
        <div className="container sm:px-6 lg:px-8">
            <div className="flex justify-center"> <input type="text" className="h-14 w-11/12 pr-8 pl-5 rounded-full z-0 outline outline-1" placeholder="Search anything..." />
                <div className="absolute top-4 right-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBar
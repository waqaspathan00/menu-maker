import React from 'react'

const SearchBar = () => {
  return (
    <div class=" bg-gray-200">
        <div class="container h-screen sm:px-6 lg:px-8">
            <div class="relative"> <input type="text" class="h-14 w-11/12 pr-8 pl-5 rounded-full z-0 outline" placeholder="Search anything..." />
                <div class="absolute top-4 right-3"> <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBar
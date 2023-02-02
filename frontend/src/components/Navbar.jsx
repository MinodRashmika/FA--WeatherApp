const  Navbar = () => {
    return(
            <div>   
                <div>
                    <h1 className="text-3xl flex justify-center pt-5">Weather App</h1>
                </div>
            <form>
                <label for="default-search" class="mb-2 text-sm font-medium text-white sr-only dark:text-white">Search</label>
                <div class="relative flex justify-between">
                    <div className="w-6/12 flex items-center mx-auto mt-5">
                        <div class="relative inset-y-0 left-8 flex items-center pl-3 pointer-events-none ">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-400 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" class="flex mr-5 w-full p-4 pl-10 order-1 text-sm text-white border border-gray-600 rounded-lg bg-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Cities..." required/>
                        <button type="submit" class="text-white right-2.5 bottom-2.5 order-2 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </div>
            </form>
            </div>  
    )
}

export default Navbar;
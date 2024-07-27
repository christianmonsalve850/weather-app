function Navbar() {
    return(
        <>
            {/* <img className="search-image" src="./src/assets/search-icon.png" alt="search" /> */}
            <div className="search-bar">
                <img className="search-icon" src="./src/assets/search.png" alt="" />
                <input type="text" placeholder="Search city..."/>
            </div>
        </>
    )
}

export default Navbar;
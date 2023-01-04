
const Header = () => {
    return (
        <nav className="flex items-center justify-center flex-wrap p-6 bg-black">
            <div className="flex items-center flex-shrink-0 text-white">
                <img src={require('../logo-transparent.png')} className="h-20" alt="" />
                <h1 className="text-6xl">arout Terterian</h1>
            </div>
        </nav>
    )
}

export default Header;
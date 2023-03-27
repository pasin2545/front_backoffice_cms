import "./NavbarStyles.css"

function Navbar() {
    return (
        <>
            <nav>
                <a>
                    <div>
                        <ul id="navbar">
                            <li><a className="active" href="index.html">AddGoods</a></li>
                            <li><a href="index.html">Stock</a></li>
                        </ul>
                    </div>
                </a>
            </nav>
        </>
    )
}

export default Navbar;
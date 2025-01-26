import "./Header.css"

function Header() {
    return (
        <div className="header__container">
            <div className="header__logo">
                <div className="header_logo_img">
                    {/* image */}
                    <div className="header__logo_image"></div>
                </div>
                <div className="header_items">
                    <div className="header_item">
                        <span>MEN</span>
                    </div>
                    <div className="header_item">
                        <span>WOMEN</span>
                    </div>
                    <div className="header_item">
                        <span>KIDS</span>
                    </div>
                    <div className="header_item">
                        <span>HOME & LIVING</span>
                    </div>
                    <div className="header_item">
                        <span>BEAUTY</span>
                    </div>
                    <div className="header_item">
                        <span>STUDIO</span>
                    </div>
                </div>
            </div>
            <div className="header__search_nav">
                <div className="header__search_container">
                    {/* search icon */}
                    <span className="header__search__image"></span>
                    <input
                        type="text"
                        placeholder="Search for products, brands and more"
                    />
                </div>
                <div className="header_nav_items">
                    <div className="header_nav_item">
                        <span className="header_nav_item_profile"></span>
                        <span>Profile</span>
                    </div>
                    <div className="header_nav_item">
                        <span className="header_nav_item_wishlist"></span>
                        <span>Wishlist</span>
                    </div>
                    <div className="header_nav_item">
                        <span className="header_nav_item_bag"></span>
                        <span>Bag</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
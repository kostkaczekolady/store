import React, {useState, useEffect} from 'react';
import Header from './Header'
import Checkout from './Checkout'

const Dashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)
    };

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    });

    useEffect(() => {
        if (width > 767) {
            setMenuOpen(true)
        }
    }, [width]);

    return (
        <div>
            <Header
                menuOpen={menuOpen}
                handleToggleMenu={handleToggleMenu}
            />
            <Checkout/>
        </div>
    )
};

export default Dashboard

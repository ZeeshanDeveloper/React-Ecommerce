import React, { useEffect, useState } from 'react';

const Navbar = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        categories();
    }, []);

    const categories = async () => {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setList(data);
    }

    const catelist = list.map((list2) =>
        <li><a href={'https://fakestoreapi.com/products/category/' + list2}>{list2}</a></li>
    )

    return (
        <div className="navbar">
            <ul>
                {catelist}
            </ul>
        </div>
    );
}
export default Navbar;

import React, { useContext } from 'react';
import { FavoriteContext } from '../contexts/favorite';
import { ThemeContext } from '../contexts/theme';

const FavoriteNavbar = () => {
    const { favorites } = useContext(FavoriteContext)
    const { isLight, light, dark } = useContext(ThemeContext)
    const theme = isLight ? light : dark

    return (
        <nav className="navbar" style={{ background: theme.item, color: theme.text }}>
            <h1>لیست علاقه مندی ها</h1>
            <p>
                تعداد
                {` ${favorites.length} `}
            </p>
        </nav>
    )
}

export default FavoriteNavbar;
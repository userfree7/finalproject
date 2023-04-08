import MenuItem from './MenuItem'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/practice">Practice</MenuItem>
            <MenuItem to="/yogatours">Yoga Tours</MenuItem>
            <MenuItem to="/philosophy">Philosophy</MenuItem>
            <MenuItem to="/nutritional">Nutritional Advice</MenuItem>
            <MenuItem to="/favourites">Favourites</MenuItem>
        </>
    )
}
export default Menu

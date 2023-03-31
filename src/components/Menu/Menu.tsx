import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">
                <Link to="/">Home</Link>
            </Button>
            <Button color="inherit">Practice</Button>
            <Button color="inherit">
                <Link to="/yogatours">Yoga tours</Link>
            </Button>
            <Button color="inherit">Philosophy</Button>
            <Button color="inherit">Nutritional advice</Button>
        </>
    )
}
export default Menu

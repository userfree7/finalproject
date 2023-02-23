import { Typography } from '@mui/material'
import logo from 'assets/logo_lotos.png'

type Props = {}

const Logo = (props: Props) => {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="fake blog" width="90px" height="50px" />
        </Typography>
    )
}
export default Logo

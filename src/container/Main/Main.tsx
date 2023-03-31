import { Container } from '@mui/material'
import Home from 'components/pages/Home/Home'
import Swiper from 'components/Swiper/App'

type Props = {}

const Main = (props: Props) => {
    return (
        <Container
            sx={{
                padding: '60px 0',
            }}
        >
            <Swiper></Swiper>
            <Home />
        </Container>
    )
}
export default Main

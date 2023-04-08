import { Container } from '@mui/material'
import ArticlePage from 'components/pages/Article/ArticlePage'
import Favourites from 'components/pages/Favourites/Favourites'
import Home from 'components/pages/Home/Home'
import Nutritional from 'components/pages/Nutritional Advice/Nutritional'
import Philosophy from 'components/pages/Philosophy/Philosophy'
import Practice from 'components/pages/Practice/Practice'
import Yogatours from 'components/pages/Yoga Tours/Yogatours'

import { Route, Routes } from 'react-router-dom'

type Props = {}

const Main = (props: Props) => {
    return (
        <Container
            sx={{
                padding: '60px 0',
            }}
        >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="practice" element={<Practice />} />
                <Route path="yogatours" element={<Yogatours />} />
                <Route path="philosophy" element={<Philosophy />} />
                <Route path="nutritional" element={<Nutritional />} />
                <Route path="favourites" element={<Favourites />} />
                <Route path="/articles/:id" element={<ArticlePage />} />
            </Routes>
        </Container>
    )
}
export default Main

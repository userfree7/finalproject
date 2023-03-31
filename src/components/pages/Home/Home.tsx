import ArticlesList from 'components/ArticlesList/ArticlesList'
import Swiper from 'components/Swiper/App'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <Swiper></Swiper>
            <ArticlesList></ArticlesList>
        </>
    )
}
export default Home

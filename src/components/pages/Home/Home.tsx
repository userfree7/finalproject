import ArticlesList from 'components/ArticlesList/ArticlesList'
import { Slider } from 'components/Swiper/Slider'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <Slider></Slider>
            <ArticlesList></ArticlesList>
        </>
    )
}
export default Home

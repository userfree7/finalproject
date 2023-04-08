import { useAppSelector } from 'redux/hooks'
import { Grid } from '@mui/material'
import ArticlesCard from 'components/ArticlesList/ArticlesCard'
import articlesArray from 'utils/articlesArray'

type Props = {}

type Article = {
    id: number
    title: string
    description: string
    content: string
    image: string
    category?: string
    fulldescription?: string
}
const Favourites = (props: Props) => {
    const favouritesArticles = useAppSelector(
        (state) => state.articlesLikeState
    )

    const newArray = articlesArray.filter(
        ({ id }: Article) => favouritesArticles[id]
    )
    console.log(newArray)
    return (
        <>
            <Grid container spacing={4}>
                {newArray.map(({ id, title, description, content, image }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <ArticlesCard
                            id={id}
                            title={title}
                            description={description}
                            content={content}
                            image={image}
                        ></ArticlesCard>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default Favourites

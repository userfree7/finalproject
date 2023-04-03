import { Grid } from '@mui/material'
import ArticlesCard from 'components/ArticlesList/ArticlesCard'
import articlesArray from 'utils/articlesArray'

type Props = {}
const Nutritional = (props: Props) => {
    return (
        <>
            <Grid container spacing={4}>
                {articlesArray
                    .filter((article) => article.category === 'nutritional')
                    .map(({ title, description, content, image }, id) => (
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
export default Nutritional

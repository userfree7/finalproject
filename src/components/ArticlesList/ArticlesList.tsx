import { Typography, Grid } from '@mui/material'
import ArticlesCard from './ArticlesCard'
import './ArticleList.scss'
import articlesArray from 'utils/articlesArray'

type Props = {}

const ArticlesList = (props: Props) => {
    return (
        <>
            <Typography variant="h3" align="center">
                Yoga every day
            </Typography>
            <Typography
                variant="body1"
                gutterBottom
                align="center"
                className="slogan"
                sx={{
                    padding: '30px 0',
                }}
            >
                it's a secret to retain beauty of body and mind. Practice yoga
                and find your inner peace.
            </Typography>
            <Grid container spacing={4}>
                {articlesArray.map(
                    ({ title, description, content, image }, id) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ArticlesCard
                                id={id}
                                title={title}
                                description={description}
                                content={content}
                                image={image}
                            ></ArticlesCard>
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ArticlesList

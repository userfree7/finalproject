import { Typography, Grid } from '@mui/material'
import ArticlesCard from './ArticlesCard'
import './ArticleList.scss'

type Props = {}
const ArticlesList = (props: Props) => {
    return (
        <>
            <Typography variant="h3" align="center">
                Yoga
            </Typography>
            <Typography
                variant="body1"
                gutterBottom
                align="center"
                className="slogan"
            >
                it's a secret to retain beauty of body and mind. Practice yoga
                and find your inner peace.
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <ArticlesCard></ArticlesCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ArticlesCard></ArticlesCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ArticlesCard></ArticlesCard>
                </Grid>
            </Grid>
        </>
    )
}
export default ArticlesList

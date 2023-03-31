import {
    Card,
    CardMedia,
    Typography,
    CardContent,
    CardActions,
    IconButton,
    Button,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import './ArticlesCard.scss'

type Props = {
    title: string
    description: string
    content: string
    image: string
}

const ArticlesCard = ({ title, description, content, image }: Props) => {
    return (
        <Card className="article">
            <CardMedia />
            <CardContent>
                <div className="article-image">
                    <img src={image} alt="" />
                </div>
                <div className="article-title">
                    <Typography variant="body2" color="text.secondary">
                        {title}
                    </Typography>
                </div>
                <div className="article-description">
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </div>
                <div className="article-content">
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <Button
                    className="btn-read"
                    variant="outlined"
                    color="secondary"
                    size="small"
                >
                    Читати
                </Button>
            </CardActions>
        </Card>
    )
}
export default ArticlesCard

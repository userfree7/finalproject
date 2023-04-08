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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import './ArticlesCard.scss'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'
import { Link } from 'react-router-dom'

type Props = {
    id: number
    title: string
    description: string
    content: string
    image: string
}

const ArticlesCard = ({ id, title, description, content, image }: Props) => {
    const isLiked = useAppSelector((state) => state.articlesLikeState[id])
    const dispatch = useAppDispatch()
    return (
        <Card className="article">
            <CardMedia />
            <CardContent>
                <IconButton
                    onClick={() =>
                        isLiked
                            ? dispatch(removeLike(id))
                            : dispatch(addLike(id))
                    }
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
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
                <Button
                    className="btn-read"
                    variant="outlined"
                    color="secondary"
                    size="small"
                >
                    <Link to={`/articles/${id}`}>Read More</Link>
                </Button>
            </CardActions>
        </Card>
    )
}
export default ArticlesCard

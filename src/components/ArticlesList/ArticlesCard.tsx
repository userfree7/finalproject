import {
    Card,
    CardMedia,
    Typography,
    CardContent,
    CardActions,
    IconButton,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

type Props = {}

const ArticlesCard = (props: Props) => {
    return (
        <Card>
            <CardMedia />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Чандра Намаскар. Приветствие луне для начинающих. Чандра
                    Намаскар — сестра «приветствия Солнцу» и одна из самых
                    действенных практик вечером и перед сном. Как правильно
                    выполнять Чандру Намаскар?
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}
export default ArticlesCard

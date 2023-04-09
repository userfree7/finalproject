import {
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
    Typography,
    Button,
} from '@mui/material'
import { useState } from 'react'

type Props = {}

type Review = {
    name: string
    text: string
}
const arrReviews: Review[] = [
    {
        name: 'Ольга',
        text: 'Дякую! Корисна стаття ',
    },
    {
        name: 'Марина',
        text: 'Дякую за корисну інформацію',
    },
]

const Reviews = (props: Props) => {
    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }
    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required!')
        } else {
            setNewReview({
                name: '',
                text: '',
            })

            setReviews((prevState) => {
                return [...prevState, newReview]
            })
        }
    }
    return (
        <>
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    margin: '60px 0',
                }}
            ></Typography>
            <div>
                {reviews.map((item, i) => (
                    <Card
                        variant="outlined"
                        sx={{
                            margin: '20px 0',
                        }}
                        key={i}
                    >
                        <CardContent>
                            <div>{item.name}:</div>
                            <div>{item.text}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <Card>
                <form onSubmit={onSend}>
                    <h4>Please leave a review</h4>

                    <div>
                        <TextField
                            variant="standard"
                            value={newReview.name}
                            onChange={handleName}
                        />
                    </div>
                    <br />
                    <div>
                        <TextareaAutosize
                            minRows={2}
                            value={newReview.text}
                            onChange={handleText}
                        />
                    </div>
                    <Button
                        className="btn-read"
                        variant="outlined"
                        color="secondary"
                        size="small"
                        type="submit"
                    >
                        Send
                    </Button>
                </form>
            </Card>
        </>
    )
}
export default Reviews

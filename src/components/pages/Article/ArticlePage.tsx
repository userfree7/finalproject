import Reviews from 'components/Reviews/Reviews'
import { useParams } from 'react-router-dom'
import articlesArray, { Article, getArticlesObject } from 'utils/articlesArray'

type Props = {
    articlesObject?: {
        [id: number]: Article
    }
}

const ArticlePage = ({
    articlesObject = getArticlesObject(articlesArray),
}: Props) => {
    console.log(articlesObject)
    const { id } = useParams()
    console.log(id)

    return (
        <div>
            <div
                dangerouslySetInnerHTML={{
                    __html: articlesObject[parseInt(id!)].fulldescription,
                }}
            ></div>
            <div>{articlesObject[parseInt(id!)].title}</div>
            <div>{articlesObject[parseInt(id!)].description}</div>
            <div>{articlesObject[parseInt(id!)].content}</div>
            <Reviews></Reviews>
        </div>
    )
}
export default ArticlePage

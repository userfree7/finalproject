type Article = {
    id: number
    title: string
    description: string
    content: string
    image: string
}
const articlesArray: Article[] = [
    {
        id: 1,
        title: 'Чандра Намаскар. Приветствие луне для начинающих. ',
        description: 'Oдна из самых действенных практик  перед сном.',
        content: 'Как правильно выполнять?',
        image: '/images/moon.png',
    },
    {
        id: 2,
        title: 'Де проходить принципова межа між спортом та йогою? ',
        description: 'Чому їх можна поєднювати, але ніколи не варто змішувати?',
        content: 'Йога допускає можливість робити асани неідеально',
        image: '/images/sport.jpg',
    },
    {
        id: 3,
        title: 'Философия – это любовь к мудрости. Философия Йоги – это альтруизм и любовь к естественной природе.',
        description:
            'Йога - это совокупность физических и духовных практик, направленных на развитие человека на всех уровнях: психическом, духовном и физическом.',
        content:
            'Йога - система упражнений для успокоения мятущегося ума и направления энергии в конструктивные каналы.',
        image: '/images/philosophy.jpg',
    },
    {
        id: 4,
        title: 'Правильне харчування для йогів-початківців: режим і основні принципи. ',
        description:
            'Їжа - це не культ насолоди, а засіб існування, тому дієта повинна включати лише необхідну кількість їжі.',
        content:
            'Основу раціону йогів становлять такі продукти: молоко, мед, горіхи, свіжі овочі, фрукти та ягоди, зелень, крупи.',
        image: '/images/meal.jpg',
    },
    {
        id: 5,
        title: 'Топ-30 асан для початківців: добірка вправ з йоги',
        description:
            'Йога розвиває гнучкість, координацію і баланс, робить тіло красивим, сильним і здоровим. Також ця древня індійська практика допомагає впоратися із захворюваннями хребта, стресом, втомою та іншими поширеними проблемами сучасної людини.',
        content:
            'Якщо ви давно мрієте освоїти йогу, то в нашій добірці ви знайдете кращі асани для початківців, які можна виконувати при будь-якому рівні фізичної підготовки.',
        image: '/images/asans.webp',
    },
    {
        id: 6,
        title: 'Сarpathian Yoga Fest 2023 Izki 10-15 вересня – дихай глибоко, дивись ясно, вчися у найкращих!',
        description:
            'Палітра стилів йоги, еліта майстрів, багатогранність занять – розширюйте світогляд разом із нами та вибирайте те, що припало до душі найбільше.',
        content:
            'Масштабне свято йоги в первозданній красі Карпат. Оживляюча сила музики і мантр, природа, пізнання, відновлення – йога квінтесенція року чекає вас! В цьому році за музичний і розважальний дух фестивалю відповідають найцікавіші гурти з України',
        image: '/images/carpathians.jpg',
    },
]
export default articlesArray

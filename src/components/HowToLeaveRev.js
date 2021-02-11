import one from '../images/howTo/1.png'
import two from '../images/howTo/2.png'
import three from '../images/howTo/3.png'
import five from '../images/howTo/5.png'
import six from '../images/howTo/6.png'



const LeaveReview = [
    {
        id: 0,
        imageUrl:one,
        stepNum: "Step One",
        content: 'On the homepage there is a search bar on the banner, type in the business name you \n' +
            'want to search for and the location then click “search”',
    },
    {
        id: 1,
        imageUrl:two,
        stepNum: "Step Two",
        content: ' You will be directed to a search page where you will see your search result, if the business you searched for is not listed you get message that says Create business or ' +
            'or create review',


    },
    {
        id: 2,
        imageUrl:three,
        stepNum: "Step Three",
        content: 'Click on the card the has the name of the business which you searched for, and you will be redirected to\n' +
            'a page where you can leave a review on the business and also see more of that business information ' +
            'and reviews left by other users',
    },
    {
        id: 3,
        imageUrl:five,
        stepNum: "Step Five",
        content: 'If you are logged in, then On the business profile showing at the left corner you will find a button that says "write review" click on it and a pop up will appear where you can' +
            ' fill in your reviews and submit',
    },
    {
        id: 4,
        imageUrl:six,
        stepNum: "Step Six",
        content: 'If you are logged out a message will appear asking you to log in before you can write a review.',
    },

];

export default LeaveReview;
import two from "../images/howTo/crBtn.png";
import login from "../images/howTo/login.png";
import three from "../images/howTo/three.png";
import four from "../images/howTo/four.png";



const CreateReview = [
    {
        id: 0,
        imageUrl: login,
        stepNum: "Step One",
        content: 'Login to your user account by clicking on the login button on either the hamburger menu on from the top right corner of ChecknCommit website.',
    },
    {
        id: 1,
        imageUrl: two,
        stepNum: "Step Two",
        content: 'After you have logged in, open the hamburger menu and click "Create a review" button',

    },
    {
        id: 2,
        imageUrl: three,
        stepNum: "Step Three",
        content: 'You will be taken to a page where there is a form asking for details on the business you want to write a review on.',
    }, {
        id: 3,
        imageUrl: three,
        stepNum: "Step Four",
        content: 'Fill the form with the appropriate details',
    },
    {
        id: 4,
        imageUrl: four,
        stepNum: "Step Five",
        content: 'Click on the submit button at the bottom to submit your review',
    },
];

export default CreateReview;
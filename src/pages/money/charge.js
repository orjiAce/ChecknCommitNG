import Stripe from 'stripe';
const stripe = new Stripe("sk_test_VXkiOyQhnDCuVJfg6BQ9iHiJ00eq89irR9");
export default async (req, res) => {
    const {id, amount} = req.body;

        try{
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            description: 'Payment for ask a lawyer',
            payment_method: id,
         /*   receipt_email: email,
            name: customer_name,*/

        });

            console.log(payment);
        return res.status(201).json("Payment successful");
    }catch(e){

    }
}
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PaystackButton from 'react-paystack';
import '../style/desktop/AskALawyer.scss';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

toast.configure();


class PayLawyer extends React.Component {

    state = {
        key: "pk_test_52e4b6ebc04fcb7dd751f8bd6d9fcf0a4d169d11", //PAYSTACK PUBLIC KEY
        email: "foobar@example.com",  // customer email
        amount: 200000 //equals NGN100,
    };

    callback = (response) => {
        console.log(response); // card charged successfully, get reference here
    };

    close = () => {
        console.log("Payment closed");
    };



    getReference = () => {
        //you can put any unique reference implementation code here
        let text = "PLN_vyr7g8vnty28x7e";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

        for( let i=0; i < 15; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    };

    render() {


        return (
            <div>
                <div className="payForm">
                    <div className="emailSent">
                        <FontAwesomeIcon icon={faCheckCircle}/> Email is sent
                    </div>
                    <section>
                        Do you wish to take this further?
                    </section>
                    <section> If yes, proceed with your request a sum of NGN2,000. For a lawyer to represent you or deal with your
                        case.
                        <p>
                            <PaystackButton
                                text="Make Payment"
                                class="payButton"
                                callback={this.callback}
                                close={this.close}
                                disabled={true}
                                embed={true}
                               // reference={this.getReference()}
                                email={this.state.email}
                                amount={this.state.amount}
                                paystackkey={this.state.key}
                                tag="button"
                            />
                        </p>


                    </section>

                </div>

            </div>
        );
    };

    }

export default PayLawyer;
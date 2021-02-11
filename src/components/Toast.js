
import * as React from 'react';
import {extend} from "dayjs";


 class Toast extends React.Component {
     constructor(props){
         super(props);
         this.state = {
             showToast: this.props.state,
         }
     }


     render() {


         return (
             <div className="toast">
                 {this.props.body}

             </div>
         );
     }
};
export default Toast;
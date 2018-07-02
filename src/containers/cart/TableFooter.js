import React, { Component } from 'react';
import classes from './cartstyle.css';
import Aux from '../../components/hoc/aux/Aux'
import {connect} from 'react-redux';
class TableFooter extends Component {
  render() {
    
    return (
<Aux>
<tfoot className={classes.tfoot}>
							<tr>
								<th className={classes.empty} colSpan={3}></th>
								<th>SUBTOTAL</th>
								<th colSpan={2} className={classes.subtotal}>${this.props.totalPay}</th>
							</tr>
							<tr>
								<th className={classes.empty} colSpan="3"></th>
								<th>SHIPING</th>
								<td colSpan={2}>$0</td>
							</tr>
							<tr>
								<th className={classes.empty} colSpan="3"></th>
								<th>TOTAL</th>
								<th colSpan={2} className={classes.total}>${this.props.totalPay}</th>
							</tr>
						</tfoot> 

    </Aux>
    );
  }
}


const mapStateToProps = state => {
    return {
        totalPay:state.totalPayableAmount

    };

}




export default  connect(mapStateToProps)(TableFooter);

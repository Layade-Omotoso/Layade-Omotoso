import React from 'react'

class Shopping extends React.Component {
// constructor(){
// 	super()

	state = {
		RiceQ:0,
		RiceA:0,
		BeansQ:0,
		BeansA:0,
		GariQ:0,
		GariA:0
	// }

}

handleRice = (event) => {
		let r_qty = event.target.value;
		let r_amt = r_qty * 1000
		this.setState({
			RiceQ: r_qty,
			RiceA: r_amt
		}) 
		}

handleBeans = (event) => {
		let r_qty = event.target.value;
		let r_amt = r_qty * 1200
		this.setState({
			BeansQ: r_qty,
			BeansA: r_amt
		}) 
		}

handleGari = (event) => {
		let r_qty = event.target.value;
		let r_amt = r_qty * 300
		this.setState({
			GariQ: r_qty,
			GariA: r_amt
		}) 
		}
		

	render(){
		
		return (
			<div> 
				<table width='25%' cellpadding='5' cellspacing='0'>
					<tr>
						<th colspan='4'> <h1>E-RECEIPT </h1></th> 
					</tr>

					<tr>
						<td>Item</td> <td>Price</td> <td>Qty</td> <td>Amount</td> 
					</tr>

					<tr>
						<td>Rice</td> <td> N1, 000 </td> <td><input type='number' size='5' onChange={this.handleRice} /> </td> <td><input value = {this.state.RiceA} disabled size='10'/>  </td> 
					</tr>

					<tr>
						<td>Beans</td> <td> N1, 200 </td> <td><input type='number' size='5' onChange={this.handleBeans}/></td> <td><input value = {this.state.BeansA} disabled size='10'/></td> 
					</tr
					>
					<tr>
						<td>Gari</td> <td> N300 </td> <td><input type='number' size='5' onChange={this.handleGari}/></td> <td><input value = {this.state.GariA} disabled size='10'/></td> 
					</tr>

					<tr>
						<th colspan='4'> TOTAL = {(this.state.RiceA + this.state.BeansA + this.state.GariA)} </th> 
					</tr>

				</table>
			</div>
			)
	}
}

export default Shopping
import React from 'react'
import First from './First'
import Second from './Second'
import Third from './Third'

const Body = () => {
	return (
		<div>
			<table border='1' width='50%'>
				<tr> 
					<td> First </td><td> Second </td><td> Third </td>
				</tr>
				<tr> 
					<td> <First /> </td><td> <Second /> </td><td> <Third /> </td>
				</tr>
			</table>
		</div>
		)
}

export default Body
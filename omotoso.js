/*const layadeJS = require('./layade');
const a = 5;
const b = 6; 
const c = layadeJS.layade
const prod = a*b 
console.log(prod)
console.log('This is file is saved inside ',__dirname)
console.log(a*c)
*/

const express = require('express')

const app = express();
	const user = {
	name:'Omotoso', 
	age: '38',
	station: 'Atiba University'
}
app.get('/',(req,res)=>{

	// res.send("Getting root");
	res.send(user);
})

app.listen(3000)
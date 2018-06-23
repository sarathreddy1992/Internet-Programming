/* define functions here */
/* define functions here */


var TotalAmount=amountSum();

//--------------------<function to calculate the total price>-------------------
function calculateTotal(quantity, price)
{
	return quantity*price;
}

//---------------------<Function to add rows in the table >-------------------
function outputCartRow(file,title,quantity,price,total)
{
document.write('<tr>');
document.write('<td>'+ '<img src=./images/'+file+'>'+'</td>');
document.write('<td>'+ title +'</td>');
document.write('<td>'+ quantity + '</td>');
document.write('<td>'+ '$'+ price.toFixed(2) + '</td>');
document.write('<td>'+'$'+total.toFixed(2) + '</td>');
document.write('</tr>');
}



//----------<Function to calculate the subtotal>----------------------
function subtotal()
{

document.write('$'+TotalAmount.toFixed(2));

 }


//------------------<Function to calculate the tax>----------------------
 function tax()
 {
tax1=TotalAmount*tax_rate;
document.write('$'+tax1.toFixed(2));
return tax1;

}

//-------------<Function to calculate the shipping cost>---------------
function shipping()
{

if(TotalAmount>1000)
{ var ship=0;
	document.write('$'+ship.toFixed(2));
	return ship;
}
else
{
	var ship=40;
	document.write('$'+ship.toFixed(2));
	return ship;
}
}

//------------------<Function to calculate the tax>----------------------
 function tax2()
 {
tax1=TotalAmount*tax_rate;
return tax1;

}

//-------------<Function to calculate the shipping cost>---------------
function shipping2()
{

if(TotalAmount>1000)
{ var ship=0;
	return ship;
}
else
{
	var ship=40;
	return ship;
}
}

//---------------<Function to calculate the GrandTotal>----------------
function grandtotal()
{
var ship1=shipping2();
var taxes=tax2();
var grandtotal1=TotalAmount+ship1+taxes;
document.write('$'+grandtotal1.toFixed(2));
}

//-------------------------------------------------------------------

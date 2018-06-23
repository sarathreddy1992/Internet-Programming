/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

/* using constant from ES2015 ... if using old browser switch to var */
const tax_rate = 0.10;
const shipping_threshold = 1000;

/* running total for subtotals */

function addRow()
{
 for(var i=0;i<filenames.length;i++)
 {
	 amount[i]=calculateTotal(quantities[i], prices[i]);
 	 amount.push(amount[i]);
 	 outputCartRow(filenames[i],titles[i],quantities[i],prices[i],amount[i]); 	
}

}


//----------------------<function to find the sum of all the amounts in the tabel>----------------
function amountSum()
{
	sum=0;
	for(var i =0;i<amount.length-1;i++)
 { 

 sum=sum+amount[i];
}
return sum;
}
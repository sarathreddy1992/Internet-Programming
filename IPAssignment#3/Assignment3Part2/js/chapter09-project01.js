//-----------<Function to get the blur function>--------------
function blurandFocus()
{
var element1=document.getElementsByClassName('hilightable');
var size=element1.length
for(var i=0;i<size;i++)
{
element1[i].addEventListener("blur",getBlur);
element1[i].addEventListener("focus",getFocus);	
}
} 

//-----------------<GetBlur() function>-----------------------
function getBlur()
{
this.style.backgroundColor = "";	
}


//-----------------<Getfocus() function>------------------
function getFocus()
{
	this.style.backgroundColor = 'orange';
}



//------------------<Function to prevent submission if the form is empty>---------------
function preventSubmit()
{
 
var title1=document.getElementById('title');
var desc1=document.getElementById('description');
var year1=document.getElementById('year');
//--------<condition for all 3 required not filled>-----------
if(title1.value=="" && desc1.value=="" && year1.value=="")
{
  title1.classList.add('error');
  desc1.classList.add('error');
  year1.classList.add('error');
  return false;
}
//-----------<condition for only title not filled>------------
else if(title1.value=="" && desc1.value!="" && year1.value!="")
{
  title1.classList.add('error');return false;
}
//--------<condition for only description not filled>-----------
else if(desc1.value==""&& title1.value!="" &&year1.value!="")
{
  desc1.classList.add('error');return false;
}
//--------<condition for only year not filled>----------------
else if (year1.value==""&& title1.value!="" && desc1.value!="")
{
  year1.classList.add('error'); return false;
}
//----------<condition for only year value filled>-------------------
else if(title1.value=="" && desc1.value=="" && year1.value!="")
{
  title1.classList.add('error');
  desc1.classList.add('error'); return false;
}
//----------<condition for only description value filled>--------
else if(title1.value==""&&year1.value=="" && desc1.value!="")
{
  title1.classList.add('error');
  year1.classList.add('error');return false;
}
//---------<condition for only title not filled>--------------
else if  (desc1.value=="" && year1.value=="" && title1.value!="")
{

  desc1.classList.add('error');
  year1.classList.add('error'); return false;
}
//--------<Condition for all filled>----------------
else
{
  return true;
}
}


//----------------<Function to reset the values>----------------------
 function reset_Click()
 {  
  var totalreset=document.getElementById("mainForm")
  var reset1 = document.getElementsByClassName('required')
  for(var i = 0;i < reset1.length;i++)
  {
    if(reset1[i].classList.contains("error"))
    {
      reset1[i].classList.remove('error');
    }
    
  } 
reset1.reset();
}


//----------------<Function to remove the error
function removeError(id)
{
 
  if(document.getElementById(id).classList.contains("error"))
  {
    document.getElementById(id).classList.remove("error");
  }
}


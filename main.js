var arr=parseInt(prompt("Enter a array length"));
var a=[];
for(let i=0;i<arr;i++){
	a[i]=parseInt(prompt("Enter a "+(i+1)+"value"));
}
document.write("a="+a+"<br>"+"<br>");
var b=parseInt(prompt("Enter the position of element you delete"));
var del=parseInt(prompt("Enter the how any element you delete"));
var c=a.splice(b,del);
document.write("Delete the element:"+a);
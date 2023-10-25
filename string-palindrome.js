var string ="dad";
// console.log(string)
var len =string.length;
var msg = 'it is palindrome '
for ( var i=0; i< len/2; i++ )
{
if(string[i] != string[len - 1 - i]){
 msg = 'it is nat a palindrom' 
}
}
console.log(`${string}:${msg}`);
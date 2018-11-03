//reverse a string input

function revString(string){

var i=0
let rev=[]
for (var j=string.length-1;j>=i;j--){

	let revStr=string[j]
	rev.push(revStr)
}

return rev.join('')

}
let t1=performance.now()
revString('Rohan Ganguly')
let t2=performance.now()
console.log('time took to execute ${(t2-t1)/1000} seconds')
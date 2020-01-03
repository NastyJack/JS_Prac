//__________________________________\\
/*


Program to take console input.


*/
//__________________________________\\




var rl = require('readline');
var prompts = rl.createInterface(process.stdin,process.stdout);

function menu(){
    prompts.question("\n Enter a num ",function(...val)
    {
     
    }
}


function pq_num(){    
prompts.question("\n Enter a num ",function(...val){
   
    
    var tmp=[""];
    if(val>5&&val>0)
    tmp="\n The num is bw 0 and 5";

    if(val>4&&val<20)
    tmp="\n The num is bw 5 and 20";

    if(val>205&&val<100)
    tmp="\n The num is bw 20 and 100";

    if(val<0)
    tmp="\n The num is negeative"; 
    console.log(tmp+"\n");
    process.exit();


});

}

arr=[2,3,5,6,23,6,12];


arr.forEach(dist10);

function dist10(val,index)
{ // console.log(val);
    console.log(arr[arr.length-1]);
     arr.length=arr.length-1;

}



function dist(val,index)
{ 
    console.log(val);
}



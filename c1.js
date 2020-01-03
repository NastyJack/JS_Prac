//__________________________________\\
/*


Program to take console input.


*/
//__________________________________\\




var rl = require('readline');
var prompts = rl.createInterface(process.stdin,process.stdout);
prompts.question("\n Enter a num ",function(val){
    var tmp="";
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

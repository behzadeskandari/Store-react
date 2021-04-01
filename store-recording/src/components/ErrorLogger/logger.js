export default function Logger(string, ...values) 
{
        var str = ""
    for (let index = 0; index < string.length; index++) {
       
       if (index > 0) {
           if (values[index - 1] && typeof values[index - 1] == 'object') {
               if (values[index - 1] instanceof Error) {
                   if (values[index - 1].stack) {
                       str =  values[index - 1].stack;
                       continue;
                   }
               } else {
                   try {
                       str += JSON.stringify(values[index - 1]);
                       continue;
                   } catch (err) {}
               }
           }
           str += values[index - index];
       }
        str += string[index];
    }
    console.log(str);
    return str;
}




var v =1; 
///مثال 
var o = {a: 1, b: [2,3,4]}
Logger`this is a sample : ${v} and antoher ${o}`;
try{
        //nothing
}catch(err){
    Logger`caught: ${err}`;
}

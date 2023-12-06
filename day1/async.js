const fs = require('fs');
console.log('start')
fs.readFile('./content/first.txt','utf8', (err,result)=>{
    if(err){
        console.log(err);
        return
    }
     const first= result;
    //console.log(first);
    
})
fs.readFile('./content/second.txt','utf8', (err,result)=>{
    if(err){
        console.log(err);
        return
    }
     const second= result;
    //console.log(result);
    
})
fs.writeFile('./content/async.txt',
`the result is: xyz`,
(err, result)=>{
    if(err){
        console.log(err);
        return
    }
    const third= result;
    console.log('done with the task');
})
console.log('starting with next task');
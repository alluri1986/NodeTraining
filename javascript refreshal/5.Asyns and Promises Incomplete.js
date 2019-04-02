function fetchData(callback)
{
    setTimeout(()=> {
        console.log('Data Pulled')
        callback('Data');
    },1000)
    
}



setTimeout(()=>{
    console.log('Timer  is done after 2 sec')   

    fetchData((text)=> {
        console.log(text);
    })
},2000)

console.log('Hi')
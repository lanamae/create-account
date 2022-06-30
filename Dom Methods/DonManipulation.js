const getbtn = document.querySelector('.getbtn');


const getData = async() =>{
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => data)

    for(let idx=0; data.length>idx; idx++){
        console.log(`data[${idx}]:`, data[idx]);

    }
        
    


}
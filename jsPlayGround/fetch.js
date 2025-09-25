let getData = async ()=>{
    console.log(`Getting data from API.....`);
    let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
    console.log(response.json())
    
    
};

// let image = document.createElement('img');


// image.src=getData()
getData()
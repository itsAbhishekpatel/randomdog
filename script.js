
const dogImageDiv = document.getElementById('dogImage');

// function to get new image every time 
const getNewDog = () =>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json()) //Promises a weird thing!
    .then(json => {
        console.log(json.message);
        dogImageDiv.innerHTML = `<img src ='${json.message}'height =750 width = 750/>`
      })
}

// onclick the button
dogButton.onclick = () =>{
    getNewDog()
}
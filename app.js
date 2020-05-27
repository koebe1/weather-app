const heading = document.querySelector('.timezone');

// get our current location
window.addEventListener('load', ()=> {
    // longitude & latitude
    // let long;
    // let lat;
    let tempDescription = document.querySelector('.temp-description');
    let tempDegree = document.querySelector('.temp-degree');
    let timeZone = document.querySelector('.timezone');
    let icon = document.querySelector('.icon');
    
    
        // navigator.geolocation.getCurrentPosition(position => {
        //     long = position.coords.longitude;
        //     lat = position.coords.latitude;
            
            //const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `http://api.weatherstack.com/current?access_key=bf90496a60896a7d5f98120f74dafab5&query=Regensburg`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    //console.log(data);
                    const {temperature, weather_descriptions, weather_icons} = data.current;
                    const {timezone_id} = data.location;

                    // set DOM elements from the API
                    tempDegree.textContent = temperature;
                    timeZone.textContent = timezone_id;
                    tempDescription.textContent = weather_descriptions[0];
                    icon.src = weather_icons[0];
                // });
        });
});
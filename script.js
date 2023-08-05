const API_KEY=`c7a37064915ca2170c49dfe5d1fc1b02`

const form=document.querySelector("form")
const weather=document.querySelector("#weather")
const search=document.querySelector("#search")



// const API= `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`


const getWeather = async(city) =>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response=await fetch(url); 
    console.log(response)
    const data= await response.json()
    return ShowWeather(data)

}


const ShowWeather = (data) => {

    if(data.cod=="404")
    {
        weather.innerHTML=`<h1>OOPS!!<br>City Not Found<h1>`
        return;
    }

    weather.innerHTML=`<div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" >
    </div>
    <div>
    <h1>${data.main.temp} °C</h1>
    <h2>${data.weather[0].main} </h2>
    </div>`

  


}



form.addEventListener(
    "submit",function(event){
        getWeather(search.value)
        event.preventDefault();
    }
) 

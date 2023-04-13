import React,{useState} from 'react'

const App = () => {
  const[city,setCity] = useState("")
  const [result,setResult] = useState('')
  const changeHandler = e => {
    setCity(e.target.value)
  }
  const SubmitHandler = e =>{
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(response => response.json()).then(data => {const kelvin = data.main.temp;
  const celsius = kelvin -273.15
    setResult("Temperature at" + " " + city + " " + Math.round(celsius)+ "°C")})
    setCity('')
  }
  return (
    <div>
      <center>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Weather App</h5>
            <form onSubmit={SubmitHandler}>
              <input type="text" name="city" value={city} onChange={changeHandler}/><br></br> 
              <input type="submit" value="Get Temperature"/>
            </form>
          <h1>{result}</h1>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App

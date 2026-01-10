fetch("https://api.weatherapi.com/v1/forecast.json?key=44a922adea0a4141b7e183743261001&q=Kathmandu&days=7") //this is the trial api ends in 24/jan/2026
.then(res => res.json())
.then(data => {
    // 1-week weather data
    const weekData = data.forecast.forecastday

    // filter + map
    const result = weekData
      .filter(day => day.day.avgtemp_c > 8)
      .map(day => ({
        date: day.date,
        avgTemp: day.day.avgtemp_c
      }))

    console.log(result)
  })
.catch(err => console.log(err))

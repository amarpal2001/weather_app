let mai_f = (city) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a37c5304ebdbbac3673d6e4e31e2eaa7`)
    .then(res => {
        const data = res.data.main
        console.log(data, "getting");
        const t = document.getElementsByClassName("temp");
        a = t[0].innerHTML = data.temp + '°C';
        // console.log(`${a} C`)

    })
    .catch(error => {
        console.log(error, "not getting");
    })
}

let funck = () => {
    let a = document.querySelector('.temp_max1').value
    mai_f(a)
}

const APIKEY = "6c266f7deef8489bbad214312230110";
const form = document.getElementById("locationForm");
const temp = document.getElementById("temp");

form.addEventListener("submit", async (event) => {
	locationQuery = form.elements["city"].value;
	await getForecast(locationQuery, APIKEY);
    form.elements["city"].value = ''; //reset the  search field
	event.preventDefault();
});

async function getForecast(location, apikey) {
	fetch(`http://api.weatherapi.com/v1/current.json?q=${location}&key=${apikey}`)
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
            console.log(response);
			temp.textContent = `The current temperature in ${response.location.name} is ${response.current.temp_c} °C`;
		});
}

async function getForecast2(location, apikey) {
	let response = await fetch(`http://api.weatherapi.com/v1/current.json?q=${location}&key=${apikey}`);
	let data = await response.json();
	temp.textContent = `The current temperature in ${data.location.name} is ${data.current.temp_c} °C`;
}

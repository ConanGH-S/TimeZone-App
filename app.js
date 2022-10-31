const $result = document.querySelector('#result')
const continente = 'America'
const ciudad = 'Bogota'
const url = `http://worldtimeapi.org/api/timezone/${continente}/${ciudad}`

fetch(url)
	.then((res) => res.json())
	.then((data) => {
		console.log(data)
		// const datetime = data.datetime
		let {
			utc_offset,
			timezone,
			datetime
		} = data
		$result.textContent = datetime
		// console.log(datetime);
	})
	.catch(console.log('Ups, now we cant take enough info about what is happening!'))

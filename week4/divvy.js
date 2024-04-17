// API Endpoints: https://gbfs.divvybikes.com/gbfs/gbfs.json
// Stations: https://gbfs.divvybikes.com/gbfs/en/station_information.json
// Real-time status: https://gbfs.divvybikes.com/gbfs/en/station_status.json

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("h1").addEventListener("click", loadStations )
})

async function loadStations() {
  let http_response = await fetch("https://gbfs.divvybikes.com/gbfs/en/station_information.json")
  let station_data = await http_response.json()
  
    console.log(station_data)

    let stations = station_data.data.stations

    for (let i = 0; i < stations.length; ++i) {
        let station = stations[i]
        console.log(station.name, station.capacity)
    }
}
// Fetch function - makes http request at the URL, but it is asynchronous
// Await and Sync in above function - Waits until all the data is there in the fetch, makes it feel like a synchronous function call
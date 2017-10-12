/* eslint-disable no-unused-vars */
const $driverListing = document.querySelector('.driver-listing')

fetch('http://ergast.com/api/f1/2017/3/qualifying.json').then(response =>
  response
    .json()
    .then(driverResolve => {
      console.log(driverResolve)
      const driverData =
        driverResolve.MRData.RaceTable.Races[0].QualifyingResults
      const renderDrivers = driverData.map(driver => {
        return renderDriver(driver)
      })
      renderDrivers.forEach(driver => {
        $driverListing.appendChild(driver)
      })
    })
    .catch(err => {
      console.log(err)
    })
)

function renderDriver({ Constructor, Driver, Q1 }) {
  const $driver = document.createElement('div')
  const $permanentNumber = document.createElement('p')
  $permanentNumber.textContent = Driver.permanentNumber
  const $driverId = document.createElement('p')
  $driverId.textContent = Driver.driverId
  const $code = document.createElement('p')
  $code.textContent = Driver.code
  const $givenName = document.createElement('p')
  $givenName.textContent = Driver.givenName
  const $familyName = document.createElement('p')
  $familyName.textContent = Driver.familyName
  const $nationality = document.createElement('p')
  $nationality.textContent = Driver.nationality
  const $constructorId = document.createElement('p')
  $constructorId.textContent = Constructor.constructorId
  // const $driverCarImage = document.createElement('img')
  // const $driverUrl = document.createElement('p')
  // img.src = public / images / cars / F1_ferarri - raikkonen.png
  $driver.append(
    $permanentNumber,
    $driverId,
    $code,
    // $driverUrl,
    $givenName,
    $familyName,
    $nationality,
    $constructorId
  )
  return $driver
}

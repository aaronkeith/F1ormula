/* eslint-disable no-unused-vars */
const $driverQualify = document.querySelector('.driver-listing-qualify')

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
        $driverQualify.appendChild(driver)
      })
    })
    .catch(err => {
      console.log(err)
    })
)

function renderDriver({ Constructor, Driver, Q1 }) {
  const $driver = document.createElement('div')
  const $driverCarImage = document.createElement('img')
  $driverCarImage.src =
    'images/cars/F1' +
    '_' +
    Constructor.constructorId +
    '-' +
    Driver.familyName +
    '-' +
    Driver.permanentNumber +
    '.png'
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
  const $constructorName = document.createElement('p')
  $constructorName.textContent = Constructor.name
  $driver.append(
    $driverCarImage,
    $permanentNumber,
    $driverId,
    $code,
    $givenName,
    $familyName,
    $nationality,
    $constructorName
  )
  return $driver
}

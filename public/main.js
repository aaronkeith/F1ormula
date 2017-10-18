/* eslint-disable no-unused-vars */
const $driverQualify = document.querySelector('.driver-listing-qualify')
const $driverFinish = document.querySelector('.driver-listing-finish')

fetch('http://ergast.com/api/f1/2017/3/qualifying.json').then(response =>
  response
    .json()
    .then(driverResolve => {
      const driverData =
        driverResolve.MRData.RaceTable.Races[0].QualifyingResults
      const renderDrivers = driverData.map(driver => {
        return renderDriverQualify(driver)
      })
      renderDrivers.forEach(driver => {
        $driverQualify.appendChild(driver)
      })
    })
    .catch(err => {
      console.log(err)
    })
)

fetch('http://ergast.com/api/f1/2017/3/results.json').then(response =>
  response
    .json()
    .then(driverResolve => {
      console.log(driverResolve)
      const driverData = driverResolve.MRData.RaceTable.Races[0].Results
      const renderDrivers = driverData.map(driver => {
        return renderDriverFinish(driver)
      })
      renderDrivers.forEach(driver => {
        $driverFinish.appendChild(driver)
      })
    })
    .catch(err => {
      console.log(err)
    })
)

function renderDriverQualify({ Constructor, Driver, Q1, Q2, Q3, position }) {
  const $driver = document.createElement('div')
  $driver.setAttribute('class', 'driver-display')
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
  const $qualifyPosition = document.createElement('span')
  $qualifyPosition.setAttribute('id', 'qualify-position')
  $qualifyPosition.textContent = position
  const $positionText = document.createElement('span')
  $positionText.setAttribute('id', 'position')
  $positionText.textContent = 'position'

  const $driverName = document.createElement('p')
  $driverName.setAttribute('id', 'driver-name')
  $driverName.textContent = Driver.givenName + ' ' + Driver.familyName

  const $nationality = document.createElement('p')
  $nationality.setAttribute('id', 'nationality')
  $nationality.textContent = 'Nationality:' + ' ' + Driver.nationality

  const $constructorName = document.createElement('p')
  $constructorName.setAttribute('id', 'constructor-name')
  $constructorName.textContent = 'Constructor:' + ' ' + Constructor.name
  const $Q1Time = document.createElement('p')
  $Q1Time.textContent = 'Q1 Time:' + ' ' + Q1
  const $Q2Time = document.createElement('p')
  $Q2Time.textContent = 'Q2 Time:' + ' ' + Q2
  const $Q3Time = document.createElement('p')
  $Q3Time.textContent = 'Q3 Time:' + ' ' + Q3
  $driver.append(
    $qualifyPosition,
    $positionText,
    $driverCarImage,
    $driverName,
    $nationality,
    $constructorName,
    $Q1Time,
    $Q2Time,
    $Q3Time
  )
  return $driver
}

function renderDriverFinish({
  Constructor,
  Driver,
  FastestLap,
  Time,
  status,
  points,
  position,
  grid
}) {
  const $driver = document.createElement('div')
  $driver.setAttribute('class', 'driver-display')
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
  const $finishPosition = document.createElement('span')
  $finishPosition.setAttribute('id', 'finish-position')
  $finishPosition.textContent = position
  const $positionText = document.createElement('span')
  $positionText.setAttribute('id', 'position')
  $positionText.textContent = 'position'

  const $driverName = document.createElement('p')
  $driverName.setAttribute('id', 'driver-name')
  $driverName.textContent = Driver.givenName + ' ' + Driver.familyName

  const $startPosition = document.createElement('p')
  $startPosition.setAttribute('id', 'start-position')
  $startPosition.textContent = 'Start Position:' + ' ' + grid

  const $points = document.createElement('p')
  $points.setAttribute('class', 'points')
  $points.textContent = 'Points:' + ' ' + points

  const $raceStatus = document.createElement('p')
  $raceStatus.setAttribute('class', 'race-status')
  $raceStatus.textContent = 'Race Status' + ' ' + status

  const $fastestLap = document.createElement('p')
  $fastestLap.setAttribute('class', 'fastest-lap')
  if (FastestLap !== undefined) {
    $fastestLap.textContent = 'Fastest Lap:' + ' ' + FastestLap.Time.time
  }

  const $fastestLapKph = document.createElement('p')
  $fastestLapKph.setAttribute('class', 'fastest-lap-kph')
  if (FastestLap !== undefined) {
    $fastestLapKph.textContent =
      'Lap Speed:' + ' ' + FastestLap.AverageSpeed.speed + ' ' + 'kph'
  }

  $driver.append(
    $finishPosition,
    $positionText,
    $driverCarImage,
    $driverName,
    $startPosition,
    $raceStatus,
    $points,
    $fastestLap,
    $fastestLapKph
  )
  return $driver
}

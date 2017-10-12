/* eslint-disable no-unused-vars */
const $driverListing = document.querySelector('.driver-listing')

function renderDriver({
  number,
  driverId,
  driverCode,
  driverUrl,
  givenName,
  familyName,
  nationality,
  constructorId
}) {
  const $driver = document.createElement('div')
  const $number = document.createElement('p')
  $number.textContent = number
  const $driverId = document.createElement('p')
  $driverId.textContent = driverId
  const $driverCode = document.createElement('p')
  $driverCode.textContent = driverCode
  const $givenName = document.createElement('p')
  $givenName.textContent = givenName
  const $familyName = document.createElement('p')
  $familyName.textContent = familyName
  const $nationality = document.createElement('p')
  $nationality.textContent = nationality
  const $constructorId = document.createElement('p')
  $constructorId.textContent = constructorId
  const $driverCarImage = document.createElement('img')
  img.src = public / images / cars / F1_ferarri - raikkonen.png
  $driver.append(
    $number,
    $driverId,
    $driverCode,
    $driverUrl,
    $givenName,
    $familyName,
    $nationality,
    $constructorId
  )
  return $driver
}
//
// ;<QualifyingResult number="44" position="1">
//   <Driver
//     driverId="hamilton"
//     code="HAM"
//     url="http://en.wikipedia.org/wiki/Lewis_Hamilton"
//   >
//     <PermanentNumber>44</PermanentNumber>
//     <GivenName>Lewis</GivenName>
//     <FamilyName>Hamilton</FamilyName>
//     <DateOfBirth>1985-01-07</DateOfBirth>
//     <Nationality>British</Nationality>
//   </Driver>
//   <Constructor
//     constructorId="mercedes"
//     url="http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One"
//   >
//     <Name>Mercedes</Name>
//     <Nationality>German</Nationality>
//   </Constructor>
//   <Q1>1:33.333</Q1>
//   <Q2>1:32.406</Q2>
//   <Q3>1:31.678</Q3>
// </QualifyingResult>

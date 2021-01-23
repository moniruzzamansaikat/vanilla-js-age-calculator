// show years in the list
const yearsSelect = document.getElementById('years')
const fullAgeShow = document.querySelector('.full-age')
const ageContainer = document.querySelector('.age-container')
const noResult = document.querySelector('.placeholder-text')

const monthNames = [
  'january', 'february', 'march', 'april', 'may', 'jun', 'july', 'august', 'september', 
  'octobor', 'november', 'december'
]

for(let i = 1970; i<=2020; i++) {
  const opt = document.createElement('option')
  opt.value = i
  opt.innerText = i
  yearsSelect.append(opt)
}

const selectMonth = document.getElementById('s-month')
const selectDay = document.getElementById('s-day')
const calButton = document.getElementById('calculate-button')
const resButton = document.getElementById('reset-button')

// ! reset button
resButton.addEventListener('click', () => {
  ageContainer.className = ' d-none'
  noResult.className = ' d-block'
}) 

calButton.addEventListener('click', function(e) {
  e.preventDefault()
  // ! do not forget to display the age container
  ageContainer.className = ' d-block'
  noResult.className = ' d-none'


  const bYear = yearsSelect.value 
  const bDate = selectDay.value 
  const bMonth = monthNames.indexOf(selectMonth.value) 
  
  
  const birthDate = new Date(bYear, bMonth, bDate)
  const currDate = new Date()

  let years = currDate.getFullYear() - birthDate.getFullYear()
  let months = currDate.getMonth() - birthDate.getMonth()
  let days = currDate.getDate() - birthDate.getDate()

  // ! if birthdate is greater than current date
  if(currDate.getTime() < birthDate.getTime()) {
    alert('Please give a valid date !')
    ageContainer.className = ' d-none'
    noResult.className = ' d-block'
  }

  if(months < 0) {
    months = 12 + months
  }

  if(days < 0) {
    days = 30 + days
  }

  const fullAge= `${years} years, ${months} months, ${days} days`
  fullAgeShow.innerHTML = fullAge

  // call info function to show details
  showInformation(years, months, days)
})


// show individual information
function showInformation(y, m, d) {
  let year = y 
  let month = (y * 12) + m 
  let week = month * 4
  let day = (365 * year) + d 
  let hours = day * 24
  let minutes = hours * 60

  const showYear = document.querySelector('li#years')
  const showMonth = document.querySelector('li#months')
  const showWeek = document.querySelector('li#weeks')
  const showDays = document.querySelector('li#days')
  const showHour = document.querySelector('li#hours')
  const showMinute = document.querySelector('li#minutes')

  showYear.innerHTML = `${year} years`
  showMonth.innerHTML = `${month} months`
  showWeek.innerHTML = `${week} weeks`
  showDays.innerHTML = `${day} days`
  showHour.innerHTML = `${hours} hours`
  showMinute.innerHTML = `${minutes} minutes`
}
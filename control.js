const $ = document.querySelectorAll.bind(document)

function callbackToCountdown(data){
	return element => {
        const digit = data
            .split('')[
                element.getAttribute('data-js-digit-index')
            ]
		if(element.innerHTML !== digit){
            element.innerHTML = digit
        }
	}
}

const countdown = () => {
    const date = new Date()
    const newYearDate = new Date(date.getFullYear() + 1, 1)
    const milissecondsToNextYear = newYearDate - date

    const secondsToNextYear = parseInt(milissecondsToNextYear / 1000)
    const minutesToNextYear = parseInt(secondsToNextYear / 60)
    const hoursToNextYear = parseInt(minutesToNextYear / 60)
    const daysToNextYear = parseInt(hoursToNextYear / 24)

    const [
        countdownSeconds,
        countdownMinutes,
        countdownHours,
        countdownDays
    ] = [
        String(secondsToNextYear % 60).padStart(2, '0'),
        String(minutesToNextYear % 60).padStart(2, '0'),
        String(hoursToNextYear % 24).padStart(2, '0'),
        String(daysToNextYear).padStart(2, '0')
    ]
	
	$('.countdown-number[data-js-number=seconds]').forEach(
		callbackToCountdown(countdownSeconds)
	)
	$('.countdown-number[data-js-number=minutes]').forEach(
		callbackToCountdown(countdownMinutes)
	)
	$('.countdown-number[data-js-number=hours]').forEach(
		callbackToCountdown(countdownHours)
	)
    $('.countdown-number[data-js-number=days]').forEach(
		callbackToCountdown(countdownDays)
	)
}

countdown()
setInterval(countdown, 1)
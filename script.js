let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")
let homeScore = 0
let guestScore = 0

// HOME SCORE

function addOnePointHome() {
    homeScore += 1
    homePoints.textContent = homeScore
}

function addTwoPointsHome() {
    homeScore += 2
    homePoints.textContent = homeScore
}

function addThreePointsHome() {
    homeScore += 3
    homePoints.textContent = homeScore
}


// GUEST SCORE

function addOnePointGuest() {
    guestScore += 1
    guestPoints.textContent = guestScore
}

function addTwoPointsGuest() {
    guestScore += 2
    guestPoints.textContent = guestScore
}

function addThreePointsGuest() {
    guestScore += 3
    guestPoints.textContent = guestScore
}


// NEW GAME

function startNewGame() {
    guestScore = 0
    homeScore = 0
    guestPoints.textContent = guestScore
    homePoints.textContent = homeScore
}

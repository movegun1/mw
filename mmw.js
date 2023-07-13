Math.random()
var image = document.getElementById("backgroundImage")
var starForce = document.getElementById("starForce")
var starForcenum = 2
var meso
var string

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function nextStarForce() {
    starForce.src = "https://raw.githubusercontent.com/kangsiwoo/leedongun-sImage-storage/main/images/%EC%8A%A4%ED%83%80%ED%8F%AC%EC%8A%A4/starpos" + ++starForcenum + ".png"
    if (starForcenum === 3) {
        enterMeso()
    }
    else if (starForcenum === 5) {
        if (meso <= 5) {
            string = "3카 5앱"
        }
        else if (meso <= 10) {
            string = "1앜 2카 5앱"
        }
        else if (meso <= 15) {
            string = "흙케인"
        }
        else {
            string = "아케인"
        }
        alert(string)
    }
}

function enterMeso() {
    meso = Number(prompt("메소를 입력하세요.(숫자만 입력하세요)"))
}


function printA() {
    image.src = "https://raw.githubusercontent.com/kangsiwoo/leedongun-sImage-storage/main/images/background/" + getRandomArbitrary(0,9) + ".png"
}

printA()

setInterval(printA, 3000)



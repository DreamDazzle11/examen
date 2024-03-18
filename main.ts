radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber < 15) {
        basic.showNumber(receivedNumber)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        basic.showNumber(receivedNumber)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    basic.pause(2000)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
function Fiesta () {
    for (let index = 0; index < 10; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
}
input.onButtonPressed(Button.A, function () {
    if (RE == 1) {
        radio.sendNumber(input.temperature())
        Correcto()
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    }
})
function Recivido () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
}
input.onButtonPressed(Button.AB, function () {
    if (RE == 1) {
        radio.sendString("Fiesta")
        Correcto()
        music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.InBackground)
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString.includes("Fiesta")) {
        Fiesta()
        music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.InBackground)
    } else {
        Recivido()
        basic.showString(receivedString)
    }
})
input.onButtonPressed(Button.B, function () {
    if (RE == 1) {
        radio.sendString("!")
        Correcto()
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    }
})
function Correcto () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
}
let RE = 0
let strip: neopixel.Strip = null
radio.sendNumber(0)
strip = neopixel.create(DigitalPin.P1, 10, NeoPixelMode.RGB)
RE = 0
strip.showColor(neopixel.colors(NeoPixelColors.Black))
radio.setGroup(25)
basic.showNumber(3)
basic.pause(1000)
basic.showNumber(2)
basic.pause(1000)
basic.showNumber(1)
basic.pause(1000)
basic.clearScreen()
if (input.buttonIsPressed(Button.A)) {
    RE = 1
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . #
        . . . . .
        . . . . .
        `)
}
Correcto()

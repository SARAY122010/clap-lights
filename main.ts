input.onSound(DetectedSound.Loud, function () {
    lighston = !(lighston)
    if (lighston) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
let lighston = false
input.setSoundThreshold(SoundThreshold.Loud, 128)

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.StickFigure)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
basic.showIcon(IconNames.House)
basic.forever(function () {
    music.playMelody("C5 A B G A F G E ", 500)
})

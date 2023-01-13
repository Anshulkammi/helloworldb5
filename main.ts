input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.StickFigure)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Chessboard)
})
basic.showIcon(IconNames.House)
basic.forever(function () {
    music.playMelody("C5 A B G A F G E ", 500)
})

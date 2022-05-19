input.onPinPressed(TouchPin.P1, function () {
    while (false) {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.showNumber(1)
        basic.pause(3000)
        pins.servoWritePin(AnalogPin.P1, 240)
        basic.showNumber(2)
        basic.pause(3000)
        pins.servoWritePin(AnalogPin.P1, 90)
        basic.showNumber(0)
        basic.pause(3000)
    }
})
radio.setGroup(1)

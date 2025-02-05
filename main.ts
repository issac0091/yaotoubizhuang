let D1 = 0
let D2 = 0
let D3 = 0
let Speed = 200
cbit_小车类.Servo_Car(cbit_小车类.enServo.S1, 90)
cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Stop, 0)
basic.showIcon(IconNames.Happy)
while (!(input.buttonIsPressed(Button.A))) {
    cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Stop, 0)
}
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Stop, 0)
    basic.pause(600)
    cbit_小车类.Servo_Car(cbit_小车类.enServo.S1, 150)
    basic.pause(600)
    D1 = Math.floor(cbit_小车类.Ultrasonic_Car())
    while (D1 == 0) {
        D1 = Math.floor(cbit_小车类.Ultrasonic_Car())
    }
    cbit_小车类.Servo_Car(cbit_小车类.enServo.S1, 90)
    basic.pause(600)
    D2 = Math.floor(cbit_小车类.Ultrasonic_Car())
    while (D2 == 0) {
        D2 = Math.floor(cbit_小车类.Ultrasonic_Car())
    }
    cbit_小车类.Servo_Car(cbit_小车类.enServo.S1, 30)
    basic.pause(600)
    D3 = Math.floor(cbit_小车类.Ultrasonic_Car())
    while (D3 == 0) {
        D3 = Math.floor(cbit_小车类.Ultrasonic_Car())
    }
    cbit_小车类.Servo_Car(cbit_小车类.enServo.S1, 90)
    basic.pause(600)
    if (D1 < 20 && D3 - D1 > 0) {
        Speed = Speed - 50
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Right, Speed)
        Speed = 200
    } else if (D3 < 20 && D1 - D3 > 0) {
        Speed = Speed - 50
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Left, Speed)
        Speed = 200
    } else if (D2 < 15) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Back, Speed)
        basic.pause(500)
        if (D3 - D1 > 0) {
            Speed = Speed - 50
            cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Right, Speed)
            Speed = 200
        } else {
            Speed = Speed - 50
            cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Left, Speed)
            Speed = 200
        }
    } else {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, Speed)
    }
    basic.pause(500)
})

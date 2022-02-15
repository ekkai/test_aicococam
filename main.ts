serial.redirectToUSB()
Aicococam.initI2c()
Aicococam.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.forever(function () {
    Aicococam.request()
    if (Aicococam.isLearned(1)) {
        serial.writeLine("111111111111")
    } else {
        serial.writeLine("2222222222222")
    }
})

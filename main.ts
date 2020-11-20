let timer = 0
let pos_y = 0
let pos_x = 0
let _4digit = grove.createDisplay(DigitalPin.P2, DigitalPin.P16)
while (true) {
    pos_x = 0
    for (let index = 0; index < 5; index++) {
        pos_y = 0
        for (let index2 = 0; index2 < 5; index2++) {
            timer = grove.measureInCentimeters(DigitalPin.P0)
            led.toggle(pos_x, pos_y)
            pos_y += 1
            basic.pause(timer * 2)
            _4digit.show(timer)
        }
        pos_x += 1
    }
    music.playMelody("C D F B C5 A A E ", timer)
}

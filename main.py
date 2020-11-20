timer = 0
pos_y = 0
pos_x = 0
_4digit = grove.create_display(DigitalPin.P2, DigitalPin.P16)
while True:
    pos_x = 0
    for index in range(5):
        pos_y = 0
        for index2 in range(5):
            timer = grove.measure_in_centimeters(DigitalPin.P0)
            led.toggle(pos_x, pos_y)
            pos_y += 1
            basic.pause(timer * 2)
            _4digit.show(timer)
        pos_x += 1
    music.play_melody("C D F B C5 A A E ", timer)
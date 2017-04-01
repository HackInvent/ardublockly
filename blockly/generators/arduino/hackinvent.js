/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for Arduino Digital and Analogue input/output.
 *     Arduino built in function docs: http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Arduino.hackinvent');

goog.require('Blockly.Arduino');


/**
 * Function for turning the TinkerLed library on on a given pin (X).
 * Arduino code: setup { pinMode(X, OUTPUT) }
 *               loop  { analogWrite(X, val) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */

Blockly.Arduino['hi_led'] = function(block) {
  var pin = block.getFieldValue('LEDPIN');
  var val = Blockly.Arduino.valueToCode(block, 'INTENSITY', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Led Pin');

  var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);\n';
  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  // Warn if the input value is out of range
  if ((val < 0) || (val > 255)) {
    block.setWarningText('The analogue value set must be between 0 and 255',
                         'pwm_value');
  } else {
    block.setWarningText(null, 'pwm_value');
  }
  var code = 'analogWrite(' + pin + ', ' + val + ');\n';
  return code;
};

Blockly.Arduino['hi_led_digi'] = function(block) {
  var pin = block.getFieldValue('LEDPIN');
  var val = Blockly.Arduino.valueToCode(block, 'STATE', Blockly.Arduino.ORDER_ATOMIC) || 'LOW';
  
  Blockly.Arduino.reservePin(block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Led Pin');
  
  var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);\n';
  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);
  
  var code = 'digitalWrite(' + pin + ', ' + val + ');\n';
  return code;
};

Blockly.Arduino['hi_rgbled'] = function(block) {
  var redpin = block.getFieldValue('REDLEDPIN');
  var greenpin = block.getFieldValue('GREENLEDPIN');
  var bluepin = block.getFieldValue('BLUELEDPIN');
  
  var redval = Blockly.Arduino.valueToCode(block, 'REDVAL', Blockly.Arduino.ORDER_ATOMIC);
  var greenval = Blockly.Arduino.valueToCode(block, 'GREENVAL', Blockly.Arduino.ORDER_ATOMIC);
  var blueval = Blockly.Arduino.valueToCode(block, 'BLUEVAL', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.reservePin(block, redpin, Blockly.Arduino.PinTypes.OUTPUT, 'Red Led Pin');
  Blockly.Arduino.reservePin(block, greenpin, Blockly.Arduino.PinTypes.OUTPUT, 'Green Led Pin');
  Blockly.Arduino.reservePin(block, bluepin, Blockly.Arduino.PinTypes.OUTPUT, 'Blue Led Pin');

  var pinSetupCode = 'pinMode(' + redpin + ', OUTPUT);\n' + ' pinMode(' + greenpin + ', OUTPUT);\n' + ' pinMode(' + bluepin + ', OUTPUT);\n';
  
  Blockly.Arduino.addSetup('io_' + redpin, pinSetupCode, false);
  Blockly.Arduino.addSetup('io_' + greenpin, pinSetupCode, false);
  Blockly.Arduino.addSetup('io_' + bluepin, pinSetupCode, false);

  // Warn if the input value is out of range
  if(redval<0) redval = 0;
  if(greenval<0) greenval = 0;
  if(blueval<0) blueval = 0;

  if(redval > 255) redval = 255;
  if(greenval > 255) greenval = 255;
  if(blueval > 255) blueval = 255;

  var code = 'analogWrite(' + redpin + ', ' + redval + ');\n' + 'analogWrite(' + greenpin + ', ' + greenval + ');\n' + 'analogWrite(' + bluepin + ', ' + blueval + ');\n';

  return code;
};

Blockly.Arduino['hi_button'] = function(block) {
  var pin = block.getFieldValue('PIN');
  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.INPUT, 'Digital Read');

  var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'digitalRead(' + pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['hi_potentiometer'] = function(block) {
  var pin = block.getFieldValue('PIN');
  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.INPUT, 'Analogue Read');

  var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'analogRead(' + pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
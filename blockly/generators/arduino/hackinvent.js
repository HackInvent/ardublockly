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

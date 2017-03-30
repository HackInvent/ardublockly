/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino Tone generation
 *     The Arduino function syntax can be found at
 *     https://www.arduino.cc/en/Reference/tone
 *
 */
'use strict';

goog.provide('Blockly.Blocks.hackinvent');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.hackinvent.HUE = 250;

Blockly.Blocks['hi_led'] = {
  init: function() {
    this.appendValueInput('INTENSITY')
        .appendField(Blockly.Msg.HI_SETLED)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.pwmPins), 'LEDPIN')
        .appendField(Blockly.Msg.HI_SETINTENSITY)
        .setCheck(Blockly.Types.NUMBER.output);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.hackinvent.HUE);
    this.setTooltip(Blockly.Msg.HI_SETLED_TIP);
    this.setHelpUrl('https://www.hackinvent.com/l/tinker-led.html');
  },
  
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['hi_led_digi'] = {
  init: function() {
    this.appendValueInput('STATE')
        .appendField(Blockly.Msg.HI_SETLED)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'LEDPIN')
        .appendField(Blockly.Msg.HI_SETSTATE)
        .setCheck(Blockly.Types.BOOLEAN.checkList);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.hackinvent.HUE);
    this.setTooltip(Blockly.Msg.HI_SETLED_TIP);
    this.setHelpUrl('https://www.hackinvent.com/l/tinker-led.html');
  },
  
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

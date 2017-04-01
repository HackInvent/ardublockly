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
Blockly.Blocks.hackinvent.HUE = 230;

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

Blockly.Blocks['hi_rgbled'] = {
  init: function() {
    this.appendValueInput('REDVAL')
        .appendField(Blockly.Msg.HI_RGBLED)        
        .appendField(Blockly.Msg.HI_SETRED)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.pwmPins), 'REDLEDPIN')
        .appendField(Blockly.Msg.HI_SETVAULE)
        .setCheck(Blockly.Types.NUMBER.output);
    this.appendValueInput('GREENVAL')
        .appendField(Blockly.Msg.HI_SETGREEN)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.pwmPins), 'GREENLEDPIN')
        .appendField(Blockly.Msg.HI_SETVAULE)
        .setCheck(Blockly.Types.NUMBER.output);
    this.appendValueInput('BLUEVAL')
        .appendField(Blockly.Msg.HI_SETBLUE)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.pwmPins), 'BLUELEDPIN')
        .appendField(Blockly.Msg.HI_SETVAULE)
        .setCheck(Blockly.Types.NUMBER.output);
    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.hackinvent.HUE);
    this.setTooltip(Blockly.Msg.HI_SETLED_TIP);
    this.setHelpUrl('https://www.hackinvent.com/l/tinker-rgb-led.html');
  },
  
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['hi_button'] = {
  init: function() {

    this.appendDummyInput()
        .appendField(Blockly.Msg.HI_BUTTON)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'PIN');
    this.setOutput(true, Blockly.Types.BOOLEAN.output);

    this.setColour(Blockly.Blocks.hackinvent.HUE);
    this.setTooltip(Blockly.Msg.HI_BUTTON_TIP);
    this.setHelpUrl('https://www.hackinvent.com/l/tinker-button.html');
  },
  
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['hi_potentiometer'] = {
  init: function() {

    this.appendDummyInput()
        .appendField(Blockly.Msg.HI_POTENTIOMETER)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.analogPins), 'PIN');
    this.setOutput(true, Blockly.Types.NUMBER.output);

    this.setColour(Blockly.Blocks.hackinvent.HUE);
    this.setTooltip(Blockly.Msg.HI_BUTTON_TIP);
    this.setHelpUrl('https://www.hackinvent.com/l/tinker-button.html');
  },
  
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};
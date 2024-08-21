/*
This extension uses the ipylgbst library, which is under the following license:

Copyright (c) 2023 QuantStack
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import * as Blockly from 'blockly';
import { pythonGenerator as BlocklyPy } from 'blockly/python';

var ipylgbst_color_async = '#5D3FD3';
var vernie_color_async = '#088F8F';
var ipylgbst_color = '#8169df';
var vernie_color = '#40B5AD';

/*
 * Block definitions
 */

Blockly.Blocks['ipylgbst_connect_lane'] = {
  init: function () {
    this.appendValueInput('NLANES')
      .setCheck('Number')
      .appendField('Connect to MoveHub and run');
    this.appendDummyInput().appendField('tasks concurrently');
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setInputsInline(true);
    this.appendStatementInput('DO');
    this.setColour(ipylgbst_color_async);
    this.setTooltip(
      'Connect to the Lego Boost and define a number of tasks to be performed at the same time. You can use the "Run Task" block to create a task. E.g. you can run a task to move forward and another task to change the color of the LED at the same time.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_connect'] = {
  init: function () {
    this.appendDummyInput().appendField('Connect to MoveHub and run task');
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.appendStatementInput('DO');
    this.setColour(ipylgbst_color_async);
    this.setTooltip(
      'Connect to the Lego Boost and run the code. Everything is being performed as one main task.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_set_led_async'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Async change LED color to')
      .appendField(
        new Blockly.FieldDropdown([
          ['Red', 'LedColor.red'],
          ['Green', 'LedColor.green'],
          ['Blue', 'LedColor.blue'],
          ['Yellow', 'LedColor.yellow'],
          ['Cyan', 'LedColor.cyan'],
          ['Pink', 'LedColor.pink'],
          ['Purple', 'LedColor.purple'],
          ['Light Blue', 'LedColor.lightblue'],
          ['Orange', 'LedColor.orange']
        ]),
        'COLOR'
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color_async);
    this.setTooltip('Change the color of the LED.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_move_forward_async'] = {
  init: function () {
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('Async move forward with speed');
    this.appendValueInput('TIME').setCheck('Number').appendField('for');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color_async);
    this.setTooltip(
      'Move forward with a certain speed for a chosen no. of seconds.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_move_bacwards_async'] = {
  init: function () {
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('Async move backwards with speed');
    this.appendValueInput('TIME').setCheck('Number').appendField('for');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color_async);
    this.setTooltip(
      'Move bacwards with a certain speed for a chosen no. of seconds.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_turn_left_async'] = {
  init: function () {
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('Async turn left with speed');
    this.appendValueInput('TIME').setCheck('Number').appendField('for');
    this.appendDummyInput().appendField('seconds');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color_async);
    this.setTooltip(
      'Turn left with a certain speed for a chosen no. of seconds.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_turn_right_async'] = {
  init: function () {
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('Async turn right with speed');
    this.appendValueInput('TIME').setCheck('Number').appendField('for');
    this.appendDummyInput().appendField('seconds');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color_async);
    this.setTooltip(
      'Turn right with a certain speed for a chosen no. of seconds.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_sleep'] = {
  init: function () {
    this.appendValueInput('TIME').setCheck('Number').appendField('Wait for');
    this.appendDummyInput().appendField('seconds');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(ipylgbst_color_async);
    this.setTooltip('Wait for a certain amount of time.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_stop_motors_async'] = {
  init: function () {
    this.appendDummyInput().appendField('Async stop motors');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color_async);
    this.setTooltip('Stop all the motors.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_move_both_motors_time_async'] = {
  init: function () {
    this.appendValueInput('SPEED_A')
      .setCheck('Number')
      .appendField('Async move left motor with speed');
    this.appendValueInput('SPEED_B')
      .setCheck('Number')
      .appendField('and right motor with speed');
    this.appendValueInput('TIME').setCheck('Number').appendField('for');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color_async);
    this.setTooltip(
      'Move both motors with a certain speed for a chosen no. of seconds.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_move_both_motors_angle_async'] = {
  init: function () {
    this.appendValueInput('SPEED_A')
      .setCheck('Number')
      .appendField('Async move left motor with speed');
    this.appendValueInput('SPEED_B')
      .setCheck('Number')
      .appendField('and right motor with speed');
    this.appendValueInput('ANGLE').setCheck('Number').appendField('at');
    this.appendDummyInput().appendField('degrees angle');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color_async);
    this.setTooltip(
      'Move both motors with a certain speed for a chosen no. of degrees.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_move_motor_A_time_async'] = {
  init: function () {
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('Async move left motor with speed');
    this.appendValueInput('TIME').setCheck('Number').appendField('for');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color_async);
    this.setTooltip(
      'Move left motor with a certain speed for a chosen no. of seconds.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_move_motor_B_time_async'] = {
  init: function () {
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('Async move right motor with speed');
    this.appendValueInput('TIME').setCheck('Number').appendField('for');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color_async);
    this.setTooltip(
      'Move right motor with a certain speed for a chosen no. of seconds.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_move_motor_A_angle_async'] = {
  init: function () {
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('Async move left motor with speed');
    this.appendValueInput('ANGLE').setCheck('Number').appendField('at');
    this.appendDummyInput().appendField('degrees angle');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color_async);
    this.setTooltip(
      'Move left motor with a certain speed for a chosen no. of degrees.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_move_motor_B_angle_async'] = {
  init: function () {
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('Async move right motor with speed');
    this.appendValueInput('ANGLE').setCheck('Number').appendField('at');
    this.appendDummyInput().appendField('degreees angle');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color_async);
    this.setTooltip(
      'Move right motor with a certain speed for a chosen no. of degrees.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_get_color_async'] = {
  init: function () {
    this.appendDummyInput().appendField('Async get color');
    this.setOutput(true, 'String');
    this.setColour(vernie_color_async);
    this.setTooltip('Get the color the sensor is currently seeing.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_get_distance_async'] = {
  init: function () {
    this.appendDummyInput().appendField('Async get distance');
    this.setOutput(true, 'String');
    this.setColour(vernie_color_async);
    this.setTooltip('Get the distance the sensor is currently seeing.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_get_pitch_async'] = {
  init: function () {
    this.appendDummyInput().appendField('Async get pitch');
    this.setOutput(true, 'String');
    this.setColour(vernie_color_async);
    this.setTooltip('Get the pitch the sensor is currently seeing.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_get_roll_async'] = {
  init: function () {
    this.appendDummyInput().appendField('Async get roll');
    this.setOutput(true, 'String');
    this.setColour(vernie_color_async);
    this.setTooltip('Get the roll the sensor is currently seeing.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_move_head_left_async'] = {
  init: function () {
    this.appendDummyInput().appendField('Async move head to the left');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(vernie_color_async);
    this.setTooltip('Move the head left.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_move_head_right_async'] = {
  init: function () {
    this.appendDummyInput().appendField('Async move head to the right');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(vernie_color_async);
    this.setTooltip('Move the head right.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_shoot_arrow_async'] = {
  init: function () {
    this.appendDummyInput().appendField('Async shoot arrow');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(vernie_color_async);
    this.setTooltip('Shoot an arrow.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_set_led'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Change LED color to')
      .appendField(
        new Blockly.FieldDropdown([
          ['Red', 'LedColor.red'],
          ['Green', 'LedColor.green'],
          ['Blue', 'LedColor.blue'],
          ['Yellow', 'LedColor.yellow'],
          ['Cyan', 'LedColor.cyan'],
          ['Pink', 'LedColor.pink'],
          ['Purple', 'LedColor.purple'],
          ['Light Blue', 'LedColor.lightblue'],
          ['Orange', 'LedColor.orange']
        ]),
        'COLOR'
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color);
    this.setTooltip('Change the color of the LED.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_move_forward'] = {
  init: function () {
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('Move forward with speed');
    this.appendValueInput('TIME').setCheck('Number').appendField('for');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color);
    this.setTooltip(
      'Move forward with a certain speed for a chosen no. of seconds.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_move_bacwards'] = {
  init: function () {
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('Move backwards with speed');
    this.appendValueInput('TIME').setCheck('Number').appendField('for');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color);
    this.setTooltip(
      'Move bacwards with a certain speed for a chosen no. of seconds.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_turn_left'] = {
  init: function () {
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('Turn left with speed');
    this.appendValueInput('TIME').setCheck('Number').appendField('for');
    this.appendDummyInput().appendField('seconds');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color);
    this.setTooltip(
      'Turn left with a certain speed for a chosen no. of seconds.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_turn_right'] = {
  init: function () {
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('Turn right with speed');
    this.appendValueInput('TIME').setCheck('Number').appendField('for');
    this.appendDummyInput().appendField('seconds');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color);
    this.setTooltip(
      'Turn right with a certain speed for a chosen no. of seconds.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_stop_motors'] = {
  init: function () {
    this.appendDummyInput().appendField('Stop motors');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color);
    this.setTooltip('Stop all the motors.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_move_both_motors_time'] = {
  init: function () {
    this.appendValueInput('SPEED_A')
      .setCheck('Number')
      .appendField('Move left motor with speed');
    this.appendValueInput('SPEED_B')
      .setCheck('Number')
      .appendField('and right motor with speed');
    this.appendValueInput('TIME').setCheck('Number').appendField('for');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color);
    this.setTooltip(
      'Move both motors with a certain speed for a chosen no. of seconds.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_move_both_motors_angle'] = {
  init: function () {
    this.appendValueInput('SPEED_A')
      .setCheck('Number')
      .appendField('Move left motor with speed');
    this.appendValueInput('SPEED_B')
      .setCheck('Number')
      .appendField('and right motor with speed');
    this.appendValueInput('ANGLE').setCheck('Number').appendField('at');
    this.appendDummyInput().appendField('degrees angle');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color);
    this.setTooltip(
      'Move both motors with a certain speed for a chosen no. of degrees.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_move_motor_A_time'] = {
  init: function () {
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('Move left motor with speed');
    this.appendValueInput('TIME').setCheck('Number').appendField('for');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color);
    this.setTooltip(
      'Move left motor with a certain speed for a chosen no. of seconds.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_move_motor_B_time'] = {
  init: function () {
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('Move right motor with speed');
    this.appendValueInput('TIME').setCheck('Number').appendField('for');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color);
    this.setTooltip(
      'Move right motor with a certain speed for a chosen no. of seconds.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_move_motor_A_angle'] = {
  init: function () {
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('Move left motor with speed');
    this.appendValueInput('ANGLE').setCheck('Number').appendField('at');
    this.appendDummyInput().appendField('degrees angle');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color);
    this.setTooltip(
      'Move left motor with a certain speed for a chosen no. of degrees.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_move_motor_B_angle'] = {
  init: function () {
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('Move right motor with speed');
    this.appendValueInput('ANGLE').setCheck('Number').appendField('at');
    this.appendDummyInput().appendField('degreees angle');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ipylgbst_color);
    this.setTooltip(
      'Move right motor with a certain speed for a chosen no. of degrees.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_get_color'] = {
  init: function () {
    this.appendDummyInput().appendField('Get color');
    this.setOutput(true, 'String');
    this.setColour(vernie_color);
    this.setTooltip('Get the color the sensor is currently seeing.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_get_distance'] = {
  init: function () {
    this.appendDummyInput().appendField('Get distance');
    this.setOutput(true, 'String');
    this.setColour(vernie_color);
    this.setTooltip('Get the distance the sensor is currently seeing.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_get_pitch'] = {
  init: function () {
    this.appendDummyInput().appendField('Get pitch');
    this.setOutput(true, 'String');
    this.setColour(vernie_color);
    this.setTooltip('Get the pitch the sensor is currently seeing.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_get_roll'] = {
  init: function () {
    this.appendDummyInput().appendField('Get roll');
    this.setOutput(true, 'String');
    this.setColour(vernie_color);
    this.setTooltip('Get the roll the sensor is currently seeing.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_move_head_left'] = {
  init: function () {
    this.appendDummyInput().appendField('Move head to the left');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(vernie_color);
    this.setTooltip('Move the head left.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_move_head_right'] = {
  init: function () {
    this.appendDummyInput().appendField('Move head to the right');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(vernie_color);
    this.setTooltip('Move the head right.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_shoot_arrow'] = {
  init: function () {
    this.appendDummyInput().appendField('Shoot arrow');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(vernie_color);
    this.setTooltip('Shoot an arrow.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipylgbst_coroutine_async'] = {
  init: function () {
    // this.appendValueInput('NAME')
    //   .setCheck('String')
    this.appendDummyInput().appendField('Run task concurrently');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendStatementInput('DO');
    this.setColour(ipylgbst_color_async);
    this.setTooltip(
      'Create a task that will be run in parallel with other tasks. E.g. changing the color of the LED in a task, while the robot is being moved in another task.'
    );
    this.setHelpUrl('');
  }
};

/*
 * Generators
 */
var no = 0;

BlocklyPy.forBlock['ipylgbst_coroutine_async'] = function (block) {
  // var text_name = BlocklyPy.valueToCode(block, 'NAME', BlocklyPy.ORDER_ATOMIC);
  if (no == n_lanes_global) no = 0;
  var text_name = 'task_' + no;
  let branch = BlocklyPy.statementToCode(block, 'DO');

  var code =
    'async def ' +
    text_name +
    '(lane):\n' +
    branch +
    'boost.run_async_program(' +
    text_name +
    ', lane = ' +
    no +
    ')\n\n';
  no++;
  return code;
};

var n_lanes_global = 0;

BlocklyPy.forBlock['ipylgbst_connect_lane'] = function (block) {
  var n_lanes = BlocklyPy.valueToCode(block, 'NLANES', BlocklyPy.ORDER_ATOMIC);
  n_lanes_global = n_lanes;

  let branch = BlocklyPy.statementToCode(block, 'DO');

  // var code = 'with boost_connect(' + no_lanes +') as boost:\n' + branch;
  var code = 'with boost_connect(' + n_lanes + ') as boost:\n' + branch + '\n';
  // 'boost = LegoBoostWidget()\nboost.connect()\n\nasync def main(lane):\n' + branch + '\nboost.run(main)\n';
  return code;
};

Blockly.Blocks['ipylgbst_connect_lane'].toplevel_init = `import asyncio    
from ipylgbst import LegoBoostWidget, LedColor, Port, Sensor

class boost_connect():
    def __init__(self, n_lanes):
        self.boost = LegoBoostWidget(n_lanes = n_lanes)
    def __enter__(self):
        self.boost.connect()
        return self.boost
    def __exit__(self, exception_type, exception_value, traceback):
        print('Disconnecting from Lego Boost')
      # self.boost.disconnect()

`;

BlocklyPy.forBlock['ipylgbst_connect'] = function (block) {
  let branch = BlocklyPy.statementToCode(block, 'DO');

  // var code = 'with boost_connect(' + no_lanes +') as boost:\n' + branch;
  var code =
    'with boost_connect(1) as boost:\n    async def main(lane, log):\n' +
    branch +
    '\n    boost.run_async_program(main)\n';
  // 'boost = LegoBoostWidget()\nboost.connect()\n\nasync def main(lane):\n' + branch + '\nboost.run(main)\n';
  return code;
};

Blockly.Blocks['ipylgbst_connect'].toplevel_init = `import asyncio    
from ipylgbst import LegoBoostWidget, LedColor, Port, Sensor

class boost_connect():
    def __init__(self, n_lanes):
        self.boost = LegoBoostWidget(n_lanes = n_lanes)
    def __enter__(self):
        self.boost.connect()
        return self.boost
    def __exit__(self, exception_type, exception_value, traceback):
        print('Disconnecting from Lego Boost')
      # self.boost.disconnect()

`;

BlocklyPy.forBlock['ipylgbst_set_led_async'] = function (block) {
  var dropdown_color = block.getFieldValue('COLOR');
  var code = '        await lane.set_led_async(' + dropdown_color + ')\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_move_forward_async'] = function (block) {
  var value_time = BlocklyPy.valueToCode(block, 'TIME', BlocklyPy.ORDER_ATOMIC);
  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );
  var code =
    '        await lane.motor_time_multi_async(seconds = ' +
    value_time +
    ', power_a = ' +
    value_speed +
    ', power_b =' +
    value_speed +
    ')\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_move_bacwards_async'] = function (block) {
  var value_time = BlocklyPy.valueToCode(block, 'TIME', BlocklyPy.ORDER_ATOMIC);
  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );
  var code =
    '        await lane.motor_time_multi_async( seconds = ' +
    value_time +
    ', power_a = -' +
    value_speed +
    ', power_b = -' +
    value_speed +
    ')\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_sleep'] = function (block) {
  var value_time = BlocklyPy.valueToCode(block, 'TIME', BlocklyPy.ORDER_ATOMIC);
  var code = '        await asyncio.sleep(' + value_time + ')\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_turn_left_async'] = function (block) {
  var value_time = BlocklyPy.valueToCode(block, 'TIME', BlocklyPy.ORDER_ATOMIC);
  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );
  var code =
    '        await lane.motor_time_multi_async( seconds = ' +
    value_time +
    ', power_a = -' +
    value_speed +
    ', power_b = ' +
    value_speed +
    ')\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_turn_right_async'] = function (block) {
  var value_time = BlocklyPy.valueToCode(block, 'TIME', BlocklyPy.ORDER_ATOMIC);
  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );
  var code =
    '        await lane.motor_time_multi_async( seconds = ' +
    value_time +
    ', power_a = ' +
    value_speed +
    ', power_b = -' +
    value_speed +
    ')\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_stop_motors_async'] = function (block) {
  var code =
    '        await lane.motor_time_multi_async( seconds = 0, power_a = 0, power_b = 0)\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_move_both_motors_time_async'] = function (block) {
  var value_speed_a = BlocklyPy.valueToCode(
    block,
    'SPEED_A',
    BlocklyPy.ORDER_ATOMIC
  );
  var value_speed_b = BlocklyPy.valueToCode(
    block,
    'SPEED_B',
    BlocklyPy.ORDER_ATOMIC
  );
  var value_time = BlocklyPy.valueToCode(block, 'TIME', BlocklyPy.ORDER_ATOMIC);
  var code =
    '        await lane.motor_time_multi_async( seconds = ' +
    value_time +
    ', power_a = ' +
    value_speed_a +
    ', power_b = ' +
    value_speed_b +
    ')\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_move_both_motors_angle_async'] = function (block) {
  var value_speed_a = BlocklyPy.valueToCode(
    block,
    'SPEED_A',
    BlocklyPy.ORDER_ATOMIC
  );
  var value_speed_b = BlocklyPy.valueToCode(
    block,
    'SPEED_B',
    BlocklyPy.ORDER_ATOMIC
  );
  var value_angle = BlocklyPy.valueToCode(
    block,
    'ANGLE',
    BlocklyPy.ORDER_ATOMIC
  );
  var code =
    '        await lane.motor_angle_multi_async( angle = ' +
    value_angle +
    ', power_a = ' +
    value_speed_a +
    ', power_b = ' +
    value_speed_b +
    ')\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_move_motor_A_time_async'] = function (block) {
  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );
  var value_time = BlocklyPy.valueToCode(block, 'TIME', BlocklyPy.ORDER_ATOMIC);
  var code =
    '        await lane.motor_time_async("A", seconds = ' +
    value_time +
    ', power = ' +
    value_speed +
    ', port = Port.A)\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_move_motor_B_time_async'] = function (block) {
  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );
  var value_time = BlocklyPy.valueToCode(block, 'TIME', BlocklyPy.ORDER_ATOMIC);
  var code =
    '        await lane.motor_time_async("B", seconds = ' +
    value_time +
    ', power = ' +
    value_speed +
    ', port = Port.B)\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_move_motor_A_angle_async'] = function (block) {
  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );
  var value_angle = BlocklyPy.valueToCode(
    block,
    'ANGLE',
    BlocklyPy.ORDER_ATOMIC
  );
  var code =
    '        await lane.motor_angle_async("A", angle = ' +
    value_angle +
    ', power = ' +
    value_speed +
    ', port = Port.A)\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_move_motor_B_angle_async'] = function (block) {
  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );
  var value_angle = BlocklyPy.valueToCode(
    block,
    'ANGLE',
    BlocklyPy.ORDER_ATOMIC
  );
  var code =
    '        await lane.motor_angle_async("B", angle = ' +
    value_angle +
    ', power = ' +
    value_speed +
    ', port = Port.B)\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_move_head_left_async'] = function (block) {
  var value_angle = BlocklyPy.valueToCode(
    block,
    'ANGLE',
    BlocklyPy.ORDER_ATOMIC
  );
  var code =
    '        await lane.motor_angle_async("D", angle = 50, power = 10)\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_move_head_right_async'] = function (block) {
  var value_angle = BlocklyPy.valueToCode(
    block,
    'ANGLE',
    BlocklyPy.ORDER_ATOMIC
  );
  var code =
    '        await lane.motor_angle_async("D", angle = 50, power = -10)\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_get_color_async'] = function (block) {
  var code = '        await lane.get_color_async()\n';
  return [code, BlocklyPy.ORDER_NONE];
};

BlocklyPy.forBlock['ipylgbst_get_distance_async'] = function (block) {
  var code = '        await lane.get_distance_async()\n';
  return [code, BlocklyPy.ORDER_NONE];
};

BlocklyPy.forBlock['ipylgbst_get_pitch_async'] = function (block) {
  var code = '        await lane.get_pitch_async()\n';
  return [code, BlocklyPy.ORDER_NONE];
};

BlocklyPy.forBlock['ipylgbst_get_roll_async'] = function (block) {
  var code = '        await lane.get_roll_async()\n';
  return [code, BlocklyPy.ORDER_NONE];
};

BlocklyPy.forBlock['ipylgbst_shoot_arrow_async'] = function (block) {
  var code =
    '        await lane.motor_angle_async("D", angle = 120, power = 120)\n        await lane.motor_angle("D", angle = 90, power = -80)\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_set_led'] = function (block) {
  var dropdown_color = block.getFieldValue('COLOR');
  var code = '        lane.set_led(' + dropdown_color + ')\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_move_forward'] = function (block) {
  var value_time = BlocklyPy.valueToCode(block, 'TIME', BlocklyPy.ORDER_ATOMIC);
  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );
  var code =
    '        lane.motor_time_multi(seconds = ' +
    value_time +
    ', power_a = ' +
    value_speed +
    ', power_b =' +
    value_speed +
    ')\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_move_bacwards'] = function (block) {
  var value_time = BlocklyPy.valueToCode(block, 'TIME', BlocklyPy.ORDER_ATOMIC);
  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );
  var code =
    '        lane.motor_time_multi( seconds = ' +
    value_time +
    ', power_a = -' +
    value_speed +
    ', power_b = -' +
    value_speed +
    ')\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_turn_left'] = function (block) {
  var value_time = BlocklyPy.valueToCode(block, 'TIME', BlocklyPy.ORDER_ATOMIC);
  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );
  var code =
    '        lane.motor_time_multi( seconds = ' +
    value_time +
    ', power_a = -' +
    value_speed +
    ', power_b = ' +
    value_speed +
    ')\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_turn_right'] = function (block) {
  var value_time = BlocklyPy.valueToCode(block, 'TIME', BlocklyPy.ORDER_ATOMIC);
  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );
  var code =
    '        lane.motor_time_multi( seconds = ' +
    value_time +
    ', power_a = ' +
    value_speed +
    ', power_b = -' +
    value_speed +
    ')\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_stop_motors'] = function (block) {
  var code =
    '        lane.motor_time_multi( seconds = 0, power_a = 0, power_b = 0)\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_move_both_motors_time'] = function (block) {
  var value_speed_a = BlocklyPy.valueToCode(
    block,
    'SPEED_A',
    BlocklyPy.ORDER_ATOMIC
  );
  var value_speed_b = BlocklyPy.valueToCode(
    block,
    'SPEED_B',
    BlocklyPy.ORDER_ATOMIC
  );
  var value_time = BlocklyPy.valueToCode(block, 'TIME', BlocklyPy.ORDER_ATOMIC);
  var code =
    '        lane.motor_time_multi( seconds = ' +
    value_time +
    ', power_a = ' +
    value_speed_a +
    ', power_b = ' +
    value_speed_b +
    ')\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_move_both_motors_angle'] = function (block) {
  var value_speed_a = BlocklyPy.valueToCode(
    block,
    'SPEED_A',
    BlocklyPy.ORDER_ATOMIC
  );
  var value_speed_b = BlocklyPy.valueToCode(
    block,
    'SPEED_B',
    BlocklyPy.ORDER_ATOMIC
  );
  var value_angle = BlocklyPy.valueToCode(
    block,
    'ANGLE',
    BlocklyPy.ORDER_ATOMIC
  );
  var code =
    '        lane.motor_angle_multi( angle = ' +
    value_angle +
    ', power_a = ' +
    value_speed_a +
    ', power_b = ' +
    value_speed_b +
    ')\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_move_motor_A_time'] = function (block) {
  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );
  var value_time = BlocklyPy.valueToCode(block, 'TIME', BlocklyPy.ORDER_ATOMIC);
  var code =
    '        lane.motor_time("A", seconds = ' +
    value_time +
    ', power = ' +
    value_speed +
    ', port = Port.A)\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_move_motor_B_time'] = function (block) {
  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );
  var value_time = BlocklyPy.valueToCode(block, 'TIME', BlocklyPy.ORDER_ATOMIC);
  var code =
    '        lane.motor_time("B", seconds = ' +
    value_time +
    ', power = ' +
    value_speed +
    ', port = Port.B)\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_move_motor_A_angle'] = function (block) {
  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );
  var value_angle = BlocklyPy.valueToCode(
    block,
    'ANGLE',
    BlocklyPy.ORDER_ATOMIC
  );
  var code =
    '        lane.motor_angle("A", angle = ' +
    value_angle +
    ', power = ' +
    value_speed +
    ', port = Port.A)\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_move_motor_B_angle'] = function (block) {
  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );
  var value_angle = BlocklyPy.valueToCode(
    block,
    'ANGLE',
    BlocklyPy.ORDER_ATOMIC
  );
  var code =
    '        lane.motor_angle("B", angle = ' +
    value_angle +
    ', power = ' +
    value_speed +
    ', port = Port.B)\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_move_head_left'] = function (block) {
  var value_angle = BlocklyPy.valueToCode(
    block,
    'ANGLE',
    BlocklyPy.ORDER_ATOMIC
  );
  var code = '        lane.motor_angle("D", angle = 50, power = 10)\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_move_head_right'] = function (block) {
  var value_angle = BlocklyPy.valueToCode(
    block,
    'ANGLE',
    BlocklyPy.ORDER_ATOMIC
  );
  var code = '        lane.motor_angle("D", angle = 50, power = -10)\n';
  return code;
};

BlocklyPy.forBlock['ipylgbst_get_color'] = function (block) {
  var code = '        lane.get_color()\n';
  return [code, BlocklyPy.ORDER_NONE];
};

BlocklyPy.forBlock['ipylgbst_get_distance'] = function (block) {
  var code = '        lane.get_distance()\n';
  return [code, BlocklyPy.ORDER_NONE];
};

BlocklyPy.forBlock['ipylgbst_get_pitch_async'] = function (block) {
  var code = '        lane.get_pitch()\n';
  return [code, BlocklyPy.ORDER_NONE];
};

BlocklyPy.forBlock['ipylgbst_get_roll'] = function (block) {
  var code = '        lane.get_roll()\n';
  return [code, BlocklyPy.ORDER_NONE];
};

BlocklyPy.forBlock['ipylgbst_shoot_arrow'] = function (block) {
  var code =
    '        lane.motor_angle("D", angle = 120, power = 120)\n        await lane.motor_angle("D", angle = 90, power = -80)\n';
  return code;
};

// Creating a toolbox containing all the main blocks
// and adding the lego boost catgory.
const TOOLBOX = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Logic',
      colour: '210',
      contents: [
        {
          kind: 'block',
          type: 'controls_if'
        },
        {
          kind: 'BLOCK',
          type: 'logic_compare'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_operation"></block>',
          type: 'logic_operation'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_negate"></block>',
          type: 'logic_negate'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_boolean"></block>',
          type: 'logic_boolean'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_null"></block>',
          type: 'logic_null'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_ternary"></block>',
          type: 'logic_ternary'
        }
      ]
    },
    {
      kind: 'category',
      name: 'Loops',
      colour: '120',
      contents: [
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="controls_repeat_ext">\n          <value name="TIMES">\n            <shadow type="math_number">\n              <field name="NUM">10</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'controls_repeat_ext'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="controls_whileUntil"></block>',
          type: 'controls_whileUntil'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="controls_for">\n          <value name="FROM">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n          <value name="TO">\n            <shadow type="math_number">\n              <field name="NUM">10</field>\n            </shadow>\n          </value>\n          <value name="BY">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'controls_for'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="controls_forEach"></block>',
          type: 'controls_forEach'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="controls_flow_statements"></block>',
          type: 'controls_flow_statements'
        }
      ]
    },
    {
      kind: 'CATEGORY',
      name: 'Math',
      colour: '230',
      contents: [
        {
          kind: 'BLOCK',
          blockxml: '<block type="math_number"></block>',
          type: 'math_number'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_arithmetic">\n          <value name="A">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n          <value name="B">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_arithmetic'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_single">\n          <value name="NUM">\n            <shadow type="math_number">\n              <field name="NUM">9</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_single'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_trig">\n          <value name="NUM">\n            <shadow type="math_number">\n              <field name="NUM">45</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_trig'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="math_constant"></block>',
          type: 'math_constant'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_number_property">\n          <value name="NUMBER_TO_CHECK">\n            <shadow type="math_number">\n              <field name="NUM">0</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_number_property'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_change">\n          <value name="DELTA">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_change'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_round">\n          <value name="NUM">\n            <shadow type="math_number">\n              <field name="NUM">3.1</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_round'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="math_on_list"></block>',
          type: 'math_on_list'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_modulo">\n          <value name="DIVIDEND">\n            <shadow type="math_number">\n              <field name="NUM">64</field>\n            </shadow>\n          </value>\n          <value name="DIVISOR">\n            <shadow type="math_number">\n              <field name="NUM">10</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_modulo'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_constrain">\n          <value name="VALUE">\n            <shadow type="math_number">\n              <field name="NUM">50</field>\n            </shadow>\n          </value>\n          <value name="LOW">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n          <value name="HIGH">\n            <shadow type="math_number">\n              <field name="NUM">100</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_constrain'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_random_int">\n          <value name="FROM">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n          <value name="TO">\n            <shadow type="math_number">\n              <field name="NUM">100</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_random_int'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="math_random_float"></block>',
          type: 'math_random_float'
        }
      ]
    },
    {
      kind: 'CATEGORY',
      name: 'Text',
      colour: '160',
      contents: [
        {
          kind: 'BLOCK',
          blockxml: '<block type="text"></block>',
          type: 'text'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="text_join"></block>',
          type: 'text_join'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_append">\n          <value name="TEXT">\n            <shadow type="text"></shadow>\n          </value>\n        </block>',
          type: 'text_append'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_length">\n          <value name="VALUE">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_length'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_isEmpty">\n          <value name="VALUE">\n            <shadow type="text">\n              <field name="TEXT"></field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_isEmpty'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_indexOf">\n          <value name="VALUE">\n            <block type="variables_get">\n              <field name="VAR">text</field>\n            </block>\n          </value>\n          <value name="FIND">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_indexOf'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_charAt">\n          <value name="VALUE">\n            <block type="variables_get">\n              <field name="VAR">text</field>\n            </block>\n          </value>\n        </block>',
          type: 'text_charAt'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_getSubstring">\n          <value name="STRING">\n            <block type="variables_get">\n              <field name="VAR">text</field>\n            </block>\n          </value>\n        </block>',
          type: 'text_getSubstring'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_changeCase">\n          <value name="TEXT">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_changeCase'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_trim">\n          <value name="TEXT">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_trim'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_print">\n          <value name="TEXT">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_print'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_prompt_ext">\n          <value name="TEXT">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_prompt_ext'
        }
      ]
    },
    {
      kind: 'CATEGORY',
      name: 'Lists',
      colour: '260',
      contents: [
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_create_with">\n          <mutation items="0"></mutation>\n        </block>',
          type: 'lists_create_with'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="lists_create_with"></block>',
          type: 'lists_create_with'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_repeat">\n          <value name="NUM">\n            <shadow type="math_number">\n              <field name="NUM">5</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'lists_repeat'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="lists_length"></block>',
          type: 'lists_length'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="lists_isEmpty"></block>',
          type: 'lists_isEmpty'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_indexOf">\n          <value name="VALUE">\n            <block type="variables_get">\n              <field name="VAR">list</field>\n            </block>\n          </value>\n        </block>',
          type: 'lists_indexOf'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_getIndex">\n          <value name="VALUE">\n            <block type="variables_get">\n              <field name="VAR">list</field>\n            </block>\n          </value>\n        </block>',
          type: 'lists_getIndex'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_setIndex">\n          <value name="LIST">\n            <block type="variables_get">\n              <field name="VAR">list</field>\n            </block>\n          </value>\n        </block>',
          type: 'lists_setIndex'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_getSublist">\n          <value name="LIST">\n            <block type="variables_get">\n              <field name="VAR">list</field>\n            </block>\n          </value>\n        </block>',
          type: 'lists_getSublist'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_split">\n          <value name="DELIM">\n            <shadow type="text">\n              <field name="TEXT">,</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'lists_split'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="lists_sort"></block>',
          type: 'lists_sort'
        }
      ]
    },
    {
      kind: 'CATEGORY',
      name: 'Color',
      colour: '20',
      contents: [
        {
          kind: 'BLOCK',
          blockxml: '<block type="colour_picker"></block>',
          type: 'colour_picker'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="colour_random"></block>',
          type: 'colour_random'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="colour_rgb">\n          <value name="RED">\n            <shadow type="math_number">\n              <field name="NUM">100</field>\n            </shadow>\n          </value>\n          <value name="GREEN">\n            <shadow type="math_number">\n              <field name="NUM">50</field>\n            </shadow>\n          </value>\n          <value name="BLUE">\n            <shadow type="math_number">\n              <field name="NUM">0</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'colour_rgb'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="colour_blend">\n          <value name="COLOUR1">\n            <shadow type="colour_picker">\n              <field name="COLOUR">#ff0000</field>\n            </shadow>\n          </value>\n          <value name="COLOUR2">\n            <shadow type="colour_picker">\n              <field name="COLOUR">#3333ff</field>\n            </shadow>\n          </value>\n          <value name="RATIO">\n            <shadow type="math_number">\n              <field name="NUM">0.5</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'colour_blend'
        }
      ]
    },
    {
      kind: 'SEP'
    },
    {
      kind: 'CATEGORY',
      colour: '330',
      custom: 'VARIABLE',
      name: 'Variables'
    },
    {
      kind: 'CATEGORY',
      colour: '290',
      custom: 'PROCEDURE',
      name: 'Functions'
    },
    {
      kind: 'SEP'
    },
    {
      kind: 'CATEGORY',
      colour: ipylgbst_color,
      name: 'ipylgbst',
      contents: [
        {
          kind: 'BLOCK',
          type: 'ipylgbst_connect'
        },
        // {
        //   kind: 'BLOCK',
        //   type: 'ipylgbst_connect_lane'
        // },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_sleep'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_set_led'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_move_forward'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_move_bacwards'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_turn_left'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_turn_right'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_stop_motors'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_move_both_motors_time'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_move_both_motors_angle'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_move_motor_A_time'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_move_motor_B_time'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_move_motor_A_angle'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_move_motor_B_angle'
        }
      ]
    },
    {
      kind: 'CATEGORY',
      colour: vernie_color,
      name: 'Vernie',
      contents: [
        {
          kind: 'BLOCK',
          type: 'ipylgbst_move_head_right'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_move_head_left'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_shoot_arrow'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_get_color'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_get_distance'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_get_roll'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_get_pitch'
        }
      ]
    }
  ]
};

const TOOLBOX_ASYNC = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Logic',
      colour: '210',
      contents: [
        {
          kind: 'block',
          type: 'controls_if'
        },
        {
          kind: 'BLOCK',
          type: 'logic_compare'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_operation"></block>',
          type: 'logic_operation'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_negate"></block>',
          type: 'logic_negate'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_boolean"></block>',
          type: 'logic_boolean'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_null"></block>',
          type: 'logic_null'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_ternary"></block>',
          type: 'logic_ternary'
        }
      ]
    },
    {
      kind: 'category',
      name: 'Loops',
      colour: '120',
      contents: [
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="controls_repeat_ext">\n          <value name="TIMES">\n            <shadow type="math_number">\n              <field name="NUM">10</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'controls_repeat_ext'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="controls_whileUntil"></block>',
          type: 'controls_whileUntil'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="controls_for">\n          <value name="FROM">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n          <value name="TO">\n            <shadow type="math_number">\n              <field name="NUM">10</field>\n            </shadow>\n          </value>\n          <value name="BY">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'controls_for'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="controls_forEach"></block>',
          type: 'controls_forEach'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="controls_flow_statements"></block>',
          type: 'controls_flow_statements'
        }
      ]
    },
    {
      kind: 'CATEGORY',
      name: 'Math',
      colour: '230',
      contents: [
        {
          kind: 'BLOCK',
          blockxml: '<block type="math_number"></block>',
          type: 'math_number'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_arithmetic">\n          <value name="A">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n          <value name="B">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_arithmetic'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_single">\n          <value name="NUM">\n            <shadow type="math_number">\n              <field name="NUM">9</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_single'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_trig">\n          <value name="NUM">\n            <shadow type="math_number">\n              <field name="NUM">45</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_trig'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="math_constant"></block>',
          type: 'math_constant'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_number_property">\n          <value name="NUMBER_TO_CHECK">\n            <shadow type="math_number">\n              <field name="NUM">0</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_number_property'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_change">\n          <value name="DELTA">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_change'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_round">\n          <value name="NUM">\n            <shadow type="math_number">\n              <field name="NUM">3.1</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_round'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="math_on_list"></block>',
          type: 'math_on_list'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_modulo">\n          <value name="DIVIDEND">\n            <shadow type="math_number">\n              <field name="NUM">64</field>\n            </shadow>\n          </value>\n          <value name="DIVISOR">\n            <shadow type="math_number">\n              <field name="NUM">10</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_modulo'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_constrain">\n          <value name="VALUE">\n            <shadow type="math_number">\n              <field name="NUM">50</field>\n            </shadow>\n          </value>\n          <value name="LOW">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n          <value name="HIGH">\n            <shadow type="math_number">\n              <field name="NUM">100</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_constrain'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_random_int">\n          <value name="FROM">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n          <value name="TO">\n            <shadow type="math_number">\n              <field name="NUM">100</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_random_int'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="math_random_float"></block>',
          type: 'math_random_float'
        }
      ]
    },
    {
      kind: 'CATEGORY',
      name: 'Text',
      colour: '160',
      contents: [
        {
          kind: 'BLOCK',
          blockxml: '<block type="text"></block>',
          type: 'text'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="text_join"></block>',
          type: 'text_join'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_append">\n          <value name="TEXT">\n            <shadow type="text"></shadow>\n          </value>\n        </block>',
          type: 'text_append'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_length">\n          <value name="VALUE">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_length'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_isEmpty">\n          <value name="VALUE">\n            <shadow type="text">\n              <field name="TEXT"></field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_isEmpty'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_indexOf">\n          <value name="VALUE">\n            <block type="variables_get">\n              <field name="VAR">text</field>\n            </block>\n          </value>\n          <value name="FIND">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_indexOf'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_charAt">\n          <value name="VALUE">\n            <block type="variables_get">\n              <field name="VAR">text</field>\n            </block>\n          </value>\n        </block>',
          type: 'text_charAt'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_getSubstring">\n          <value name="STRING">\n            <block type="variables_get">\n              <field name="VAR">text</field>\n            </block>\n          </value>\n        </block>',
          type: 'text_getSubstring'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_changeCase">\n          <value name="TEXT">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_changeCase'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_trim">\n          <value name="TEXT">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_trim'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_print">\n          <value name="TEXT">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_print'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_prompt_ext">\n          <value name="TEXT">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_prompt_ext'
        }
      ]
    },
    {
      kind: 'CATEGORY',
      name: 'Lists',
      colour: '260',
      contents: [
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_create_with">\n          <mutation items="0"></mutation>\n        </block>',
          type: 'lists_create_with'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="lists_create_with"></block>',
          type: 'lists_create_with'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_repeat">\n          <value name="NUM">\n            <shadow type="math_number">\n              <field name="NUM">5</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'lists_repeat'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="lists_length"></block>',
          type: 'lists_length'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="lists_isEmpty"></block>',
          type: 'lists_isEmpty'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_indexOf">\n          <value name="VALUE">\n            <block type="variables_get">\n              <field name="VAR">list</field>\n            </block>\n          </value>\n        </block>',
          type: 'lists_indexOf'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_getIndex">\n          <value name="VALUE">\n            <block type="variables_get">\n              <field name="VAR">list</field>\n            </block>\n          </value>\n        </block>',
          type: 'lists_getIndex'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_setIndex">\n          <value name="LIST">\n            <block type="variables_get">\n              <field name="VAR">list</field>\n            </block>\n          </value>\n        </block>',
          type: 'lists_setIndex'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_getSublist">\n          <value name="LIST">\n            <block type="variables_get">\n              <field name="VAR">list</field>\n            </block>\n          </value>\n        </block>',
          type: 'lists_getSublist'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_split">\n          <value name="DELIM">\n            <shadow type="text">\n              <field name="TEXT">,</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'lists_split'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="lists_sort"></block>',
          type: 'lists_sort'
        }
      ]
    },
    {
      kind: 'CATEGORY',
      name: 'Color',
      colour: '20',
      contents: [
        {
          kind: 'BLOCK',
          blockxml: '<block type="colour_picker"></block>',
          type: 'colour_picker'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="colour_random"></block>',
          type: 'colour_random'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="colour_rgb">\n          <value name="RED">\n            <shadow type="math_number">\n              <field name="NUM">100</field>\n            </shadow>\n          </value>\n          <value name="GREEN">\n            <shadow type="math_number">\n              <field name="NUM">50</field>\n            </shadow>\n          </value>\n          <value name="BLUE">\n            <shadow type="math_number">\n              <field name="NUM">0</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'colour_rgb'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="colour_blend">\n          <value name="COLOUR1">\n            <shadow type="colour_picker">\n              <field name="COLOUR">#ff0000</field>\n            </shadow>\n          </value>\n          <value name="COLOUR2">\n            <shadow type="colour_picker">\n              <field name="COLOUR">#3333ff</field>\n            </shadow>\n          </value>\n          <value name="RATIO">\n            <shadow type="math_number">\n              <field name="NUM">0.5</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'colour_blend'
        }
      ]
    },
    {
      kind: 'SEP'
    },
    {
      kind: 'CATEGORY',
      colour: '330',
      custom: 'VARIABLE',
      name: 'Variables'
    },
    {
      kind: 'CATEGORY',
      colour: '290',
      custom: 'PROCEDURE',
      name: 'Functions'
    },
    {
      kind: 'SEP'
    },
    {
      kind: 'CATEGORY',
      colour: ipylgbst_color_async,
      name: 'ipylgbst async',
      contents: [
        // {
        //   kind: 'BLOCK',
        //   type: 'ipylgbst_connect'
        // },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_connect_lane'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_coroutine_async'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_sleep'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_set_led_async'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_move_forward_async'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_move_bacwards_async'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_turn_left_async'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_turn_right_async'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_stop_motors_async'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_move_both_motors_time_async'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_move_both_motors_angle_async'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_move_motor_A_time_async'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_move_motor_B_time_async'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_move_motor_A_angle_async'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_move_motor_B_angle_async'
        }
      ]
    },
    {
      kind: 'CATEGORY',
      colour: vernie_color_async,
      name: 'Vernie async',
      contents: [
        {
          kind: 'BLOCK',
          type: 'ipylgbst_move_head_right_async'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_move_head_left_async'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_shoot_arrow_async'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_get_color_async'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_get_distance_async'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_get_roll_async'
        },
        {
          kind: 'BLOCK',
          type: 'ipylgbst_get_pitch_async'
        }
      ]
    }
  ]
};

const BlocklyIpylgbst = {
  Blocks: Blockly.Blocks,
  Generator: BlocklyPy,
  Toolbox: TOOLBOX,
  Toolbox_async: TOOLBOX_ASYNC
};

export default BlocklyIpylgbst;

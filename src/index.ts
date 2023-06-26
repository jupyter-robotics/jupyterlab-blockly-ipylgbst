import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IBlocklyRegistry } from 'jupyterlab-blockly';

import BlocklyIpylgbst from './ipylgbst_blocks_and_toolbox';

/**
 * Initialization data for the jupyterlab-blockly-ipylgbst extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-blockly-ipylgbst:plugin',
  autoStart: true,
  requires: [IBlocklyRegistry],
  activate: (app: JupyterFrontEnd, blockly: IBlocklyRegistry) => {
    console.log(
      'JupyterLab extension jupyterlab-blockly-ipylgbst is activated!'
    );

    blockly.registerToolbox('ipylgbst', BlocklyIpylgbst.Toolbox);
    blockly.registerToolbox('ipylgbst async', BlocklyIpylgbst.Toolbox_async);
  }
};

export default plugin;

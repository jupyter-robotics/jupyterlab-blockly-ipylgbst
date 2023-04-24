import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IBlocklyRegistry } from 'jupyterlab-blockly';

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
  }
};

export default plugin;

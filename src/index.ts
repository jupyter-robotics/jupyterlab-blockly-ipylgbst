import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-blockly-ipylgbst extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-blockly-ipylgbst:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log(
      'JupyterLab extension jupyterlab-blockly-ipylgbst is activated!'
    );
  }
};

export default plugin;

# jupyterlab-blockly-ipylgbst

[![Github Actions Status](https://github.com/jupyter-robotics/jupyterlab-blockly-ipylgbst/workflows/Build/badge.svg)](https://github.com/jupyter-robotics/jupyterlab-blockly-ipylgbst/actions/workflows/build.yml)[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/jupyter-robotics/jupyterlab-blockly-ipylgbst/main?urlpath=lab/tree/examples/demo.jpblockly)
Blockly extension for JupyterLab to control the Lego Boost, using the ipylgbst library.

## Blockly

Blockly is a library from Google for building beginner-friendly block-based programming languages.

Docs: https://developers.google.com/blockly/guides/overview
Repo: https://github.com/google/blockly

## Lego Boost Robotics Set

A Lego creative toolbox which offers an easy way to learn the basics of coding, engineering and robotics.

Link: https://www.lego.com/en-de/product/boost-creative-toolbox-17101

## Requirements

- JupyterLab >= 4.0.0

## Install

To install the extension, execute:

```bash
pip install jupyterlab-blockly-ipylgbst
```

## Uninstall

To remove the extension, execute:

```bash
pip uninstall jupyterlab-blockly-ipylgbst
```

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
micromamba create -n blockly-ipylgbst -c conda-forge python nodejs jupyterlab jupyterlab-language-pack-es-ES jupyterlab-language-pack-fr-FR ipykernel xeus-python xeus-lua
micromamba activate blockly-ipylgbst
# Clone the repo to your local environment
# Change directory to the jupyterlab-blockly-ipylgbst directory
# Install package in development mode
pip install -e "."
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Development uninstall

```bash
pip uninstall jupyterlab-blockly-ipylgbst
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `jupyterlab-blockly-ipylgbst` within that folder.

### Packaging the extension

See [RELEASE](RELEASE.md)

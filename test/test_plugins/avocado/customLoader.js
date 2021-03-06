const PluginLoaderBase = require('../../../lib/PluginLoaderBase');

module.exports = class AvocadoLoader extends PluginLoaderBase {
  /**
   * @inheritDoc
   */
  exportSync(options) {
    return {
      sugarLevel: this.descriptor.sugarLevel,
      color: options.colorType === 'hex' ? '#33AA33' : 'green',
      size: 'medium',
      ignored: 'Look at me!',
    };
  }
};

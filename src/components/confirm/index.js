/**
 * User: yxp-qingcheng
 * Date: 16/9/21
 * Time: 下午1:16
 */

import confirmOptions from './confirm.vue'

export default {
  /**
   * @function install
   * @param {Vue} Vue
   * @param {Object} [options={}] options globally
   * @param {string} options.title The default title of the confirm
   * @param {string} options.message The default message of the confirm
   * @param {string} options.confirmTxt The default words of the confirm button, 'YES' as default
   * @param {string} options.cancelTxt The default words of the cancel button, 'NO' as default
   * @param {string} options.confirmColor The default color of the confirm button
   * @param {string} options.cancelColor The default color of the cancel button
   * @param {string} options.icon The default icon class of the confirm
   * @param {string} options.confirmWidth The default width of the confirm
   * @param {string} options.marginTop The default marginTop of the confirm
   * @example
   * // Install in the entry file
   * import Vue form 'vue'
   * import VueArcherConfirm form 'vue-archer-confirm'
   * // Config the style of the buttons
   * Vue.use(VueArcherConfirm, {
     *    confirmTxt: 'Confirm',
     *    cancelTxt: 'Cancel',
     *    confirmColor: '#00BFBF',
     *    cancelColor: '#333',
     *    icon: 'iconWarning', // Add a warning icon in the confirm
     *    confirmWidth: '325px', // Config the width of confirm
     *    marginTop: '20%', // Config the position of confirm
     * });
   */
  install (Vue, options = {}) {

    var confirmConstructor = Vue.extend(confirmOptions),
      confirmInstance = null;

    /**
     * @function $confirm
     * @param {Object} [config={}] config locally
     * @param {string} config.title The title of the confirm
     * @param {string} config.message The message of the confirm
     * @param {string} config.confirmTxt The words of the confirm button
     * @param {string} config.cancelTxt The words of the cancel button
     * @param {string} config.confirmColor The color of the confirm button
     * @param {string} config.cancelColor The color of the cancel button
     * @param {string} config.icon The icon class of the confirm
     * @param {string} config.confirmWidth The width of the confirm
     * @param {string} config.marginTop The marginTop of the confirm
     * @return {Object} A ES6 Promise
     * @example
     * this.$confirm({
         *      title: 'Cancel the apply?',
         *      message: 'If you do so, we will not send you messages any more when updating'
         * })
     */
    Vue.prototype.$confirm = function (config) {

      return new Promise(function (resolve, reject) {
        if (confirmInstance) return;

        confirmInstance = new confirmConstructor({
          el: document.createElement('div'),
          data () {
            return {
              title: config.title || options.title || '',
              message: config.message || options.message || '',
              confirmTxt: config.confirmTxt || options.confirmTxt || 'YES',
              cancelTxt: config.cancelTxt || options.cancelTxt || 'NO',
              confirmColor: config.confirmColor || options.confirmColor || '',
              cancelColor: config.cancelColor || options.cancelColor || '',
              icon: config.icon || options.icon || '',
              marginTop: config.marginTop || options.marginTop || '',
              confirmWidth: config.confirmWidth || options.confirmWidth || ''
            }
          },
          methods: {
            onConfirm () {
              confirmInstance.$el.remove();
              confirmInstance = null;
              resolve();
            },
            onCancel () {
              confirmInstance.$el.remove();
              confirmInstance = null;
              reject && reject();
            }
          }
        });

        document.body.appendChild(confirmInstance.$el);
      });

    }
  }
}

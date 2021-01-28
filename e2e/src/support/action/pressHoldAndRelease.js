/**
 * Perform a key press
 * @param  {String}   key  The key to press
 */
// export default (key) => {
//     browser.keys(key);
// };

export function holdDownKey(character) {
    browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: character }],
    }]);
  }
  
  export function releaseKey(character) {
    const keyAction = '';
    browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: character }],
    }]);
  }
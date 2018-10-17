import Component from '@ember/component';

export default Component.extend({
  tagName: 'span',
  checked: false,
  tabindex: 0,

  click(e) {
    e.preventDefault();
    
    this.toggleProperty('isChecked');
    this.trigger('change');
  },
});

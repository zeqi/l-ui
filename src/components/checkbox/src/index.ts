import { findComponentUpward, oneOf } from '../../../utils/assist';
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: [String, Number, Boolean]
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    }
  },
  data() {
    return {
      model: [],
      currentValue: this.value,
      group: false,
      showSlot: true,
      parent: findComponentUpward(this, 'CheckboxGroup',''),
      focusInner: false,
      prefixCls:'lcheckbox'
    };
  },
  computed: {
    wrapClasses() {
      return [
        `${this.prefixCls}-wrapper`,
        {
          [`${this.prefixCls}-group-item`]: this.group,
          [`${this.prefixCls}-wrapper-checked`]: this.currentValue,
          [`${this.prefixCls}-wrapper-disabled`]: this.disabled
        }
      ];
    },
    checkboxClasses() {
      return [
        `${this.prefixCls}`,
        {
          [`${this.prefixCls}-checked`]: this.currentValue,
          [`${this.prefixCls}-disabled`]: this.disabled,
          [`${this.prefixCls}-indeterminate`]: this.indeterminate
        }
      ];
    },
    innerClasses() {
      return [
        `${this.prefixCls}-inner`,
        {
          [`${this.prefixCls}-focus`]: this.focusInner
        }
      ];
    },
    inputClasses() {
      return `${this.prefixCls}-input`;
    }
  },
  mounted() {
    this.parent = findComponentUpward(this, 'CheckboxGroup','');
    if (this.parent) {
      this.group = true;
    }
    if (this.group) {
      this.parent.updateModel(true);
    } else {
      this.updateModel();
      this.showSlot = this.$slots.default !== undefined;
    }
  },
  methods: {
    change(event):any {
      if (this.disabled) {
        return false;
      }
      const checked = event.target.checked;
      this.currentValue = checked;
      const value = checked ? this.trueValue : this.falseValue;
      this.$emit('input', value);
      if (this.group) {
        this.parent.change(this.model);
      } else {
        this.$emit('on-change', value);
      }
    },
    updateModel() {
      this.currentValue = this.value === this.trueValue;
    },
    onBlur() {
      this.focusInner = false;
    },
    onFocus() {
      this.focusInner = true;
    }
  },
  watch: {
    value(val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateModel();
      } else {
        throw 'Value should be trueValue or falseValue.';
      }
    }
  }
};
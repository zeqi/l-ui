export default {
  props: {
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
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    }
  },
  data() {
    return {
      currentValue: this.value,
      prefixCls:'lswitch'
    };
  },
  computed: {
    wrapClasses() {
      return [
        `${this.prefixCls}`,
        {
          [`${this.prefixCls}-checked`]: this.currentValue === this.trueValue
        }
      ];
    },
    innerClasses() {
      return `${this.prefixCls}-inner`;
    }
  },
  methods: {
    toggle(event):any {
      event.preventDefault();
      if (this.disabled) {
        return false;
      }
      const checked = this.currentValue === this.trueValue ? this.falseValue : this.trueValue;
      this.currentValue = checked;
      this.$emit('input', checked);
      this.$emit('on-change', checked);
    }
  },
  watch: {
    value(val) {
      if (val !== this.trueValue && val !== this.falseValue) {
        throw 'Value should be trueValue or falseValue.';
      }
      this.currentValue = val;
    }
  }
};
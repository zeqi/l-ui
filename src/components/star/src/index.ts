export default{
  props: {
    count: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    }
  },
  data() {
    return {
      prefixCls: 'lrate',
      hoverIndex: -1,
      isHover: false,
      isHalf: this.allowHalf && this.value.toString().indexOf('.') >= 0,
      currentValue: this.value
    };
  },
  computed: {
    classes() {
      return [
        `${this.prefixCls}`,
        {
          [`${this.prefixCls}-disabled`]: this.disabled
        }
      ];
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.setHalf(val);
    }
  },
  methods: {
    starCls(value) {
      const hoverIndex = this.hoverIndex;
      const currentIndex = this.isHover ? hoverIndex : this.currentValue;
      let full = false;
      let isLast = false;
      if (currentIndex >= value) full = true;
      if (this.isHover) {
        isLast = currentIndex === value;
      } else {
        isLast = Math.ceil(this.currentValue) === value;
      }
      return [
        `${this.prefixCls}-star`,
        {
          [`${this.prefixCls}-star-full`]: (!isLast && full) || (isLast && !this.isHalf),
          [`${this.prefixCls}-star-half`]: isLast && this.isHalf,
          [`${this.prefixCls}-star-zero`]: !full
        }
      ];
    },
    handleMousemove(value, event) {
      if (this.disabled) return;
      this.isHover = true;
      if (this.allowHalf) {
        const type = event.target.getAttribute('type') || false;
        this.isHalf = type === 'half';
      } else {
        this.isHalf = false;
      }
      this.hoverIndex = value;
    },
    handleMouseleave() {
      if (this.disabled) return;
      this.isHover = false;
      this.setHalf(this.currentValue);
      this.hoverIndex = -1;
    },
    setHalf(val) {
      this.isHalf = this.allowHalf && val.toString().indexOf('.') >= 0;
    },
    handleClick(value) {
      if (this.disabled) return;
      //                 value++;
      if (this.isHalf) value -= 0.5;
      this.currentValue = value;
      this.$emit('input', value);
      this.$emit('on-change', value);
    }
  }
};
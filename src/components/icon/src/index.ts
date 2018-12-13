export default {
  props: {
    type: String,
    size: [Number, String],
    color: String
  },
  data() {
    return {
      prefixCls:'licon'
    };
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  },
  computed: {
    classes() {
      return `${this.prefixCls} ${this.prefixCls}-${this.type}`;
    },
    styles() {
      let style = {};
      if (this.size) {
        style['font-size'] = `${this.size}px`;
      }
      if (this.color) {
        style['background-color'] = this.color;
      }
      return style;
    }
  }
};
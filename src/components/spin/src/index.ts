import { oneOf } from '../../../utils/assist';
const prefixCls = 'lspin';
export default {
  name: 'Spin',
  props: {
    size: {
      validator(value) {
        return oneOf(value, ['small', 'large']);
      }
    },
    fix: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showText: false,
      // used for $Spin
      visible: false
    };
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-fix`]: this.fix,
          [`${prefixCls}-show-text`]: this.showText,
          [`${prefixCls}-fullscreen`]: this.fullscreen
        }
      ];
    },
    mainClasses() {
      return `${prefixCls}-main`;
    },
    dotClasses() {
      return `${prefixCls}-dot`;
    },
    textClasses() {
      return `${prefixCls}-text`;
    },
    fullscreenVisible() {
      if (this.fullscreen) {
        return this.visible;
      } else {
        return true;
      }
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.addScrollEffect();
      } else {
        this.removeScrollEffect();
      }
    }
  },
  mounted() {
    this.showText = this.$slots.default !== undefined;
  }
};

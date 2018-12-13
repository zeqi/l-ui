import { oneOf } from '../../../utils/assist';
export default {
  props: {
    type: { type: String },
    shape: { type: String },
    disabled: Boolean
  },
  data() {
    return {
      types: ['primary', 'ghost', 'dashed', 'text', 'info', 'success', 'warning', 'error', 'default'],
      shapes: ['circle', 'circle-outline'],
      prefixCls: 'l_button',
      showSlot: true,
    };
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  },
  mounted() {
    this.showSlot = this.$slots.default !== undefined;
  },
  computed: {
    htmltype(): Boolean {
      return oneOf(this.type, this.types);
    },
    shapee(): Boolean {
      return oneOf(this.shape, this.shapes);
    },
    classes(): Array<any> {
      return [
        `${this.prefixCls}`,
        {
          [`${this.prefixCls}_${this.type}`]: !!this.htmltype,
          [`${this.prefixCls}_${this.shape}`]: !!this.shapee
        }
      ];
    }
  }
};


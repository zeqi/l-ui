import Lbutton from '../../button/index';
import Licon from '../../icon/index';
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    maskhidden: {
      type: [Boolean, String],
      default: 'true'
    },
    closable: {
      type: Boolean,
      default: true
    },
    title: {
      type: String
    },
    className: {
      type: String
    },
    width: {
      type: [Number, String],
      default: 520
    },
    okText: {
      type: String,
      default:'确认'
    },
    cancelText: {
      type: String,
      default:'取消'
    },
    styles: {
      type: Object
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    // for instance
    footerHide: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      showHead: true,
      visible: this.value,
      prefixCls: 'lmodal',
      okTexts: '确认',
      cancelTexts: '取消',
      wrapShow: false,
      hidden: 'true'
    };
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.EscClose);
  },
  mounted() {
    if (this.visible) {
      this.wrapShow = true;
    }
    document.addEventListener('keydown', this.EscClose);
    let showHead = true;
    if (this.$slots.header === undefined && !this.title) {
      showHead = false;
    }
    this.showHead = showHead;
  },
  computed: {
    wrapClasses() {
      return [
        `${this.prefixCls}-wrap`,
        {
          [`${this.prefixCls}-hidden`]: !this.wrapShow,
          [`${this.className}`]: !!this.className
        }
      ];
    },
    classes() {
      return `${this.prefixCls}`;
    },
    mainStyles() {
      let style = {};
      const width = parseInt(this.width);
      const styleWidth = {
        width: width <= 100 ? `${width}%` : `${width}px`
      };
      const customStyle = this.styles ? this.styles : {};
      Object.assign(style, styleWidth, customStyle);
      return style;
    },
    localeOkText() {
      // if (this.okText === undefined) {
      //   return this.okTexts;
      // } else {
      //   return this.okText;
      // }
    },
    localeCancelText() {
      // if (this.cancelText === undefined) {
      //   return this.cancelTexts;
      // } else {
      //   return this.cancelText;
      // }
    },
    maskClasses() {
      if (this.maskhidden !== this.hidden || Boolean(!this.maskhidden)) {
        return `${this.prefixCls}-hidden`;
      } else {
        return `${this.prefixCls}-mask`;
      }
    },
  },
  methods: {
    mask() {
      if (this.maskClosable) {
        this.close();
      }
    },
    handleWrapClick(event) {
      if (this.maskhidden !== this.hidden) {
        return;
      };
      // use indexOf,do not use === ,because ivu-modal-wrap can have other custom className
      const className = event.target.getAttribute('class');
      if (className && className.indexOf(`${this.prefixCls}-wrap`) > -1) this.mask();
    },
    EscClose(e) {
      if (this.visible && this.closable) {
        if (e.keyCode === 27) {
          this.close();
        }
      }
    },
    ok() {
      this.visible = false;
      this.$emit('input', false);
      this.$emit('on-ok');
    },
    close() {
      this.visible = false;
      this.$emit('input', false);
      this.$emit('on-cancel');
    },
    cancel() {
      this.close();
    },
  },
  watch: {
    value(val) {
      this.visible = val;
    },
    title(val) {
      if (this.$slots.header === undefined) {
        this.showHead = !!val;
      }
    },
    visible(val) {
      if (val === false) {
        this.wrapShow = false;
      } else {
        this.wrapShow = true;
      }
      this.$emit('on-visible-change', val);
    },
  }
};
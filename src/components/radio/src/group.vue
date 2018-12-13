<template>
  <div :class="classes" :name="name">
    <slot></slot>
  </div>
</template>
<script>
  import { oneOf, findComponentsDownward } from '../../../utils/assist';
  const prefixCls = 'lradio-group';
  let seed = 0;
  const now = Date.now();
  const getUuid = () => `ivuRadioGroup_${now}_${seed++}`
  export default {
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      type: {
        validator(value) {
          return oneOf(value, ['button']);
        }
      },
      vertical: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: getUuid
      }
    },
    data() {
      return {
        currentValue: this.value,
        childrens: []
      };
    },
    computed: {
      classes() {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-${this.type}`]: !!this.type,
            [`${prefixCls}-vertical`]: this.vertical
          }
        ];
      }
    },
    mounted() {
      this.updateValue();
    },
    methods: {
      updateValue() {
        this.childrens = findComponentsDownward(this, 'Lradio');
        if (this.childrens) {
          this.childrens.forEach(child => {
            child.currentValue = this.currentValue === child.label;
            child.group = true;
          });
        }
      },
      change(data) {
        this.currentValue = data.value;
        this.updateValue();
        this.$emit('input', data.value);
        this.$emit('on-change', data.value);
      }
    },
    watch: {
      value() {
        if (this.currentValue !== this.value) {
          this.currentValue = this.value;
          this.updateValue();
        }
      }
    }
  };
</script>
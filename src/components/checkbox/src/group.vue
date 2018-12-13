<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  import { findComponentsDownward } from '../../../utils/assist';
  const prefixCls = 'lcheckbox-group';
  export default {
    props: {
      value: {
        type: Array,
        default() {
          return [];
        }
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
          `${prefixCls}`
        ];
      }
    },
    mounted() {
      this.updateModel(true);
    },
    methods: {
      updateModel(update) {
        this.childrens = findComponentsDownward(this, 'Lcheckbox');
        if (this.childrens) {
          const { value } = this;
          this.childrens.forEach(child => {
            child.model = value;
            if (update) {
              child.currentValue = value.indexOf(child.label) >= 0;
              child.group = true;
            }
          });
        }
      },
      change(data) {
        this.currentValue = data;
        this.$emit('input', data);
        this.$emit('on-change', data);
      }
    },
    watch: {
      value() {
        this.updateModel(true);
      }
    }
  };
</script>
<style lang="less">
  .lcheckbox-group {
    font-size: 14px;
  }

  .lcheckbox-group-item {
    display: inline-block;
  }
</style>
<template>
  <div :class="prefixCls" v-show="show">
    <slot></slot>
  </div>
</template>
<script>
  const prefixCls = 'ltabs-tabpane';
  export default {
    name: 'TabPane',
    props: {
      name: {
        type: String
      },
      label: {
        type: [String, Function],
        default: ''
      },
      icon: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      closable: {
        type: Boolean,
        default: null
      }
    },
    data() {
      return {
        prefixCls: prefixCls,
        show: true,
        currentName: this.name
      };
    },
    methods: {
      updateNav() {
        this.$parent.updateNav();
      }
    },
    watch: {
      name(val) {
        this.currentName = val;
        this.updateNav();
      },
      label() {
        this.updateNav();
      },
      icon() {
        this.updateNav();
      },
      disabled() {
        this.updateNav();
      }
    },
    mounted() {
      this.updateNav();
    },
    destroyed() {
      this.updateNav();
    }
  };
</script>
<style lang="less">
  .ltabs .ltabs-tabpane {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
    opacity: 1;
  }

  .ltabs-tabpane-inactive {
    opacity: 0;
    height: 0;
  }
</style>
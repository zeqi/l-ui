<template>
  <li @click.stop="select">
    <slot>{{ showLabel }}</slot>
  </li>
</template>
<script>
  export default {
    props: {
      value: String
    },
    data() {
      return {

      }
    },
    computed: {
      showLabel() {
        return (this.label) ? this.label : this.value;
      }
    },
    methods: {
      select() {
        this.$emit('on-change', {
          value: this.value,
          label: this.optionLabel,
        });
      }
    }
  }
</script>
export default {
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  }
};
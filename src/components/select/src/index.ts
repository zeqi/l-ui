export default {
  props: {
    list: Array,
    value: String
  },
  data() {
    return {
      showlist: false,
      current: this.value,
      body: document.body,
      currentSelect: {}
    };
  },
  mounted() {
    this.toggle();
  },
  methods: {
    changeValueHandle(label, value) {
      this.current = label;
      this.showlist = false;
      this.$emit('on-change', value);
    },
    togglelist(event) {
      this.$nextTick(() => {
        this.showlist = !this.showlist;
      });
    },
    togglelisted(){
      this.showlist=false;
    },
    Dselect() {
      this.$nextTick(() => {
        this.showlist = true;
      });
    },
    Uselect() {
      this.$nextTick(() => {
        this.showlist = false;
      });
    },
    toggle() {
      this.body.addEventListener('click', (event) => {
        this.showlist = false;
      });
    }
  }
};
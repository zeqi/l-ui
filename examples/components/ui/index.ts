export default {
  data() {
    return {
      pcmviews: [
        { id: "index", classID: 0, path: "/docs", des: "主页" },
        { id: "animation", classID: 1, path: "/docs/animation", des: "动画" },
        { id: "sprint", classID: 2, path: "/docs/sprint", des: "冲刺" }
      ],
      id: 0,
      ind: -1
    }
  },
  methods: {
    skipRouter(classID: Number) {
      this.id = classID;
    },
    mousemove(index: Number) {
      this.ind = index;
    },
    mouseleave() {
      this.ind = -1;
    }
  }
}

import { Watch } from "vue-property-decorator";

export default {
  data() {
    return {
      res:[
        {
          msg:"11",
          num:"12",
          ls:"标签一"
        },
        {
          msg:"13",
          num:"14",
          ls:'标签二'
        }
      ],
      indeterminate: false,
      checkAll: false,
      single:true,
      checkAllGroup: [],
      arr:['香蕉', '苹果', '西瓜']
    }
  },
  mounted(){
    // this.aa();
  },
  methods: {
    // tab(activeKey){
    //   console.log(activeKey)
    // },
    // aa(val){
    //   console.log(val)
    // },
    handleCheckAll() {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;

      if (this.checkAll) {
        this.checkAllGroup = this.arr;
      } else {
        this.checkAllGroup = [];
      }
    },
    checkAllGroupChange(data) {
      console.log(data)
      // console.log(this.arr.length);
      if (data.length === 3) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    },
  },
  watch:{
    // 'checkAllGroup'(to,from){
    //   console.log(to)
    // }
  }
}

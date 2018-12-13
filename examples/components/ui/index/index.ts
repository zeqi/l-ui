export default {
  data() {
    return {
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
      modal6: false,
      mask: false,
      switch1: false,
      switch2: false,
      switch3: false,
      disabled: false,
      single: true,
      fruit: ['苹果'],
      indeterminate: true,
      checkAll: false,
      checkAllGroup: ['香蕉', '苹果', '西瓜', '橘子', '鸭梨'],
      value: 1,
      valueCustomText: 2.5,
      model1: '',
      singles: false,
      animal: '蝴蝶',
      phone: 's',
      value1: 25,
      value2: 15,
      cityList1: [{
        value: 'beijing',
        label: '北京市'
      },
      {
        value: 'shanghai',
        label: '上海市'
      }],
      cityList: [
        {
          value: 'beijing',
          label: '北京市'
        },
        {
          value: 'shanghai',
          label: '上海市'
        },
        {
          value: 'shenzhen',
          label: '深圳市'
        },
        {
          value: 'hangzhou',
          label: '杭州市'
        },
        {
          value: 'nanjing',
          label: '南京市'
        },
        {
          value: 'chongqing',
          label: '重庆市'
        }
      ],
      fruitlist: [
        {
          ind: 0,
          name: '香蕉'
        },
        {
          ind: 1,
          name: '苹果'
        },
        {
          ind: 2,
          name: '西瓜'
        },
        {
          ind: 3,
          name: '橘子'
        },
        {
          ind: 4,
          name: '鸭梨'
        }

      ]
    }
  },
  methods: {
    fd(oldValue, val) {

    },
    handleCheckAll(data) {
      // console.log(data);
      // if (this.indeterminate) {
      //   this.checkAll = false;
      // } else {
      //   this.checkAll = !this.checkAll;
      // }
      // this.indeterminate = false;

      // if (this.checkAll) {
      //   this.checkAllGroup = ['香蕉', '苹果', '西瓜','橘子','鸭梨'];
      // } else {
      //   this.checkAllGroup = [];
      // }
    },
    // checkAllGroupChange(data) {
    // if (data.length === 3) {
    //   this.indeterminate = false;
    //   this.checkAll = true;
    // } else if (data.length > 0) {
    //   this.indeterminate = true;
    //   this.checkAll = false;
    // } else {
    //   this.indeterminate = false;
    //   this.checkAll = false;
    // }
    // },
    changes(data) {
      console.log(data);
    },
    ok() {
      // alert(1) 
    },
    cancel() {
      // alert(1)
      // this.$Message.info('Clicked cancel');
    },
    tab(index) {
      console.log(index)
    },
    del() {
      alert(2)
    },
    changeSlider(data) {
      console.log(data)
    },
    aaa() {
      alert('aaaaaaaaaaaaaa');
    },
    changeval(data) {
      // console.log(data);
    },
    checkAllGroupChange(data) {
      console.log(data)
      // console.log(this.checkAllGroup);
      // this.fruitlist=data;
      // // console.log(this.checkAllGroup);
      // this.checkAllGroup=this.fruitlist;
      // // 
      // // console.log(data);
      // // // this.checkAllGroup.splice(index, 1);
      // // if (index) {
      // //   data.splice(index, 1);
      // // }
    },
    remove() {
      var index = this.checkAllGroup.indexOf("西瓜")
      this.fruitlist.splice(index, 1);
      // this.checkAllGroup = this.fruitlist;
      // this.checkAllGroup.splice(index, 1);
      //this.checkAllGroup=['香蕉', '苹果', '橘子'];
      // console.log(this.checkAllGroup);
    }
  }
}

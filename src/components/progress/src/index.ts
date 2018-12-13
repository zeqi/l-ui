const prefixCls = 'l_progress';
export default {
  props:{
    name:{
      type: String,
    },
    isFollow: {
      type: Boolean,
      default: false
    },
    hasText: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
    },
    percent: {
      default: 0
    },
    showWidth: {
      type: Boolean,
      default: false
    },
    strokeWidth: {
      type: Number,
      default: 10
    },
    isDynamicChangebg: {
      type: Boolean,
      default: false,
    },
    pgColor: {
      type: String,
      default: '#548DFF'
    },
    bgColor: {
      type: String,
      default: 'rgba(84,141,255,0.1)'
    },
    active:{
      type: Boolean,
      dafault: false
    }
  },
  data(){
    return {

    };
  },
  computed:{
    pgStyle() {
      return {
        // position:'relative',
        width:`${this.getPercent}%`,
        height:`${this.strokeWidth}px`,
        background:`${this.pgColor}`
      };
    },
    dynamicStyle() {
      let _width =this.getPercent;
      let _color = '';
      if(_width >=0 && _width < 90 ){
        _color = '#49CD7F';
      }else{
        _color = '#FFA824';
      };
      return {
        // position:'relative',
        width:`${this.getPercent}%`,
        height:`${this.strokeWidth}px`,
        background:`${_color}`,
        // boxShadow:`0 0 4px ${_color}`
      };
    },
    getPercent() {
      if(this.percent){
        return this.percent;
      }else if(this.showWidth){
        return 100;
      }else{
        return 0;
      }
    },
    getSize() {
      return this.size;
    },
    wrapClass() {
      return `${prefixCls}`;
    },
    nameClass() {
      return `${prefixCls}_name`;
    },
    outerClass() {
      return `${prefixCls}_outer`;
    },
    innerClass() {
      return `${prefixCls}_inner`;
    },
    bgClass() {
      return `${prefixCls}_bg`;
    },
    textClass() {
      return `${prefixCls}_text`;
    },
    DynamicChangebg(){
      return this.isDynamicChangebg;
    },
    followTextClass() {
      return `${prefixCls}_follow_text`;
    }
  }
};
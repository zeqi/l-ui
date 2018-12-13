import { oneOf } from '../../../utils/assist'
export default {
    // name: 'Lline',
    // install(Vue) {
    //     Vue.component(this.name, this);
    // },
    props: {
        type: { type:String },
        shape: { type:String }
    },
    data() {
        return {
            types: ['dotted','solid','double','dashed'],
            shapes: ['one','two'],
            prefixCls: 'l_line',
            showSlot: true
        }
    },
    methods: {
        
    },
    mounted() {
        this.showSlot = this.$slots.default !== undefined;
    },
    computed: {
        htmltype(): Boolean {
            return oneOf(this.type, this.types);
        },
        shapee(): Boolean {
            return oneOf(this.shape, this.shapes);
        },
        classes(): Array<any> {
            return [
                `${this.prefixCls}`,
                {
                    [`${this.prefixCls}_${this.type}`]: !!this.htmltype,
                    [`${this.prefixCls}_${this.shape}`]: !!this.shapee
                }
            ]
        }
    }
}



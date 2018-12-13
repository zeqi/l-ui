import { oneOf } from '../../../utils/assist';
// import Options from './options.vue';
const prefixCls = 'lpage';
export default {
    name: 'Page',
    // components: { Options },
    props: {
        current: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            default: 0
        },
        pageSize: {
            type: Number,
            default: 10
        },
        pageSizeOpts: {
            type: Array,
            default () {
                return [10, 20, 30, 40];
            }
        },
        placement: {
            validator (value) {
                return oneOf(value, ['top', 'bottom']);
            },
            default: 'bottom'
        },
        // transfer: {
        //     type: Boolean,
        //     default () {
        //         return this.$IVIEW.transfer === '' ? false : this.$IVIEW.transfer;
        //     }
        // },
        size: {
            validator (value) {
                return oneOf(value, ['small']);
            }
        },
        // simple: {
        //     type: Boolean,
        //     default: false
        // },
        showTotal: {
            type: Boolean,
            default: false
        },
        // showElevator: {
        //     type: Boolean,
        //     default: false
        // },
        // showSizer: {
        //     type: Boolean,
        //     default: false
        // },
        className: {
            type: String
        },
        styles: {
            type: Object
        },
        prevText: {
            type: String,
            default: ''
        },
        nextText: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            prefixCls: prefixCls,
            currentPage: this.current,
            currentPageSize: this.pageSize
        };
    },
    watch: {
        total (val) {
            let maxPage = Math.ceil(val / this.currentPageSize);
            if (maxPage < this.currentPage && maxPage > 0) {
                this.currentPage = maxPage;
            }
        },
        current (val) {
            this.currentPage = val;
        },
        pageSize (val) {
            this.currentPageSize = val;
        }
    },
    computed: {
        // isSmall () {
        //     return !!this.size;
        // },
        allPages () {
            const allPage = Math.ceil(this.total / this.currentPageSize);
            return (allPage === 0) ? 1 : allPage;
        },
        // simpleWrapClasses () {
        //     return [
        //         `${prefixCls}`,
        //         `${prefixCls}-simple`,
        //         {
        //             [`${this.className}`]: !!this.className
        //         }
        //     ];
        // },
        // simplePagerClasses () {
        //     return `${prefixCls}-simple-pager`;
        // },
        wrapClasses () {
            return [
                `${prefixCls}`,
                {
                    [`${this.className}`]: !!this.className,
                    'mini': !!this.size
                }
            ];
        },
        prevClasses () {
            return [
                `${prefixCls}-prev`,
                {
                    [`${prefixCls}-disabled`]: this.currentPage === 1,
                    [`${prefixCls}-custom-text`]: this.prevText !== ''
                }
            ];
        },
        nextClasses () {
            return [
                `${prefixCls}-next`,
                {
                    [`${prefixCls}-disabled`]: this.currentPage === this.allPages,
                    [`${prefixCls}-custom-text`]: this.nextText !== ''
                }
            ];
        },
        firstPageClasses () {
            return [
                `${prefixCls}-item`,
                {
                    [`${prefixCls}-item-active`]: this.currentPage === 1
                }
            ];
        },
        lastPageClasses () {
            return [
                `${prefixCls}-item`,
                {
                    [`${prefixCls}-item-active`]: this.currentPage === this.allPages
                }
            ];
        }
    },
    methods: {
        changePage (page) {
            if (this.currentPage != page) {
                this.currentPage = page;
                this.$emit('update:current', page);
                this.$emit('on-change', page);
            }
        },
        prev () {
            const current:any = this.currentPage;
            if (current <= 1) {
                return false;
            }
            else{
                this.changePage(current - 1);
                return true;
            }
        },
        next () {
            const current = this.currentPage;
            if (current >= this.allPages) {
                return false;
            }
            else{
                this.changePage(current + 1);
                return true;
            }
        },
        fastPrev () {
            const page = this.currentPage - 5;
            if (page > 0) {
                this.changePage(page);
            } else {
                this.changePage(1);
            }
        },
        fastNext () {
            const page = this.currentPage + 5;
            if (page > this.allPages) {
                this.changePage(this.allPages);
            } else {
                this.changePage(page);
            }
        },
        // onSize (pageSize) {
        //     this.currentPageSize = pageSize;
        //     this.$emit('on-page-size-change', pageSize);
        //     this.changePage(1);
        // },
        // onPage (page) {
        //     this.changePage(page);
        // },
        // keyDown (e) {
        //     const key = e.keyCode;
        //     const condition = (key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key === 8 || key === 37 || key === 39;
        //     if (!condition) {
        //         e.preventDefault();
        //     }
        // },
        // keyUp (e) {
        //     const key = e.keyCode;
        //     const val = parseInt(e.target.value);
        //     if (key === 38) {
        //         this.prev();
        //     } else if (key === 40) {
        //         this.next();
        //     } else if (key === 13) {
        //         let page = 1;
        //         if (val > this.allPages) {
        //             page = this.allPages;
        //         } else if (val <= 0 || !val) {
        //             page = 1;
        //         } else {
        //             page = val;
        //         }
        //         e.target.value = page;
        //         this.changePage(page);
        //     }
        // }
    }
};

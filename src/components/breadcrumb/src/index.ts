const prefixCls = 'lbreadcrumb';

export default {
    name: 'lbreadcrumb',
    props: {
        separator: {
            type: String,
            default: '/'
        }
    },
    computed: {
        classes () {
            return `${prefixCls}`;
        }
    },
    mounted () {
        this.updateChildren();
    },
    updated () {
        this.$nextTick(() => {
            this.updateChildren();
        });
    },
    methods: {
        updateChildren () {
            this.$children.forEach((child) => {
                child.separator = this.separator;
            });
        }
    },
    watch: {
        separator () {
            this.updateChildren();
        }
    }
};

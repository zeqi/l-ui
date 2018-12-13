
import { findComponentUpward, oneOf } from '../../../utils/assist';
const prefixCls = 'lradio';
export default {
    name: 'Radio',
    props: {
        value: {
            type: [String, Number, Boolean],
            default: false
        },
        trueValue: {
            type: [String, Number, Boolean],
            default: true
        },
        falseValue: {
            type: [String, Number, Boolean],
            default: false
        },
        label: {
            type: [String, Number]
        },
        disabled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String
        }
    },
    data () {
        return {
            currentValue: this.value,
            group: false,
            groupName: this.name,
            parent: findComponentUpward(this, 'RadioGroup',''),
            focusWrapper: false,
            focusInner: false
        };
    },
    computed: {
        wrapClasses () {
            return [
                `${prefixCls}-wrapper`,
                {
                    [`${prefixCls}-group-item`]: this.group,
                    [`${prefixCls}-wrapper-checked`]: this.currentValue,
                    [`${prefixCls}-wrapper-disabled`]: this.disabled,
                    [`${prefixCls}-focus`]: this.focusWrapper
                }
            ];
        },
        radioClasses () {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-checked`]: this.currentValue,
                    [`${prefixCls}-disabled`]: this.disabled
                }
            ];
        },
        innerClasses () {
            return [
                `${prefixCls}-inner`,
                {
                    [`${prefixCls}-focus`]: this.focusInner
                }
            ];
        },
        inputClasses () {
            return `${prefixCls}-input`;
        }
    },
    mounted () {
        if (this.parent) {
            this.group = true;
            if (this.name && this.name !== this.parent.name) {
                /* eslint-disable no-console */
                if (console.warn) {
                    console.warn('[iview] Name does not match Radio Group name.');
                }
                /* eslint-enable no-console */
            } else {
                this.groupName = this.parent.name; 
            }
        }
        if (this.group) {
            this.parent.updateValue();
        } else {
            this.updateValue();
        }
    },
    methods: {
        change (event):any{
            if (this.disabled) {
                return false;
            }
            const checked = event.target.checked;
            this.currentValue = checked;
            const value = checked ? this.trueValue : this.falseValue;
            this.$emit('input', value);
            if (this.group) {
                if (this.label !== undefined) {
                    this.parent.change({
                        value: this.label,
                        checked: this.value
                    });
                }
            } else {
                this.$emit('on-change', value);
            }
        },
        updateValue () {
            this.currentValue = this.value === this.trueValue;
        },
        onBlur () {
            this.focusWrapper = false;
            this.focusInner = false;
        },
        onFocus () {
            if (this.group && this.parent.type === 'button') {
                this.focusWrapper = true;
            } else {
                this.focusInner = true;
            }
        }
    },
    watch: {
        value (val) {
            if (val === this.trueValue || val === this.falseValue) {
                this.updateValue();
            } else {
                throw 'Value should be trueValue or falseValue.';
            }
        }
    }
};

import { findComponentUpward, findComponentsUpward } from '../../../utils/assist';
export default {
    data () {
        return {
            menu: findComponentUpward(this, 'Lmenu',null)
        };
    },
    computed: {
        hasParentSubmenu () {
            return !!findComponentUpward(this, 'Lsubmenu',null);
        },
        parentSubmenuNum () {
            return findComponentsUpward(this, 'Lsubmenu').length;
        },
        mode () {
            return this.menu.mode;
        }
    }
};

import Lmenu from './src';
import LmenuGroup from './src/menu-group.vue';
import LmenuItem from './src/menu-item.vue';
import Lsubmenu from './src/submenu.vue';
Lmenu["Group"] = LmenuGroup;
Lmenu["Item"] = LmenuItem;
Lmenu["Sub"] = Lsubmenu;
// console.log(Lmenu["Group"])
export default Lmenu;
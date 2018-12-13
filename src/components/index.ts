import Lbutton from './button';
import Lmodal from './modal';
import Lline from './line';
import Lslider from './slider';
import Lselect from './select';
import Licon from './icon';
import Lprogress from './progress';
import Lswitch from './switchs';
import Lstar from './star';
import Ltabs from './tabs';
import Lspin from './spin';
import Lmask from './mask';
import Lbreadcrumb from './breadcrumb';  //面包屑

import lbreadcrumbItem from './breadcrumb/src/breadcrumb-item.vue';
import Lpage from './page';  //分页
import Lmenu from './menu';  //左侧导航
import LmenuGroup from './menu/src/menu-group.vue';  //左侧导航
import LmenuItem from './menu/src/menu-item.vue';  //左侧导航
import Lsubmenu from './menu/src/submenu.vue';  //左侧导航
import Lpane from './tabs/src/pane.vue';
import Lcheckbox from './checkbox';
import CheckboxGroup from './checkbox/src/group.vue';
import Lradio from './radio';
import RadioGroup from './radio/src/group.vue';
import Option from './select/src/option.vue';
import Lcarousel from './carousel';
import CarouselItem from './carousel/src/carousel-item.vue';
const components = {
  Lbutton,
  Lmodal,
  Lline,
  Licon,
  Lprogress,
  Lswitch,
  Ltabs,
  Lcheckbox,
  CheckboxGroup,
  Lpane,
  Lstar,
  Lspin,
  Lselect,
  Lradio,
  RadioGroup,
  Lslider,
  Lmask,
  Option,
  Lcarousel,
  CarouselItem,
  Lbreadcrumb,
  lbreadcrumbItem,
  Lpage,
  Lmenu,
  LmenuGroup,
  LmenuItem,
  Lsubmenu
};
Object.keys(components).forEach(key => {
  const Component = components[key];
  Component.name = key;
  Component.install = (Vue) => {
    Vue.component(key, Component);
  };
});
export default components;
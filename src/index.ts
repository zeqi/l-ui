import components from './components/'

const install = function (Vue, opts = {}) {
    if ((<any>install).installed) return;
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key])
    });
};

// auto install
if (typeof window !== 'undefined' && (<any>window).Vue) {
    install((<any>window).Vue);
}

const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    install,
    ...components
};

export const Lbutton = components.Lbutton
export const Lmodal = components.Lmodal
export const Lline = components.Lline
export const Licon = components.Licon
export const Lswitch = components.Lswitch
export const Ltabs = components.Ltabs
export const Lpane = components.Lpane
export const Lstar= components.Lstar
export const Lcheckbox = components.Lcheckbox
export const CheckboxGroup = components.CheckboxGroup
export const Lspin = components.Lspin
export const Lselect = components.Lselect
export const Lradio = components.Lradio
export const RadioGroup = components.RadioGroup
export const Lslider = components.Lslider
export const Lmask = components.Lmask
export const Option = components.Option
export const Lcarousel = components.Lcarousel
export const CarouselItem = components.CarouselItem
export const Lbreadcrumb = components.Lbreadcrumb
export const Lpage = components.Lpage
export const Lmenu = components.Lmenu
export const LmenuGroup = components.LmenuGroup
export const LmenuItem = components.LmenuItem
export const Lsubmenu = components.Lsubmenu


export default API

// module.exports.default = module.exports = API;   // eslint-disable-line no-undef


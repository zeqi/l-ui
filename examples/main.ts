import { Vue } from 'vue-property-decorator';
import Router from 'vue-router';
// import Lui from 'l-ui';
import Lui from '../src'
import routes from './routes';
import Layout from './layout';
Vue.use(Router);
Vue.use(Lui);
// Vue.use(Lbutton)
// console.log(Lui)

Vue.config.silent = false;
Vue.config.devtools = true;
let vm = new Vue({
    components: { Layout },
    router: new Router({ routes }),
    template: '<Layout/>'
}).$mount('#app');

window['LUI'] = vm;
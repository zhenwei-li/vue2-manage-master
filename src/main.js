import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
    if (to.matched.some( m => m.meta.auth)) {
        if(!isEmptyObject(store.state.userInfo)) {
            next();
        }
        else {
            next({
                path: '/',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})

function isEmptyObject(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}
//判断object是否为空

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})


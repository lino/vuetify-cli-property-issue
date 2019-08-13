import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

class TestClass {
	static prop = 'foo'
}

if(TestClass.prop === 'foo') {
	// something
}

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

class TestClass {
	static prop = 'foo'
}

if(TestClass.prop === 'foo') {
	// something
}

new Vue({
  render: h => h(App),
}).$mount('#app')

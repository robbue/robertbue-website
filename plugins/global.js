import Vue from 'vue';
import Reveal from '~/components/Reveal';
import Btn from '~/components/Btn';

Vue.component('reveal', Reveal);
Vue.component('btn', Btn);

/*
export default ({ app }, inject) => {
	console.log('app', app);

	Vue.mixin({
    mounted: function () {
	    console.log('test created', this.$el);
    }
  })
};
*/

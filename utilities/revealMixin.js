import Reveal from '~/components/Reveal.vue';
import Vue from 'vue';

export default {
	mounted2: function () {
		console.log('MOUNTED!!!');

		const elements = this.$el.querySelectorAll('[data-reveal]');

		[...elements].forEach((el) => {
			const revealDiv = document.createElement('div');
			revealDiv.classList = 'reveal';
			el.appendChild(revealDiv);
		});
	},

	mounted: function () {
		const elements = this.$el.querySelectorAll('[data-reveal]');

		[...elements].forEach((el) => {
			const revealDiv = document.createElement('div');
			revealDiv.classList = 'reveal';
			const myComp = new Vue(Reveal).$mount(revealDiv);

			console.log('myComp', myComp);

			el.appendChild(revealDiv);


		});

		/*
		var child = new Child({
    	el: this.$el.querySelector('.child-host'),
    	parent: this,
    });
		*/
  }
};

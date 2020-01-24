<template>
  <div class="page" ref="page">
    <div class="row content" itemscope itemtype="http://schema.org/Person" ref="content">
			<page-header>
				<push-in>
					<h1 class="heading" ref="heading">
						<reveal ref="reveal1" primaryColor>Get to </reveal><br />
						<reveal ref="reveal2" primaryColor>know me</reveal>
					</h1>
				</push-in>
				<top-header text="Work and life" :active="topHeaderActive" mainHeader ref="topHeader" />
				<link itemprop="email" v-bind:href="$store.state.email">
				<link itemprop="sameAs" href="https://www.instagram.com/robbue/">
				<link itemprop="sameAs" href="https://twitter.com/robert_bue">
				<link itemprop="sameAs" href="https://www.linkedin.com/in/robert-bue/">
			</page-header>

			<push-in>
				<section class="bio">
					<div class="bioHeader">
						<h2 class="sectionHeading" ref="bioHeader">Bio</h2>
					</div>

					<div class="columns" ref="columns">
						<div class="col col1">
							<p class="intro">My name is <strong>Robert Bue</strong>, I am {{ this.currentYear }} years old, working at <strong>Good Morning Naug (previously Good Morning) in Oslo, Norway</strong>. In my position as <strong>Technical Director</strong>, I’m responsible for the developers and the quality of work delivered by the agency on our tech projects. The rest of my time I work as developer.</p>

							<p>All though I have worked most of my life as a developer, I have a <strong>studied interaction design</strong> and I enjoy combining code with design and animation to create the best possible experience for the user. <strong>My profession is one of my strongest passions</strong>, and I spend a lot of time trying out technologies and optimizing my work.</p>

							<p>One of my other passions is running, and I'm a marathon-/ultra runner that help me to to stay in shape, and push my physical as well as my personal boundaries outside of my work.</p>
						</div>
					</div>
				</section>

				<div class="items" ref="items">
					<div class="col colLeft">
						<list-section heading="Awards">
							<div class="awards">
								<section-item inline>
									<span class="award-icon --fwa">
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 84.1 25">
											<path d="M78.6,7h-1.3V5.6c0-2-1.1-3.9-2.9-4.9C73.6,0.2,72.6,0,71.7,0H54.9c-1.2,0-2.4,0.4-3.4,1.2
												c-0.7,0.5-1.2,1.1-1.6,1.8l0,0l0,0l-2.3,4.3c0,0-2.7-5.3-3.5-5.9C43,0.5,41.7,0,40.4,0c-0.8,0-1.7,0.2-2.4,0.6
												c-1.5,0.7-2.3,2-2.9,3.5l-1.8,3.3l-2.1-4.2c-0.6-1.1-1.5-2-2.6-2.6C27.7,0.2,26.9,0,26,0H12.4c-0.9,0-1.8,0.2-2.7,0.7
												C8,1.6,6.9,3.5,6.9,5.6V7H5.6C2.5,7,0,9.5,0,12.6s2.5,5.6,5.6,5.6h1.3v1.3c0,3.1,2.5,5.6,5.6,5.6c3.1,0,5.6-2.5,5.6-5.6v-1.3h4.9
												c1.1,0,2.1-0.3,2.9-0.8l2.2,4.3c0.1,0.2,0.2,0.5,0.4,0.7c1,1.7,2.8,2.7,4.8,2.7c0.8,0,1.7-0.2,2.4-0.6c1.4-0.7,2.5-1.8,3.1-3.2
												l1.6-3.5l2,3.9c0.1,0.2,0.2,0.5,0.4,0.7c1,1.7,2.8,2.7,4.8,2.7c0.8,0,1.7-0.2,2.4-0.5c1.3-0.6,2.3-1.7,2.8-3c0.8,2,2.8,3.5,5.2,3.5
												l14,0c3.1,0,5.6-2.4,5.6-5.5v-1.3h1.3c3.1,0,5.6-2.5,5.6-5.6S81.6,7,78.6,7z M78.6,14.4h-5v4.9c0,1-0.8,1.8-1.8,1.8
												c-0.2,0-14,0-14,0c-1,0-1.8-0.8-1.8-1.8v-6.8h0c0-1,0.8-1.7,1.8-1.7h12.2V7.4h-14l-6.7,12.4c-0.1,0.5-0.5,1-1,1.3
												c-0.3,0.1-0.5,0.2-0.8,0.2c-0.6,0-1.2-0.3-1.6-0.9c-0.1-0.1-0.1-0.2-0.2-0.3L40.4,9.7l-5.3,10.1c-0.2,0.5-0.6,1-1.1,1.3
												c-0.3,0.1-0.5,0.2-0.8,0.2c-0.6,0-1.2-0.3-1.6-0.9c-0.1-0.1-0.1-0.2-0.2-0.3L25,7.4H14.2v3.4h8.7c1,0,1.8,0.8,1.8,1.8
												c0,1-0.8,1.8-1.8,1.8h-8.7v5c0,1-0.8,1.8-1.8,1.8c-1,0-1.8-0.8-1.8-1.8v-5h-5c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8h5V5.6v0
												c0-0.7,0.4-1.3,1-1.6c0.3-0.1,0.6-0.2,0.9-0.2H26c0.3,0,0.6,0.1,0.8,0.2c0.4,0.2,0.7,0.5,0.9,0.9l5.4,10.6l5.4-10.1
												c0.3-0.6,0.4-1,1-1.3c0.3-0.1,0.5-0.2,0.8-0.2c0.5,0,0.9,0.2,1.2,0.5c0.3,0.3,0.5,0.4,0.7,0.9l5.1,10.3l5.7-10.6
												c0.1-0.3,0.4-0.5,0.6-0.6c0.3-0.3,0.7-0.4,1.2-0.4h16.9c0.3,0,0.6,0.1,0.9,0.2c0.6,0.3,1,0.9,1,1.6v0v5.2h5c1,0,1.8,0.8,1.8,1.8
												C80.4,13.6,79.6,14.4,78.6,14.4z"/>
											<path class="st0" d="M69.9,14.5v3H59.5v-3C59.5,14.5,70,14.4,69.9,14.5z"/>
										</svg>
									</span>
									<span class="highlight">x12</span>
								</section-item>
								<section-item inline>
									<span class="award-icon --awwwards">
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 208.6 25">
											<path class="st0" d="M127.3,18.4h-8.5l-2,6.2h-4.5l8.5-24.2h4.6l8.5,24.2h-4.5L127.3,18.4z M123.1,4.6c0,0-0.5,2.4-1,3.7l-2.1,6.5
											h6.3l-2.1-6.5C123.7,7,123.2,4.6,123.1,4.6L123.1,4.6z M123.1,4.6"/>
											<path class="st0" d="M140.4,0.4h7.8c2.6,0,3.8,0.2,4.9,0.7c2.4,1.1,4,3.4,4,6.6c0,2.9-1.5,5.6-4.1,6.6v0.1c0,0,0.3,0.3,0.8,1.2l5,9
											h-4.9l-4.8-9h-4.2v9h-4.4V0.4z M148.8,11.7c2.3,0,3.8-1.4,3.8-3.8c0-2.3-1-3.7-4.4-3.7h-3.3v7.6L148.8,11.7z M148.8,11.7"/>
											<path class="st0" d="M166.2,0.4h8.2c7.5,0,12.3,4.4,12.3,12.1c0,7.6-4.9,12.1-12.3,12.1h-8.2V0.4z M174.2,20.8c4.9,0,8-2.9,8-8.3
												c0-5.4-3.2-8.3-8-8.3h-3.6v16.6H174.2z M174.2,20.8"/>
											<path class="st0" d="M194.7,18.4c0,0,2.6,2.6,6,2.6c1.8,0,3.5-1,3.5-2.9c0-4.3-11.4-3.6-11.4-11c0-4,3.5-7,8.1-7
												c4.8,0,7.2,2.6,7.2,2.6l-1.9,3.6c0,0-2.3-2.1-5.4-2.1c-2,0-3.6,1.2-3.6,2.9c0,4.3,11.4,3.2,11.4,11c0,3.9-2.9,7.1-8,7.1
												c-5.4,0-8.3-3.3-8.3-3.3L194.7,18.4z M194.7,18.4"/>
											<path class="st0" d="M77.8,0.4l-4,16.7c-0.3,1.4-0.4,2.5-0.4,2.5h-0.1c0,0-0.1-1.2-0.4-2.5L68.6,0.4h-3.8l-4.4,16.7
											C60,18.5,60,19.7,60,19.7h-0.1c0,0-0.1-1.2-0.4-2.5L56.6,4.6l-2.1,9.1l2.7,10.8h5.1L66,10.3c0.4-1.6,0.6-3.2,0.6-3.2h0.1
											c0,0,0.2,1.6,0.6,3.2L71,24.6h5.1l6.2-24.2L77.8,0.4z M77.8,0.4"/>
											<path class="st0" d="M105.1,0.4l-4,16.7c-0.3,1.4-0.4,2.5-0.4,2.5h-0.1c0,0-0.1-1.2-0.4-2.5L95.9,0.4h-3.8l-4.4,16.7
											c-0.4,1.4-0.4,2.5-0.4,2.5h-0.1c0,0-0.1-1.2-0.4-2.5L83.9,4.6l-2.1,9.1l2.7,10.9h5.1l3.7-14.3c0.4-1.6,0.6-3.2,0.6-3.2H94
											c0,0,0.2,1.6,0.6,3.2l3.7,14.3h5.1l6.2-24.2H105.1z M105.1,0.4"/>
											<path class="st0" d="M15.1,18.4H6.6l-2,6.2H0L8.5,0.4h4.6l8.5,24.2h-4.5L15.1,18.4z M10.8,4.6c0,0-0.5,2.4-1,3.7l-2.1,6.5H14
											l-2.2-6.5C11.4,7,10.9,4.6,10.8,4.6L10.8,4.6z M10.8,4.6"/>
											<path class="st0" d="M45.6,17.1c0.4,1.4,0.4,2.6,0.4,2.6h0.1c0,0,0.1-1.2,0.4-2.6l4-16.7H55l-6.2,24.2h-5.1L40,10.3
											c-0.4-1.6-0.6-3.2-0.6-3.2h-0.1c0,0-0.2,1.6-0.6,3.2L35,24.6h-5.1L23.9,0.4h4.5l3.8,16.7c0.3,1.4,0.4,2.5,0.4,2.5h0.1
											c0,0,0.1-1.2,0.4-2.5l4.4-16.7h3.8L45.6,17.1z M45.6,17.1"/>
										</svg>
									</span>
									<span class="highlight">x9</span>
								</section-item>
								<p class="awardText">And <span class="highlight">30+ other medals and nominees</span> in <a href="https://www.webbyawards.com/" title="The Webby Awards" target="_blank">Webby</a>, <a href="https://www.lovieawards.eu/" title="The Lovie Awards" target="_blank">Lovie</a>, <a href="https://www.newyorkfestivals.com/" title="New York Festivals" target="_blank">New York Festivals</a>, <a href="http://cresta-awards.com/" title="Cresta International Advertising Awards" target="_blank">Cresta</a>, including norwegian awards <a href="https://www.gulltaggen.no/" title="Gulltaggen Awards" target="_blank">Gulltaggen</a>, <a href="http://gullblyanten.no/" title="Gullblyanten" target="_blank">Gullblyanten</a>, <a href="https://www.grafill.no/visuelt" title="Visuelt" target="_blank">Visuelt</a> and others.</p>
							</div>
						</list-section>

						<list-section heading="Experience">
							<section-detail>
								<span slot="left">
									<strong>Technical Director</strong><br />
									<a href="https://gmn.no/" title="Good Morning Naug - Strategi, Teknologi, Magi" target="_blank">Good Morning Naug</a>
								</span>
								<span slot="right">
									<time>Jul. 2016 - present</time>
									<span class="desc">previously Good Morning</span>
								</span>
					    </section-detail>

							<section-detail>
								<span slot="left">
									<strong>Developer</strong><br />
									<a href="https://gmn.no/" title="Good Morning - Creative agency in Oslo" target="_blank">Good Morning</a>
								</span>
								<span slot="right">
									<time>Jul. 2012 - present</time>
								</span>
					    </section-detail>

							<section-detail>
								<span slot="left">
									<strong>Interaction Designer</strong><br />
									<a href="https://www.nxta2n.no/" title="NXT/A2N Reklame & Digitalbyrå" target="_blank">NXT Oslo</a>
								</span>
								<span slot="right">
									<time>Aug. 2011 - Jul. 2012</time>
									<span class="desc">Design and development</span>
								</span>
					    </section-detail>

							<section-detail>
								<span slot="left">
									<strong>Developer & Designer</strong><br />
									<a href="#">Freelance</a>
								</span>
								<span slot="right">
									<time>2008 - 2012</time>
									<span class="desc">Design, front-end & back-end</span>
								</span>
					    </section-detail>
						</list-section>

						<list-section heading="Jury duty">
							<section-detail>
								<span slot="left">
									<a href="https://www.gulltaggen.no/" title="Gulltaggen Awards" target="_blank"><strong>Gulltaggen</strong></a><br />
									Juror
								</span>
								<span slot="right">
									<time>2019</time>
									<span class="desc">Craft - tech</span>
								</span>
					    </section-detail>

							<section-detail>
								<span slot="left">
									<a href="https://www.gulltaggen.no/" title="Gulltaggen Awards" target="_blank"><strong>Gulltaggen</strong></a><br />
									Jury leader
								</span>
								<span slot="right">
									<time>2018</time>
									<span class="desc">Craft - tech</span>
								</span>
					    </section-detail>

							<section-detail>
								<span slot="left">
									<a href="https://www.webbyawards.com/" title="Webby Awards" target="_blank"><strong>Webby Awards</strong></a><br />
									Juror
								</span>
								<span slot="right">
									<time>2018</time>
									<span class="desc"></span>
								</span>
					    </section-detail>

							<section-detail>
								<span slot="left">
									<a href="https://www.awwwards.com/" title="Awwwards" target="_blank"><strong>Awwwards</strong></a><br />
									Juror
								</span>
								<span slot="right">
									<time>2017</time>
									<span class="desc">Developers jury</span>
								</span>
					    </section-detail>

							<section-detail>
								<span slot="left">
									<a href="https://www.gulltaggen.no/" title="Gulltaggen Awards" target="_blank"><strong>Gulltaggen</strong></a><br />
									Juror
								</span>
								<span slot="right">
									<time>2016</time>
									<span class="desc">Craft & Branded Technology</span>
								</span>
					    </section-detail>

							<section-detail>
								<span slot="left">
									<a href="http://solvtaggen.no/" title="Sølvtaggen" target="_blank"><strong>Sølvtaggen</strong></a><br />
									Juror
								</span>
								<span slot="right">
									<time>2014 - 2017</time>
								</span>
					    </section-detail>
						</list-section>

						<!-- <list-section heading="Education">
							<section-detail>
								<span slot="left">
									<a href="https://www.gulltaggen.no/" title="Gulltaggen Awards" target="_blank"><strong>Interaction Design</strong></a><br />
									Norwegian School of Creative Studies
								</span>
								<span slot="right">
									<time>2010 - 2012</time>
								</span>
					    </section-detail>
						</list-section> -->
					</div>
					<div class="col colMiddle">
						<list-section heading="Trivia" class="trivia">
							<section-item>My personal best on a marathon is <span class="highlight">2h 46 min</span>, and my longest consecutive run is <span class="highlight">87km</span>.</section-item>
						</list-section>

						<list-section heading="Talks">
							<section-item>Building Kygo Life through craftsmanship (2016)<br /><span class="sub">Adobe Creative Meet Up</span></section-item>
							<section-item>WebGL in 2016 (2016)<br /><span class="sub">Framsia</span></section-item>
							<section-item>Building a brand (Kygo Life) (2016)<br /><span class="sub">Norges Kreative Høyskole</span></section-item>
							<section-item>JavaScript Animations (2015)<br /><span class="sub">NITH (now Westerdals)</span></section-item>
							<section-item>HTML5 og CSS3 sexyness – trends and features (2013)<br /><span class="sub">MakingWeb</span></section-item>
						</list-section>

						<list-section heading="Press">
							<section-item><a href="https://www.gulltaggen.no/2017/11/13/kjapp-prat-med-juryleder-handverk-produksjonteknisk-utvikling-robert-bue/" target="_blank">Quick chat with jury leader in Craft - tech, Gulltaggen (2017) <span class="highlight">[NO]</span></a></section-item>
							<section-item><a href="https://thefwa.com/interviews/robert-bue" target="_blank">FWA interview (2017)</a></section-item>
							<section-item><a href="https://www.awwwards.com/awwwards-interviews-robert-bue-from-good-morning.html" target="_blank">Awwwards Interview (2014)</a></section-item>
						</list-section>
					</div>
				</div>

				<div class="contact" ref="contact">
					<p><strong>Want me to speak</strong> at a <br />conference or meetup?</p>
					<btn href="/contact" class="large">Contact me</btn>
				</div>
			</push-in>
		</div>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import TopHeader from '~/components/TopHeader.vue';
import PushIn from '~/components/PushIn.vue';
import Btn from '~/components/Btn.vue';
import SectionDetail from '~/components/SectionDetail.vue';
import ListSection from '~/components/ListSection.vue';
import SectionItem from '~/components/SectionItem.vue';

import { mapGetters } from 'vuex';
import { TweenMax } from 'gsap';
import observeScroll from '~/utilities/observeScroll';
const variables = require('assets/variables')
let comp;

export default {
	components: {
    PageHeader,
		TopHeader,
		PushIn,
		Btn,
		SectionDetail,
		SectionItem,
		ListSection
  },

	data: function () {
    return {
			topHeaderActive: 1,
			currentYear: new Date().getFullYear() - 1989 - 1
		}
  },

	computed: {
    ...mapGetters([
      'preloaderStatus'
    ])
  },

	watch : {
		preloaderStatus: function (newValue, oldValue) {
			if (newValue === 'hidden' && oldValue === 'hiding') {
				this.complete();
			}
		}
	},

	head () {
    return {
      title: 'About Robert',
      meta: [
        { name: 'description', content: '' }
      ]
    }
  },

	methods: {
		intro: function() {
			this.fadeElements = [
				this.$refs.bioHeader,
				...this.$refs.columns.children[0].children,
				...this.$refs.items.children[0].children,
				...this.$refs.items.children[1].children,
				this.$refs.contact
			];

			this.revealElements = [
				this.$refs.topHeader.$refs.reveal,
				this.$refs.reveal1,
				this.$refs.reveal2
			];

			const revealTls = this.revealElements.map((el) => {
				return new TimelineMax()
				.set(el.$refs.content, { autoAlpha: 0, immediateRender: true })
				.set(el.$refs.reveal, { scaleX: 0, immediateRender: true })
				.to(el.$refs.reveal, 1, { scaleX: 1, ease: Expo.easeInOut })
				.set(el.$refs.content, { autoAlpha: 1 })
				.to(el.$refs.reveal, 0.6, { scaleX: 0, transformOrigin: '100% 50% 0px', ease: Expo.easeInOut });
			});

			this.introTL = new TimelineMax({ paused: true })
			.set(this.fadeElements, { autoAlpha: 0, y: -15, immediateRender: true })
			.set(this.$refs.topHeader.$refs.line, { scaleX: 0, immediateRender: true })
			.add(revealTls, 0, 'normal', 0.2)
			.to(this.$refs.topHeader.$refs.line, 0.6, { scaleX: 1, ease: Expo.easeInOut }, 'end')
			.staggerTo(this.fadeElements, 1, { autoAlpha: 1, y: 0, ease: Circ.easeOut }, 0.2, 'end')
			;
		},

		complete: function () {
			this.introTL.play();
		}
	},

	created () {
		comp = this;
  },

	mounted () {
		this.intro();

		if (!comp.transition) {
			this.$nextTick(function () {
				this.$store.dispatch('hidePreloader');
			});
		}
  },

	transition: {
		beforeEnter: function (el) {
			comp.transition = true;
	  },

		enter: function (el, done) {
	    done();
	  },

		afterEnter: function (el) {
			comp.complete();
		},

		leave: function (el, done) {
			const { page, content } = comp.$refs;

			TweenMax.to(content, 0.25, {
				autoAlpha: 0,
				ease: Power2.easeOut,
				onComplete: () => {
					this.mq = window.matchMedia(variables.mediaRanges['--medium']);
					if (!this.mq.matches) {
						TweenMax.to(window, 0.5, { scrollTo: 0, ease: Expo.easeInOut, onComplete: done });
					} else {
						done();
						// TweenMax.to(page, 0.5, { scrollTo: 0, ease: Expo.easeInOut, onComplete: done });
					}
				}
			});
	  }
	},

	scrollToTop: false
}
</script>

<style scoped>
.page {
	@media (--medium) {
		height: 100vh;
		overflow-y: auto;
	}

	& .content {
		padding-top: 150px;

		@media (--medium) {
			padding-bottom: 120px;
			padding-top: 12%;
		}

		& .heading {
			/*font-size: 50px;*/
		}

		& .bio {
			margin-bottom: 20px;

			@media (--medium) {
				margin-bottom: 50px;
			}

			& .bioHeader {
				width: 100%;
				lost-utility: clearfix;
			}

			& .columns {
				lost-flex-container: row;
				max-width: 1450px;
				max-width: 900px;
			}

			& .col {
				lost-column: 2/2;
			}

			& .colLarge {
				lost-column: 1/2;
			}

			& p {
				margin-bottom: 40px;

				font-size: 18px;
				line-height: 1.8;

				@media (--medium) {
					font-size: 20px;
				}
			}
		}

		& .awards {
			lost-utility: clearfix;

			& .award-icon {
				display: inline-block;
				width: 50px;
				height: auto;
				margin-right: 15px;
				vertical-align: middle;

				&.--fwa {
					width: 45px;
					height: 15px;
				}

				&.--awwwards {
					width: 80px;
					height: 10px;
				}

				& svg {
					vertical-align: top;
				}

				& path {
					fill: var(--color-white);
				}
			}
		}

		& .awardText {
			font-weight: var(--font-weight-normal);
			color: var(--color-grey);

			& .highlight {
				color: var(--color-white);
			}

			& a {
				color: var(--color-grey);

				&:hover {
					color: var(--color-white);
				}
			}
		}

		& .items {
			lost-flex-container: row;
			/*margin-top: 50px;*/
			max-width: 1450px;
			max-width: 1145px;

			& .col {
				lost-column: 12/12;

				@media (--medium) {
					lost-column: 1/2 0 100px;
				}
			}
		}

		& .trivia {
			max-width: 350px;
		}
	}

	& .contact {
		& p {
			margin-bottom: 30px;

			font-size: 18px;
		}

		& br {
			@media (--medium) {
				display: none;
			}
		}

		& .button {
			margin-bottom: 40px;
		}
	}
}
</style>

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
							<p class="intro">My name is <strong>Robert Bue</strong>, I am {{ this.currentYear }} years old, working at <strong>Good Morning Naug in Oslo, Norway</strong> with over <strong>{{ this.experience }}  years of experience</strong> in creating digital services and experiences. In my position as <strong>Technical Director</strong>, I’m responsible for the developers and the quality of work delivered by the agency in our tech projects. The rest of my time I work as full stack developer.</p>

							<p>All though I have worked most of my professional life as a developer, I have a <strong>studied interaction design</strong> and I enjoy combining code with design and animation to create the best possible experience for the user. <strong>My profession is one of my strongest passions</strong>, and I spend a lot of time trying out technologies and optimizing my work.</p>

							<p>One of my other passions is running, and I'm a marathon-/ultra runner that help me to to stay in shape, aw well as push my physical and mental boundaries.</p>
						</div>
					</div>
				</section>

				<div class="items" ref="items">
					<div class="col colLeft">
						<!--
						<list-section heading="Highlighted clients and projects">
							<div class="projects">
								<section-item>
									<span class="client-icon --nordvik">
										<a href="https://www.nordvibolig.no/" title="Nordvik Bolig" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 151.31 44.32"><g class="symbol"><path d="M22.16,44.32A22.16,22.16,0,1,1,44.32,22.16,22.19,22.19,0,0,1,22.16,44.32Zm0-42.73A20.57,20.57,0,1,0,42.73,22.16,20.59,20.59,0,0,0,22.16,1.59Z"></path><g><rect x="14.83" y="25.98" width="6.52" height="0.39" transform="translate(-13.21 20.46) rotate(-45)"></rect><rect x="22.9" y="17.91" width="6.52" height="0.39" transform="translate(-5.14 23.8) rotate(-45)"></rect><path d="M32,11.22l-2.88,2.91,1.15,1.15L31.53,14V30.41l-7.19-7.19h0l-12-12a14.88,14.88,0,0,0-1.2,1.21V31.93a14.88,14.88,0,0,0,1.18,1.19l2.88-2.92-1.15-1.15-1.29,1.33V13.93L32,33.12a14.89,14.89,0,0,0,1.2-1.21V12.41A14.88,14.88,0,0,0,32,11.22Z"></path></g></g><g class="text"><path d="M77.87,14h0a7.56,7.56,0,0,0-7.54,7.54v1.12a7.56,7.56,0,0,0,7.54,7.54h0a7.56,7.56,0,0,0,7.54-7.54V21.56A7.56,7.56,0,0,0,77.87,14Zm5.32,9.91a5.33,5.33,0,0,1-5.31,5.31h0a5.33,5.33,0,0,1-5.31-5.31V20.31A5.33,5.33,0,0,1,77.87,15h0a5.33,5.33,0,0,1,5.31,5.31Z"></path><path d="M107.65,14h-6.76l.82,1v14.2l-.82,1h6.76a7.56,7.56,0,0,0,7.53-7.54V21.56A7.56,7.56,0,0,0,107.65,14Zm5.3,9.91a5.33,5.33,0,0,1-5.31,5.31h-3.71V15h3.72a5.33,5.33,0,0,1,5.31,5.31Z"></path><polygon points="149.72 14.02 147.03 14.02 147.84 15 140.39 24.19 140.39 15 141.19 14.02 137.35 14.02 138.17 15.01 138.18 29.21 137.35 30.22 141.21 30.22 140.39 29.23 140.39 25.54 142.51 22.87 148.45 30.22 151.31 30.22 143.94 21.1 149.72 14.02"></polygon><polygon points="131.81 14.02 132.62 15.01 132.63 29.21 131.81 30.22 135.68 30.22 134.85 29.21 134.84 15 135.64 14.02 131.81 14.02"></polygon><polygon points="128.72 14.02 129.51 14.98 123.76 28.93 117.89 14.99 118.69 14.02 115.07 14.02 121.89 30.22 124.25 30.22 124.27 30.16 130.93 14.02 128.72 14.02"></polygon><path d="M86.29,14l.82,1v14.2l-.82,1h3.87l-.83-1V15h3.89a3.53,3.53,0,0,1,3.52,3.52v1.73a3.53,3.53,0,0,1-3.52,3.52H91.67l5.23,6.45h2.86L95.2,24.59A5,5,0,0,0,99,19.75V19a5,5,0,0,0-4.78-5H86.29Z"></path><polygon points="69.36 14.02 66.78 14.02 67.58 14.99 67.58 27.92 56.32 14.02 53.53 14.02 53.45 14.02 54.34 15.11 54.34 29.22 53.53 30.22 56.14 30.22 55.32 29.22 55.32 16.32 66.58 30.22 68.56 30.22 69.45 30.22 68.56 29.13 68.56 14.99 69.36 14.02"></polygon></g></svg></a>
									</span>
									<span class="highlight">Website, CMS & API</span><br />
									<span class="sub">Various projects and services as main website (<a href="https://nextjs.org/" target="_blank">Next.js</a> & <a href="https://styled-components.com/" target="_blank">styled-components</a>), API (<a href="hhttps://www.mongodb.com/" target="_blank">MongoDB</a>, <a href="https://graphql.org/" target="_blank">GraphQL</a> and <a href="https://www.serverless.com/" target="_blank">Serverless</a> on AWS Lambda), <a href="https://craftcms.com/" target="_blank">Craft CMS</a></span>
								</section-item>
								<section-item>
									<span class="client-icon --vh">
										<a href="https://www.vertikalhelse.no/" title="Vertikal Helse" target="_blank"><svg viewBox="0 0 500 145" xmlns="http://www.w3.org/2000/svg"><path class="st0" d="M39.5 49.2c.5-1.2.9-1.7 2.6-1.7h3c1.5 0 1.8.8 1.4 2L27.2 101c-.7 2-1.4 2.4-3.2 2.4h-2.7c-1.6 0-2.3-.5-3-2.5L.2 49.6c-.4-1.2-.1-2 1.4-2h3.3c1.7 0 2.1.5 2.5 1.7l15.5 44.8 16.6-44.9zM101.3 101.4c0 1.4-.4 1.8-1.8 1.8h-2.7c-1.4 0-1.8-.4-1.8-1.8V78c0-6.1 1.2-9.3 4-12.4 2.7-2.8 6.8-4.3 11.5-4.3 2.2 0 4.8.3 6.6.7.9.3 1.2.6 1.2 1.7v2.6c0 .9-.3 1.3-1.4 1.2-1.4-.1-4.1-.3-5.5-.3-3.3 0-5.9.8-7.6 2.5-2 2-2.7 4.5-2.7 10v21.7zM135.2 85.2c0 5.5.7 8 2.7 10 1.7 1.7 4.2 2.5 7.6 2.5 1.6 0 3.9-.3 5.5-.5 1-.2 1.4.2 1.4 1.2v2.7c0 1-.3 1.4-1.2 1.7-1.9.5-4.6.7-6.6.7-4.7 0-8.9-1.5-11.5-4.3-2.8-3.1-4-6.2-4-12.4V67.3h-4.5c-1.1 0-1.5-.5-1.5-1.6v-2.4c0-1.1.4-1.6 1.5-1.6h4.5v-7.8c0-1.4.4-1.8 1.8-1.8h2.7c1.4 0 1.8.4 1.8 1.8v7.8h12.5c1.1 0 1.5.5 1.5 1.6v2.4c0 1.1-.4 1.6-1.5 1.6h-12.5v17.9zM163.9 46.7c2.7 0 5 2.3 5 5s-2.3 5-5 5-5-2.3-5-5c0-2.6 2.3-5 5-5zm-3.2 16.8c0-1.4.4-1.8 1.8-1.8h2.7c1.4 0 1.8.4 1.8 1.8v37.9c0 1.4-.4 1.8-1.8 1.8h-2.7c-1.4 0-1.8-.4-1.8-1.8V63.5zM181.1 46.1c0-1.4.4-1.8 1.8-1.8h2.7c1.4 0 1.8.4 1.8 1.8v55.3c0 1.4-.4 1.8-1.8 1.8h-2.7c-1.4 0-1.8-.4-1.8-1.8V46.1zm33.6 55.6c.7.8.4 1.5-.6 1.5h-4c-1.6 0-2.1-.3-3-1.4l-13-15.2c-1.5-1.7-1.8-2.3-1.8-3.7v-.6c0-1.5.3-2.2 1.7-3.7l13.1-15.4c.9-1.1 1.4-1.4 3-1.4h4.3c1 0 1.3.7.6 1.5l-16.4 19.1c-.2.2-.2.4 0 .6l16.1 18.7zM238.5 61.4c4.9 0 10.5 1.7 14.2 5.3 3.2 3.2 5.1 7.1 5.1 13.3v21.4c0 1.4-.4 1.8-1.8 1.8h-2.7c-1.4 0-1.8-.4-1.8-1.8V82c0-5-.9-8.2-3.6-10.9-2.4-2.4-5.9-3.7-9.4-3.7-3.4 0-7 1.3-9.4 3.7-2.7 2.7-3.6 5.9-3.6 10.9v1c0 5 .9 8.4 3.6 11 2.4 2.4 5.8 3.7 10 3.7 2.3 0 4.7-.5 6.3-1.2.7-.3 1 .1 1 .7v3.6c0 .7-.2 1.2-.9 1.5-1.7.7-4.2 1.2-6.9 1.2-5.4 0-10.4-1.6-14.2-5.2-3.2-3.2-5.1-7.2-5.1-13.6V80c0-6.2 1.9-10.1 5.1-13.3 3.8-3.6 9.2-5.3 14.1-5.3zM269 1.8c0-1.4.4-1.8 1.8-1.8h2.7c1.4 0 1.8.4 1.8 1.8v99.6c0 1.4-.4 1.8-1.8 1.8h-2.7c-1.4 0-1.8-.4-1.8-1.8V1.8zM80.9 66.7c-3.7-3.6-9.3-5.3-14.2-5.3s-9.6 1.7-13.4 5.3c-3.2 3.2-5.1 7.1-5.1 13.3v5c0 6.2 1.9 10.1 5.1 13.3 3.7 3.6 9.2 5.3 15.4 5.3 3.9 0 9.1-.7 12.2-2 .7-.3.9-.7.9-1.5V97c0-.8-.3-1.3-1.3-1.1-3.7 1.1-8 1.7-11.8 1.7-4.4 0-8.2-1.3-10.7-3.8-2.1-2.1-3.1-4.7-3.4-8.1h28c2.7 0 3.4-.9 3.4-3.5V80c0-6.3-1.9-10.2-5.1-13.3zM79.7 80H54.5v-.3c0-7.4 4.2-12.3 12-12.3s13.2 4.9 13.2 12.3v.3z"/><path class="st1" d="M313.1 142.9c0 1.4-.6 2-2 2h-2.8c-1.4 0-2-.6-2-2V49.6c0-1.4.6-2 2-2h2.8c1.4 0 2 .6 2 2v93.3zm7.4-64.4c-1.4 0-2-.6-2-2v-2.2c0-1.4.6-2 2-2h23V49.6c0-1.4.6-2 2-2h2.8c1.4 0 2 .6 2 2v51.7c0 1.4-.6 2-2 2h-2.8c-1.4 0-2-.6-2-2V78.5h-23zM440.2 61.4c3.5 0 7.1.5 9.9 1.4.8.2 1.2.6 1.2 1.6v2.8c0 .9-.6 1.2-1.4 1-3.2-.7-6.3-1.2-9.3-1.2-5.2 0-9.1 2.2-9.1 6.2 0 8.7 22.5 3.3 22.5 18.1 0 3.7-1.4 6.6-3.7 8.6-2.7 2.4-7.3 3.6-12.4 3.6-3.7 0-7.6-.5-11-1.4-1.1-.3-1.5-.9-1.5-1.9v-2.5c0-1 .4-1.7 1.7-1.3 3.5.9 7.3 1.5 10.3 1.5 5.6 0 10.3-1.8 10.3-6.3 0-9.4-22.5-3.3-22.5-18 0-8 6.3-12.2 15-12.2zM408.2 46.1c0-1.4.4-1.8 1.8-1.8h2.7c1.4 0 1.8.4 1.8 1.8v55.3c0 1.4-.4 1.8-1.8 1.8H410c-1.4 0-1.8-.4-1.8-1.8V46.1zM393.7 66.7c-3.7-3.6-9.3-5.3-14.2-5.3s-9.6 1.7-13.4 5.3c-3.2 3.2-5.1 7.1-5.1 13.3v5c0 6.2 1.9 10.1 5.1 13.3 3.7 3.6 9.2 5.3 15.4 5.3 3.9 0 9.1-.7 12.2-2 .7-.3.9-.7.9-1.5V97c0-.8-.3-1.3-1.3-1.1-3.7 1.1-8 1.7-11.8 1.7-4.4 0-8.2-1.3-10.7-3.8-2.1-2.1-3.1-4.7-3.4-8.1h28c2.7 0 3.4-.9 3.4-3.5V80c.1-6.3-1.8-10.2-5.1-13.3zM392.6 80h-25.2v-.3c0-7.4 4.2-12.3 12-12.3s13.2 4.9 13.2 12.3v.3zM494.9 66.7c-3.7-3.6-9.3-5.3-14.2-5.3s-9.6 1.7-13.4 5.3c-3.2 3.2-5.1 7.1-5.1 13.3v5c0 6.2 1.9 10.1 5.1 13.3 3.7 3.6 9.2 5.3 15.4 5.3 3.9 0 9.1-.7 12.2-2 .7-.3.9-.7.9-1.5V97c0-.8-.3-1.3-1.3-1.1-3.7 1.1-8 1.7-11.8 1.7-4.4 0-8.2-1.3-10.7-3.8-2.1-2.1-3.1-4.7-3.4-8.1h28c2.7 0 3.4-.9 3.4-3.5V80c0-6.3-1.9-10.2-5.1-13.3zM493.7 80h-25.2v-.3c0-7.4 4.2-12.3 12-12.3s13.2 4.9 13.2 12.3v.3z"/></svg></a>
									</span>
									<span class="highlight">Website</span><br />
									<span class="sub">Craft CMS</span>
								</section-item>
								<section-item>
									<span class="client-icon --defa">
										<a href="https://apps.apple.com/no/app/cloudcharge/id1448473172" title="CloudCharge app for DEFA" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-8590.868 29.5 52.721 25.98"><g transform="translate(-8590.868 29.5)"><path class="a" d="M3.968,0,0,25.98H52.721L48.753,0ZM3.261,23.371,6.25,2.718H46.362l3.207,20.653ZM12.338,4.783H8.37L5.979,21.306H9.892c5.544,0,6.9-3.424,7.772-9.294S15.218,4.783,12.338,4.783Zm1.848,7.935c-.544,3.913-1.9,5.055-3.207,5.055H9.946l1.467-9.4H12.5C13.86,8.37,14.621,9.511,14.186,12.718ZM36.47,11.142H32.393l.544-2.881h5.272l.544-3.424H30L27.447,21.306H30.98l1.033-6.631h3.968ZM21.958,14.621h3.859l.544-3.642H22.393l.38-2.826h5.381l.489-3.37h-8.8l-2.5,16.468h8.8l.489-3.478H21.36ZM40.927,4.783,34.459,21.306H38.1l.924-2.283h3.75l.38,2.283h3.587L44.188,4.783Zm-.6,10.707,1.359-3.968.544,3.968Z"/></g></svg></a>
									</span>
									<span class="highlight">iOS and Android App</span><br />
									<span class="sub"><a href="https://reactnative.dev/" target="_blank">React Native</a> & <a href="https://redux.js.org/" target="_blank">Redux</a></span>
								</section-item>
								<p class="awardText">And <span class="highlight">70+ other projects</span> I have worked on at Good Morning Naug or as freelancer.</p>
							</div>
						</list-section>
						-->

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
									<a href="https://www.gmn.no/" title="Good Morning Naug - Strategi, Teknologi, Magi" target="_blank">Good Morning Naug</a>
								</span>
								<span slot="right">
									<time>Jul. 2016 - present</time>
									<span class="desc">previously Good Morning</span>
								</span>
					    </section-detail>

							<section-detail>
								<span slot="left">
									<strong>Full Stack Developer</strong><br />
									<a href="https://www.gmn.no/" title="Good Morning - Creative agency in Oslo" target="_blank">Good Morning</a>
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
									<time>2020</time>
									<span class="desc">Design & technology</span>
								</span>
					    </section-detail>

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
							<section-item>My personal best on a marathon is <a href="https://www.strava.com/activities/4210191823" title="Strava proof" target="_blank"><span class="highlight">2h 37 min</span></a>, and my longest consecutive run is <span class="highlight">12h</span>.</section-item>
						</list-section>

						<list-section heading="Preferred stack (currently)">
							<div class="stack">
								<section-item>React with Next.js, styled-components & GraphQL<br /><span class="sub">Front-end</span></section-item>
								<section-item>Node.js, Serverless & MongoDB<br /><span class="sub">Back-end</span></section-item>
								<section-item>React Native<br /><span class="sub">App development</span></section-item>
								<section-item>AWS & Heroku<br /><span class="sub">Cloud services</span></section-item>
							</div>
						</list-section>

						<list-section heading="Press">
							<section-item><a href="https://www.kode24.no/artikkel/laer-a-gi-et-bilde-3d-effekt-med-webgl/73828604" target="_blank">Creating a 3D-effect on images with WebGL (2021) <span class="highlight">[NO]</span></a></section-item>
							<section-item><a href="https://www.kode24.no/koden-bak/haper-a-bytte-ut-craft-cms-med-sanity/73198247" target="_blank">Kode24.no interview (2021) <span class="highlight">[NO]</span></a></section-item>
							<section-item><a href="https://www.digi.no/artikler/intervju-for-a-se-at-han-utviklet-seg-kikker-robert-iblant-pa-den-forste-websiden-han-lagde/503077?key=qxYxui4v" target="_blank">Digi.no interview (2020) <span class="highlight">[NO]</span></a></section-item>
							<section-item><a href="https://www.gulltaggen.no/2017/11/13/kjapp-prat-med-juryleder-handverk-produksjonteknisk-utvikling-robert-bue/" target="_blank">Quick chat with jury leader in Craft - tech, Gulltaggen (2017) <span class="highlight">[NO]</span></a></section-item>
							<section-item><a href="https://thefwa.com/interviews/robert-bue" target="_blank">FWA interview (2017)</a></section-item>
							<section-item><a href="https://www.awwwards.com/awwwards-interviews-robert-bue-from-good-morning.html" target="_blank">Awwwards Interview (2014)</a></section-item>
						</list-section>

						<list-section heading="Talks">
							<section-item>Building Kygo Life through craftsmanship (2016)<br /><span class="sub">Adobe Creative Meet Up</span></section-item>
							<section-item>WebGL in 2016 (2016)<br /><span class="sub">Framsia</span></section-item>
							<section-item>Building a brand (Kygo Life) (2016)<br /><span class="sub">Norges Kreative Høyskole</span></section-item>
							<section-item>JavaScript Animations (2015)<br /><span class="sub">NITH (now Westerdals)</span></section-item>
							<section-item>HTML5 og CSS3 sexyness – trends and features (2013)<br /><span class="sub">MakingWeb</span></section-item>
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
			currentYear: new Date().getFullYear() - 1989 - 1,
			experience: new Date().getFullYear() - 2008 - 1
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
				{ hid: 'description', name: 'description', content: 'My name is Robert and I have over 12 years of professional experience in creating digital services and experiences' },
				{ name: 'og:title', content: 'About Robert' },
	      { name: 'og:description', content: `My name is Robert and I have over 12 years of professional experience in creating digital services and experiences` }
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
		if (process.browser && window) {
			const LocomotiveScroll = require('locomotive-scroll/dist/locomotive-scroll.min.js');

			this.scroll = new LocomotiveScroll({
				el: this.$refs.page,
				smooth: true,
				smoothMobile: false
			});
		}

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
					if (this.scroll) this.scroll.destroy();

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
		/* height: 100vh; */
		/* overflow-y: auto; */
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

		& .projects {
			lost-utility: clearfix;

			& .text {
				margin: 5px 0 25px 0;
			}

			& .text .sub {
				display: block;
				margin-top: 5px;

				& a {
					color: var(--color-grey);

					&:hover {
						color: var(--color-white);
					}
				}
			}

			& .client-icon {
				display: inline-block;
				height: auto;
				margin-right: 15px;
				vertical-align: middle;
				/* min-width: 105px; */
				/* opacity: 0.8; */

				& a {
					display: block;
				}

				&.--nordvik {
					& a {
						width: 90px;
					}
				}

				&.--vh {
					& a {
						width: 100px;
					}
				}

				&.--defa {
					& a {
						width: 35px;
					}
				}

				& svg {
					vertical-align: top;
				}

				& path, & polygon {
					fill: var(--color-white);
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

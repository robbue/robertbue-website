/* eslint-disable */

const observeScroll = (element, callback) => {
	const observer = new IntersectionObserver(([entry]) => {
		console.log('entry', entry.intersectionRatio);
		if (entry.intersectionRatio < 0.2) return;
		callback();

		// Stop watching the element
		observer.disconnect();
	}, {
		// root: null,
    // rootMargin: "0px",
    threshold: 0.2
	});

	// Start watching the element
	observer.observe(element);

	return observer;
};

export default observeScroll;

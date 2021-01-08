const actions = {
	subscribe: 'subscribe',
	read: 'read',
}

const setGoals = () => {
	for (const name in actions) {
		const elem = document.getElementById(actions[name]);

		elem && elem.addEventListener('click', () => {
			ym && ym(65212666,'reachGoal',`click_${name}` );
			gtag && gtag('event', 'click', {
				'event_label': name
			});
		}, false);

	}
}

const init = () => {
	if (document.readyState !== 'loading') {
	    setGoals();
	} else {
	    document.addEventListener('DOMContentLoaded', setGoals);
	}
}

export default {
	init
}





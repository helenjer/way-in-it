const stores = {
	litres: 'download_litres',
	ozon: 'buy_ozon',
	bookmate: 'link_bookmate',
	amazon: 'link_amazon',
	ridero: 'link_ridero'
}

const setGoals = () => {
	for (const name in stores) {
		const elem = document.getElementById(stores[name]);

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





import i18n from 'i18next';
import { capitalize } from 'lodash';
import { initReactI18next } from 'react-i18next';

const resources = {
	en: {
		translation: require('../i18n/en.json'),
	},
};

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: 'en',
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
			format: (value, format, lng) => {
				if (format === 'uppercase') return value.toUppercase();
				if (format === 'lowercase') return value.toLowerCase();
				if (format === 'capitalize') return capitalize(value);
			}
		},
		debug: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development'),
	});

export default i18n;
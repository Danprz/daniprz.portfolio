import english from './en.json'
import spanish from './es.json'
import francais from './fr.json'

const LANG = {
  ENGLISH: 'en',
  SPANISH: 'es',
  FRANCAIS: 'fr'
}

export const getI18N = ({
	currentLocale = 'fr',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.SPANISH) return {...francais, ...spanish};
	if (currentLocale === LANG.ENGLISH) return {...francais, ...english};
	return francais;
};
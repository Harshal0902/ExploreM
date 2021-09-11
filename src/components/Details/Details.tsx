import { useTranslation } from 'react-i18next'

export default function Details() {

    const { t } = useTranslation();

    return (
        <div className="bg-primaryBg p-8 font-fontVollkorn text-white" id="details">
            <div className="px-16 py-8">
                <h1 className="text-5xl ">{t('detailsNamesake')}</h1>
                <p className="text-2xl">{t('detailsNamesakeDetails')}</p>
            </div>

            <div className="px-16 py-8">
                <h1 className="text-5xl ">{t('detailsPotenLife')}</h1>
                <p className="text-2xl">{t('detailsPotenLifeDesc')}</p>
            </div>

            <div className="px-16 py-8">
                <h1 className="text-5xl ">{t('detailsSize')}</h1>
                <p className="text-2xl">{t('detailsSizeDesc')}</p>
            </div>

            <div className="px-16 py-8">
                <h1 className="text-5xl ">{t('detailsOrbit')}</h1>
                <p className="text-2xl"> {t('detailsOrbitDesc1')}<br />
                    {t('detailsOrbitDesc2')}<br />
                    {t('detailsOrbitDesc3')}</p>
            </div>
        </div>
    )
}

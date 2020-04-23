import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

const AboutTab = () => {
  const { t } = useTranslation('rightSidebar');

  return (
    <div>
      <hr className="my-5" />

      <div className="shadow text-center p-5">
        <h1 className="font-bold text-6xl lg:text-2xl mb-2">{t('about.bugOrFeatureRequest.heading')}</h1>

        <div className=" text-5xl lg:text-xl">{t('about.bugOrFeatureRequest.body')}</div>

        <div className="grid grid-cols-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:ileriayoadebiyi@gmail.com?subject=Bug Report/ Feature Request In Ministry Report App"
            className="mt-4 mx-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-5 rounded"
          >
            <div className="flex justify-center items-center">
              <i className="material-icons mr-2 font-bold text-base">email</i>
              <span className="text-5xl lg:text-sm">{t('about.bugOrFeatureRequest.buttons.sendEmail')}</span>
            </div>
          </a>
        </div>
      </div>

      <hr className="my-5" />

      <div className="shadow text-center p-5">
        <h1 className="font-bold text-6xl lg:text-2xl mb-2">{t('about.license.heading')}</h1>

        <div className=" text-5xl lg:text-xl">{t('about.license.body')}</div>

        <div className="grid grid-cols-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Ileriayo/Ministry-Report-App/blob/master/LICENSE"
            className="mt-4 mx-auto bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium py-2 px-5 rounded"
          >
            <div className="flex justify-center items-center">
              <i className="material-icons mr-2 font-bold text-base">policy</i>
              <span className="text-5xl lg:text-sm">{t('about.license.buttons.mitLicense')}</span>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-5">
        <p className=" text-1xl lg:text-xs font-gray-600 text-center">
          <Trans t={t} i18nKey="about.footer.credit">
            Ministry Report App is a project by
            <a
              className="font-bold hover:underline"
              href="https://ileriayo.github.io/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Ileriayo Adebiyi
            </a>
            .
          </Trans>
        </p>
      </div>
    </div>
  );
};

export default AboutTab;

/* eslint-disable no-alert */
import React, { useContext /* , { useRef */ } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import PageContext from '../../../context/PageContext';
import { saveAsPdf } from '../../../utils';

const ActionsTab = ({ dispatch }) => {
  const pageContext = useContext(PageContext);
  const { pageRef, panZoomRef } = pageContext;
  const { t } = useTranslation('rightSidebar');

  const resetEverything = () => {
    dispatch({ type: 'reset' });
    dispatch({ type: 'save_data' });
  };

  return (
    <div>
      <div className="shadow text-center p-5">
        <h1 className="font-bold xs:text-6xl lg:text-sm mb-2">{t('actions.emailReport.heading')}</h1>

        <div className="xs:text-5xl lg:text-sm">
          <Trans t={t} i18nKey="actions.emailReport.body" />
        </div>

        <div className="grid grid-cols-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:martinsawe@gmail.com?subject=Ministry Report App"
            className="mt-4 mx-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-5 rounded"
          >
            <div className="flex justify-center items-center">
              <i className="material-icons mr-2 font-bold xs:text-3xl lg:text-base">email</i>
              <span className="xs:text-5xl lg:text-sm">{t('actions.emailReport.buttons.send')}</span>
            </div>
          </a>
        </div>
      </div>
      
      <hr className="my-6" />
      
      <div className="shadow text-center p-5">
        <h1 className="font-bold xs:text-6xl lg:text-sm mb-2">{t('actions.downloadPDF.heading')}</h1>

        <div className="xs:text-5xl lg:text-sm">
          <Trans t={t} i18nKey="actions.downloadPDF.body" />
        </div>

        <button
          type="submit"
          onClick={() => saveAsPdf(pageRef, panZoomRef)}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-5 rounded"
        >
          <div className="flex justify-center items-center">
            <i className="material-icons mr-2 font-bold text-base">save</i>
            <span className="xs:text-5xl lg:text-sm">{t('actions.downloadPDF.buttons.pdf')}</span>
          </div>
        </button>
      </div>
      
      <hr className="my-6" />

      <div className="shadow text-center xs:text-5xl lg:text-sm p-5">{t('actions.disclaimer')}</div>

      <hr className="my-6" />

      <div className="shadow text-center p-5">
        <h1 className="font-bold xs:text-6xl lg:text-sm mb-2">{t('actions.reset.heading')}</h1>

        <div className=" xs:text-5xl lg:text-sm">{t('actions.reset.body')}</div>

        <button
          type="button"
          onClick={() => window.confirm('Are you sure?', resetEverything())}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-5 rounded"
        >
          <div className="flex justify-center items-center">
            <i className="material-icons mr-2 font-bold text-base">refresh</i>
            <span className="xs:text-5xl lg:text-sm">{t('actions.reset.buttons.reset')}</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ActionsTab;

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
        <h6 className="font-bold text-sm mb-2">{t('actions.printReport.heading')}</h6>

        <div className="text-sm">
          <Trans t={t} i18nKey="actions.printReport.body" />
        </div>

        <button
          type="submit"
          onClick={() => saveAsPdf(pageRef, panZoomRef)}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-5 rounded"
        >
          <div className="flex justify-center items-center">
            <i className="material-icons mr-2 font-bold text-base">save</i>
            <span className="text-sm">{t('actions.printReport.buttons.pdf')}</span>
          </div>
        </button>
      </div>
      
      <hr className="my-6" />

      <div className="shadow text-center text-sm p-5">{t('actions.disclaimer')}</div>

      <hr className="my-6" />

      <div className="shadow text-center p-5">
        <h6 className="font-bold text-sm mb-2">{t('actions.reset.heading')}</h6>

        <div className="text-sm">{t('actions.reset.body')}</div>

        <button
          type="button"
          onClick={() => window.confirm('Are you sure?', resetEverything())}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-5 rounded"
        >
          <div className="flex justify-center items-center">
            <i className="material-icons mr-2 font-bold text-base">refresh</i>
            <span className="text-sm">{t('actions.reset.buttons.reset')}</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ActionsTab;

/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext /*, { useRef */ } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import PageContext from '../../../context/PageContext';
import { saveAsPdf } from '../../../utils';

const ActionsTab = ({ data, theme, dispatch }) => {
  const pageContext = useContext(PageContext);
  const { pageRef, panZoomRef } = pageContext;
  const { t } = useTranslation('rightSidebar');
  // const fileInputRef = useRef(null);

  // const importJson = event => {
  //   const fr = new FileReader();
  //   fr.addEventListener('load', () => {
  //     const importedObject = JSON.parse(fr.result);
  //     dispatch({ type: 'import_data', payload: importedObject });
  //     dispatch({ type: 'save_data' });
  //   });
  //   fr.readAsText(event.target.files[0]);
  // };

  // const exportToJson = () => {
  //   const backupObj = { data, theme };
  //   const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(backupObj))}`;
  //   const dlAnchor = document.getElementById('downloadAnchor');
  //   dlAnchor.setAttribute('href', dataStr);
  //   dlAnchor.setAttribute('download', `MinistrReportBackup_${Date.now()}.json`);
  //   dlAnchor.click();
  // };

  // const loadDummyData = () => {
  //   dispatch({ type: 'load_dummy_data' });
  //   dispatch({ type: 'save_data' });
  // };

  const resetEverything = () => {
    dispatch({ type: 'reset' });
    dispatch({ type: 'save_data' });
  };

  return (
    <div>
      <div className="shadow text-center p-5">
        <h6 className="font-bold text-sm mb-2">{t('actions.printReport.heading')}</h6>

        <div className="text-sm">
          <Trans t={t} i18nKey="actions.printReport.body">
            You can simply press <pre className="inline font-bold">Cmd/Ctrl + P</pre> at any time
            while you&apos;re in the app to print your report.
          </Trans>
        </div>

        <button
          type="button"
          onClick={() => window.print()}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-5 rounded"
        >
          <div className="flex justify-center items-center">
            <i className="material-icons mr-2 font-bold text-base">print</i>
            <span className="text-sm">{t('actions.printReport.buttons.print')}</span>
          </div>
        </button>

        <span className="mr-1"></span>

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
          onClick={() => window.confirm('Are you sure?', resetEverything)}
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

import React, { useRef, useEffect, useContext, Suspense } from 'react';
// import { useTranslation } from 'react-i18next';
import { PanZoom } from 'react-easy-panzoom';

import AppContext from '../../context/AppContext';
import PageContext from '../../context/PageContext';

import LeftSidebar from '../LeftSidebar/LeftSidebar';
// import RightSidebar from '../RightSidebar/RightSidebar';

import templates from '../../templates';
import PageController from '../../shared/PageController';

const App = () => {
  const pageRef = useRef(null);
  const panZoomRef = useRef(null);
  // const { i18n } = useTranslation();

  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { theme, /* settings */ } = state;
  
  const pageContext = useContext(PageContext);
  
  const { setPageRef, setPanZoomRef } = pageContext;

  // useEffect(() => {
  //   i18n.changeLanguage(settings.language);
  //   const storedState = JSON.parse(localStorage.getItem('state'));
  //   dispatch({ type: 'import_data', payload: storedState });
  // }, [dispatch, i18n, settings.language]);

  useEffect(() => {
    setPageRef(pageRef);
    setPanZoomRef(panZoomRef);
    const storedState = JSON.parse(localStorage.getItem('state'));
    dispatch({ type: 'import_data', payload: storedState });
  }, [dispatch, setPageRef, setPanZoomRef]);

  return (
    <Suspense fallback="Loading...">
      <div className="grid grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 xs:grid-flow-col lg:grid-flow-row">
        <LeftSidebar />

        <div className="relative z-0 h-screen overflow-hidden col-span-1 flex justify-center items-center">
          <PanZoom
            ref={panZoomRef}
            minZoom="0.6"
            autoCenter
            autoCenterZoomLevel={0.6}
            enableBoundingBox
            boundaryRatioVertical={0.8}
            boundaryRatioHorizontal={0.8}
            style={{ outline: 'none' }}
          >
            <div id="page" ref={pageRef} className="shadow-2xl break-words">
              {templates.find(x => theme.layout.toLowerCase() === x.key).component()}
            </div>
          </PanZoom>

          <PageController />
        </div>

      </div>
    </Suspense>
  );
};

export default App;

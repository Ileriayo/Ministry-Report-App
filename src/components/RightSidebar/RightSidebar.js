import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import AppContext from '../../context/AppContext';
import TabBar from '../../shared/TabBar';
import ActionsTab from './tabs/Actions';
import AboutTab from './tabs/About';

const RightSidebar = () => {
  const { t } = useTranslation('rightSidebar');

  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { data, theme } = state;

  const tabs = [
    {
      key: 'actions',
      name: t('actions.title'),
    },
    {
      key: 'about',
      name: t('about.title'),
    },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0].key);

  const renderTabs = () => {
    switch (currentTab) {
      case tabs[0].key:
        return <ActionsTab data={data} theme={theme} dispatch={dispatch} />;
      case tabs[1].key:
        return <AboutTab />;
      default:
        return null;
    }
  };

  return (
    <div
      id="rightSidebar"
      className="animated slideInRight z-10 py-6 md:h-screen lg:mx-0 bg-white col-span-1 shadow-2xl overflow-y-scroll hidden" /* add xs:hidden lg:block */
    >
      <TabBar tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="px-6">{renderTabs()}</div>
    </div>
  );
};

export default RightSidebar;

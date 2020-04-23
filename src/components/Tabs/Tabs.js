import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import AppContext from '../../context/AppContext';
import TabBar from '../../shared/TabBar';
import OutreachTab from './Outreach';
import FollowupTab from './Followup';
import ProfileTab from './Profile';
import ActionsTab from './Actions';
import AboutTab from './About';

const LeftSidebar = () => {
  const { t } = useTranslation('rightSidebar');
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { data, theme } = state;

  const tabs = [
    { key: 'profile', name: data.profile.heading },
    { key: 'outreach', name: data.outreach.heading },
    { key: 'followup', name: data.followup.heading },
    { key: 'actions', name: t('actions.title') },
    { key: 'about', name: t('about.title') },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0].key);
  const onChange = (key, value) => {
    dispatch({
      type: 'on_input',
      payload: {
        key,
        value,
      },
    });

    dispatch({ type: 'save_data' });
  };

  const renderTabs = () => {
    switch (currentTab) {
      case tabs[0].key:
        return <ProfileTab data={data} onChange={onChange} />;
      case tabs[1].key:
        return <OutreachTab data={data} onChange={onChange} />;
      case tabs[2].key:
        return <FollowupTab data={data} onChange={onChange} />;
      case tabs[3].key:
        return <ActionsTab data={data} theme={theme} dispatch={dispatch} />;
      case tabs[4].key:
        return <AboutTab />;
      default:
        return null;
    }
  };

  return (
    <div
      id="leftSidebar"
      className="z-10 py-6 md:h-screen bg-white col-span-1 shadow-2xl overflow-y-scroll"
    >
      <TabBar tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="px-6">{renderTabs()}</div>
    </div>
  );
};

export default LeftSidebar;

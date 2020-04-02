import React, { useState, useContext } from 'react';

import AppContext from '../../context/AppContext';
import TabBar from '../../shared/TabBar';
import OutreachTab from './tabs/Outreach';
import FollowupTab from './tabs/Followup';
import ProfileTab from './tabs/Profile';

const LeftSidebar = () => {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { data } = state;

  const tabs = [
    { key: 'profile', name: data.profile.heading },
    { key: 'outreach', name: data.outreach.heading },
    { key: 'followup', name: data.followup.heading },
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
      default:
        return null;
    }
  };

  return (
    <div
      id="leftSidebar"
      className="animated slideInLeft z-10 py-6 h-screen bg-white col-span-1 shadow-2xl overflow-y-scroll"
    >
      <TabBar tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="px-6">{renderTabs()}</div>
    </div>
  );
};

export default LeftSidebar;

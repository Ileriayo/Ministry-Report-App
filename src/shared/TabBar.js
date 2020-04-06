import React, { useRef } from 'react';

const TabBar = ({ tabs, currentTab, setCurrentTab }) => {
  const tabsRef = useRef(null);

  const scrollBy = x => {
    const index = tabs.findIndex(tab => tab.key === currentTab);
    tabsRef.current.scrollLeft += x;

    if (x < 0 && index > 0) {
      setCurrentTab(tabs[index - 1].key);
    }

    if (x > 0 && index < tabs.length - 1) {
      setCurrentTab(tabs[index + 1].key);
    }
  };

  return (
    <div className="mx-4 mb-6 flex items-center justify-center">
      <div
        className="hidden xs:block flex mr-1 cursor-pointer select-none text-gray-600 hover:text-gray-800"
        onClick={() => scrollBy(-100)}
      >
        <i className="material-icons xs:text-4xl lg:text-sm">chevron_left</i>
      </div>

      <ul ref={tabsRef} className="tabs flex overflow-x-scroll">
        {tabs.map(tab =>
          currentTab === tab.key ? (
            <li key={tab.key} className="mx-1 list-none">
              <div className="whitespace-no-wrap bg-gray-700 text-white rounded-md xs:text-4xl lg:text-xl py-2 px-6 font-medium">
                {tab.name || 'Tab'}
              </div>
            </li>
          ) : (
            <li key={tab.key} className="mx-1 list-none">
              <div
                className="bg-white whitespace-no-wrap rounded-md cursor-pointer xs:text-4xl lg:text-xl py-2 px-6 font-medium hover:bg-gray-200"
                onClick={() => setCurrentTab(tab.key)}
              >
                {tab.name || 'Tab'}
              </div>
            </li>
          ),
        )}
      </ul>

      <div
        className="hidden xs:block flex ml-1 cursor-pointer select-none text-gray-600 hover:text-gray-800"
        onClick={() => scrollBy(100)}
      >
        <i className="material-icons xs:text-4xl lg:text-sm">chevron_right</i>
      </div>
    </div>
  );
};

export default TabBar;

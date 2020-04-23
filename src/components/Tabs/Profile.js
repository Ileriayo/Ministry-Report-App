import React /* , { useRef } */ from 'react';
import { useTranslation } from 'react-i18next';

import TextField from '../../shared/TextField';

const ProfileTab = ({ data, onChange, /* tabs, currentTab, setCurrentTab */ }) => {
  const { t } = useTranslation('leftSidebar');

  // const tabsRef = useRef(null);

  // console.log(`This is data: ${ data.keys } here`)

  // const scrollBy = x => {
  //   const index = tabs.findIndex(tab => tab.key === currentTab);
  //   tabsRef.current.scrollLeft += x;

  //   if (x < 0 && index > 0) {
  //     setCurrentTab(tabs[index - 1].key);
  //   }

  //   if (x > 0 && index < tabs.length - 1) {
  //     setCurrentTab(tabs[index + 1].key);
  //   }
  // };

  return (
    <div>
      <div>
        <p className="text-center xs:text-6xl xs:font-bold lg:font-normal lg:text-4xl">Enter Your Infromation</p>
        <div className="xs:mx-16 lg:mx-40">
          <hr className="my-6"/>
          <TextField
            className="xs:mb-20 lg:mb-6"
            label={t('profile.firstName.label')}
            placeholder={t('profile.firstName.placeholder')}
            value={data.profile.firstName}
            onChange={v => onChange('data.profile.firstName', v)}
          />
          <TextField
            className="xs:mb-20 lg:mb-6"
            label={t('profile.lastName.label')}
            placeholder={t('profile.lastName.placeholder')}
            value={data.profile.lastName}
            onChange={v => onChange('data.profile.lastName', v)}
          />
          <TextField
            className="xs:mb-20 lg:mb-6"
            label={t('profile.zone.label')}
            placeholder={t('profile.zone.placeholder')}
            value={data.profile.zone}
            onChange={v => onChange('data.profile.zone', v)}
          />
          {/* <button
            type="submit"
            onClick={() => scrollBy(100)}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-5 rounded"
          >
            <div className="flex justify-center items-center">
              <span className="xs:text-5xl lg:text-xl">Next</span>
              <i className="material-icons font-bold xs:text-6xl lg:text-xl">arrow_right</i>
            </div>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;

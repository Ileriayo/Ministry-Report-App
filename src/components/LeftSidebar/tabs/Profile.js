import React from 'react';
import { useTranslation } from 'react-i18next';

import TextField from '../../../shared/TextField';

const ProfileTab = ({ data, onChange }) => {
  const { t } = useTranslation('leftSidebar');

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
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;

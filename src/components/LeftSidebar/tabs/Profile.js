import React from 'react';
import { useTranslation } from 'react-i18next';

import TextField from '../../../shared/TextField';

const ProfileTab = ({ data, onChange }) => {
  const { t } = useTranslation('leftSidebar');

  return (
    <div>
      <TextField
        className="mb-6"
        label={t('profile.firstName.label')}
        placeholder={t('profile.firstName.placeholder')}
        value={data.profile.firstName}
        onChange={v => onChange('data.profile.firstName', v)}
      />
      <TextField
        className="mb-6"
        label={t('profile.lastName.label')}
        placeholder={t('profile.lastName.placeholder')}
        value={data.profile.lastName}
        onChange={v => onChange('data.profile.lastName', v)}
      />
      <TextField
        className="mb-6"
        label={t('profile.zone.label')}
        placeholder={t('profile.zone.placeholder')}
        value={data.profile.zone}
        onChange={v => onChange('data.profile.zone', v)}
      />
    </div>
  );
};

export default ProfileTab;

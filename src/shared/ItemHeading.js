import React from 'react';
import { useTranslation } from 'react-i18next';

const ItemHeading = ({ title, heading, isOpen, setOpen }) => {
  const { t } = useTranslation();

  return (
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={() => setOpen(!isOpen)}
    >
      <h6 className="xs:text-3xl lg:text-sm font-medium">
        {typeof heading === 'undefined' ? title : t('item.add', { heading })}
      </h6>
      <i className="material-icons xs:text-4xl lg:text-sm">{isOpen ? 'expand_less' : 'expand_more'}</i>
    </div>
  );
};

export default ItemHeading;

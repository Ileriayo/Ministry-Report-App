import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import set from 'lodash/set';

import TextField from '../../shared/TextField';
import TextArea from '../../shared/TextArea';
import AppContext from '../../context/AppContext';
import Checkbox from '../../shared/Checkbox';
import { addItem } from '../../utils';
import ItemActions from '../../shared/ItemActions';
import ItemHeading from '../../shared/ItemHeading';
import AddItemButton from '../../shared/AddItemButton';

const FollowupTab = ({ data, onChange }) => {
  const context = useContext(AppContext);
  const { dispatch } = context;

  useEffect(() => {
    if (!('followup' in data)) {
      dispatch({
        type: 'migrate_section',
        payload: {
          key: 'followup',
          value: {
            enable: false,
            heading: 'Followup',
            items: [],
          },
        },
      });

      dispatch({ type: 'save_data' });
    }
  }, [data, dispatch]);

  return (
    'followup' in data && (
      <>
        <div className="mb-6">
          <label className="flex items-center content-center justify-center">
            <Checkbox
              checked={data.followup.enable}
              onChange={v => onChange('data.followup.enable', v)}
            />
            <span className="xs:text-4xl lg:text-sm">Include In Report</span>
            </label>
        </div>

        <hr className="my-6" />

        {data.followup.items.map((x, index) => (
          <Item
            item={x}
            key={x.id}
            index={index}
            onChange={onChange}
            dispatch={dispatch}
            first={index === 0}
            last={index === data.followup.items.length - 1}
          />
        ))}

        <AddItem heading={data.followup.heading} dispatch={dispatch} />
      </>
    )
  );
};

const Form = ({ item, onChange, identifier = '' }) => {
  const { t } = useTranslation(['leftSidebar', 'app']);

  return (
    <div>
      <TextField
        className="mb-6"
        label={t('followup.name.label')}
        placeholder={t('followup.name.placeholder')}
        value={item.name}
        onChange={v => onChange(`${identifier}name`, v)}
      />

      <TextField
        className="mb-6"
        label={t('followup.phone.label')}
        placeholder={t('followup.phone.placeholder')}
        value={item.phone}
        onChange={v => onChange(`${identifier}phone`, v)}
      />

      <TextField
        className="mb-6"
        label={t('followup.date.label')}
        placeholder={t('followup.date.placeholder')}
        value={item.date}
        onChange={v => onChange(`${identifier}date`, v)}
      />

      <TextArea
        rows="5"
        className="mb-6"
        label={t('app:item.remark.label')}
        placeholder={t('followup.remark.placeholder')}
        value={item.remark}
        onChange={v => onChange(`${identifier}remark`, v)}
      />
    </div>
  );
};

const AddItem = ({ heading, dispatch }) => {
  const [isOpen, setOpen] = useState(false);
  const [item, setItem] = useState({
    id: uuidv4(),
    enable: true,
    name: '',
    phone: '',
    date: '',
    remark: '',
  });

  const onChange = (key, value) => setItem(set({ ...item }, key, value));

  const onSubmit = () => {
    if (item.name === '' || item.remark === '') return;

    addItem(dispatch, 'followup', item);

    setItem({
      id: uuidv4(),
      enable: true,
      name: '',
      phone: '',
      date: '',
      remark: '',
    });

    setOpen(false);
  };

  return (
    <div className="my-4 border border-gray-200 rounded p-5">
      <ItemHeading heading={heading} setOpen={setOpen} isOpen={isOpen} />

      <div className={`mt-6 ${isOpen ? 'block' : 'hidden'}`}>
        <Form item={item} onChange={onChange} />

        <AddItemButton onSubmit={onSubmit} />
      </div>
    </div>
  );
};

const Item = ({ item, index, onChange, dispatch, first, last }) => {
  const [isOpen, setOpen] = useState(false);
  const identifier = `data.followup.items[${index}].`;

  return (
    <div className="my-4 border border-gray-200 rounded p-5">
      <ItemHeading title={item.name} setOpen={setOpen} isOpen={isOpen} />

      <div className={`mt-6 ${isOpen ? 'block' : 'hidden'}`}>
        <Form item={item} onChange={onChange} identifier={identifier} />

        <ItemActions
          dispatch={dispatch}
          first={first}
          identifier={identifier}
          item={item}
          last={last}
          onChange={onChange}
          type="followup"
        />
      </div>
    </div>
  );
};

export default FollowupTab;

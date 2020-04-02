import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import set from 'lodash/set';

import TextField from '../../../shared/TextField';
import TextArea from '../../../shared/TextArea';
import AppContext from '../../../context/AppContext';
import Checkbox from '../../../shared/Checkbox';
import { addItem } from '../../../utils';
import ItemActions from '../../../shared/ItemActions';
import ItemHeading from '../../../shared/ItemHeading';
import AddItemButton from '../../../shared/AddItemButton';

const OutreachTab = ({ data, onChange }) => {
  const { t } = useTranslation();
  const context = useContext(AppContext);
  const { dispatch } = context;

  useEffect(() => {
    if (!('outreach' in data)) {
      dispatch({
        type: 'migrate_section',
        payload: {
          key: 'outreach',
          value: {
            enable: false,
            heading: 'Outreach',
            items: [],
          },
        },
      });

      dispatch({ type: 'save_data' });
    }
  }, [data, dispatch]);

  return (
    'outreach' in data && (
      <>
        <div className="mb-6 grid grid-cols-6 items-center">
          <div className="col-span-1">
            <Checkbox
              checked={data.outreach.enable}
              onChange={v => onChange('data.outreach.enable', v)}
            />
          </div>
          <div className="col-span-5">
            <TextField
              placeholder={t('heading.placeholder')}
              value={data.outreach.heading}
              onChange={v => onChange('data.outreach.heading', v)}
            />
          </div>
        </div>

        <hr className="my-6" />

        {data.outreach.items.map((x, index) => (
          <Item
            item={x}
            key={x.id}
            index={index}
            onChange={onChange}
            dispatch={dispatch}
            first={index === 0}
            last={index === data.outreach.items.length - 1}
          />
        ))}

        <AddItem heading={data.outreach.heading} dispatch={dispatch} />
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
        label={t('outreach.name.label')}
        placeholder={t('outreach.name.placeholder')}
        value={item.name}
        onChange={v => onChange(`${identifier}name`, v)}
      />

      <TextField
        className="mb-6"
        label={t('outreach.phone.label')}
        placeholder={t('outreach.phone.placeholder')}
        value={item.phone}
        onChange={v => onChange(`${identifier}phone`, v)}
      />

      <TextField
        className="mb-6"
        label={t('outreach.date.label')}
        placeholder={t('outreach.date.placeholder')}
        value={item.date}
        onChange={v => onChange(`${identifier}date`, v)}
      />

      <TextArea
        rows="5"
        className="mb-6"
        label={t('app:item.remark.label')}
        placeholder={t('outreach.remark.placeholder')}
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

    addItem(dispatch, 'outreach', item);

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
  const identifier = `data.outreach.items[${index}].`;

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
          type="outreach"
        />
      </div>
    </div>
  );
};

export default OutreachTab;

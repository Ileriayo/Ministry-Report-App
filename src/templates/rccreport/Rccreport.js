import React, { useContext } from 'react';

import AppContext from '../../context/AppContext';
import './tableStyle.css';

const Rccreport = () => {
  const context = useContext(AppContext);
  const { state } = context;
  const { data } = state;

  const Header = () => (
    <div className=" flex flex-col items-center">
      <h1 className="mt-10 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-1xl sm:leading-10 uppercase">
        Restplace Christian Centre
      </h1>
      <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-1xl sm:leading-10 uppercase">
        {`${data.profile.firstName} ${data.profile.lastName}`}
      </h1>
      <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-1xl sm:leading-10 uppercase">
        {data.profile.zone} Zone
      </h1>
      <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-1xl sm:leading-10 uppercase">
        {new Date().toLocaleDateString("ca")}
        {/* {`${new Date().getDate()  }-${  new Date().getMonth() + 1  }-${  new Date().getFullYear()}`} */}
      </h1>
    </div>
  );

  const IndividualItem = x => (
    <tr>
        <td className="border border-black text-black px-4 py-2"/>
        <td className="border border-black text-black px-4 py-2">{x.name}</td>
        <td className="border border-black text-black px-4 py-2">{x.phone}</td>
        <td className="border border-black text-black px-4 py-2">{x.date}</td>
        <td className="border border-black text-black px-4 py-2">{x.remark}</td>
    </tr>
  );

  const Outreach = () => (
    <div className="my-8">
      <h1 className="text-3xl font-semibold text-gray-900 sm:text-1xl">
        OUTREACH
      </h1>
      <table className="table-fixed">
  <thead>
    <tr>
      <th className="border border-black text-black px-4 py-2">S/N</th>
      <th className="border border-black text-black px-4 py-2">NAME</th>
      <th className="border border-black text-black px-4 py-2">CONTACT NUMBER</th>
      <th className="border border-black text-black px-12 py-2">DATE</th>
      <th className="border border-black text-black px-4 py-2">REMARK</th>
    </tr>
  </thead>
  <tbody>
      {data.outreach.items.filter(x => x.enable).map(IndividualItem)}
  </tbody>
</table>
    </div>
  );

  const Followup = () => (
    <div className="my-8">
      <h1 className="text-3xl font-semibold text-gray-900 sm:text-1xl">
        FOLLOW-UP
      </h1>
      <table className="table-fixed">
  <thead>
    <tr>
      <th className="border border-black text-black px-4 py-2">S/N</th>
      <th className="border border-black text-black px-4 py-2">NAME</th>
      <th className="border border-black text-black px-4 py-2">CONTACT NUMBER</th>
      <th className="border border-black text-black px-12 py-2">DATE</th>
      <th className="border border-black text-black px-4 py-2">REMARK</th>
    </tr>
  </thead>
  <tbody>
      {data.followup.items.filter(x => x.enable).map(IndividualItem)}
  </tbody>
</table>
    </div>
  );

  return (
    <div className="m-16">
      <Header />
      <Outreach />
      <Followup />
    </div>
  );
};

export default Rccreport;

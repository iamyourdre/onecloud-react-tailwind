import React from 'react';
import { GoDotFill } from 'react-icons/go';

const Table = () => {
  const data = [
    { id: 1, name: 'First Machine', uptime: '99.87%', status: 'Running' },
    { id: 2, name: 'Second Machine', uptime: '99.75%', status: 'Running' },
    { id: 3, name: 'Third Machine', uptime: '98.95%', status: 'Running' },
    { id: 4, name: 'Fourth Machine', uptime: 'N/A', status: 'Failed' },
    { id: 5, name: 'Fifth Machine', uptime: '98.95%', status: 'Running' },
    { id: 6, name: 'Sixth Machine', uptime: '99.50%', status: 'Running' },
    { id: 7, name: 'Seventh Machine', uptime: '97.80%', status: 'Running' },
    { id: 8, name: 'Eighth Machine', uptime: '99.90%', status: 'Running' },
  ];

  return (
    <div className="overflow-y-auto max-h-80 lg:h-60 pt-4">
      <table className="table">
        <thead className='text-neutral-400'>
          <tr className='border-b-[#434753]'>
            <th>#</th>
            <td>VM Name</td>
            <td>Uptime</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className='border-none'>
              <th>{index + 1}</th>
              <th>{item.name}</th>
              <td>{item.uptime}</td>
              <td>
                <span className={`text-xs float-left`}>
                  <GoDotFill className={`inline ${item.status === 'Running' ? 'text-accent' : 'text-red-500'}`} /> 
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

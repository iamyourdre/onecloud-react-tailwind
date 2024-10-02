import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan 24',
    "Bandwidth(GB)": 4.321,
    "Storage(GB)": 2.213,
  },
  {
    name: 'Feb 24',
    "Bandwidth(GB)": 2.837,
    "Storage(GB)": 1.254,
  },
  {
    name: 'Mar 24',
    "Bandwidth(GB)": 5.938,
    "Storage(GB)": 4.321,
  },
  {
    name: 'Apr 24',
    "Bandwidth(GB)": 1.829,
    "Storage(GB)": 6.203,
  },
  {
    name: 'May 24',
    "Bandwidth(GB)": 2.352,
    "Storage(GB)": 1.322,
  },
  {
    name: 'Jun 24',
    "Bandwidth(GB)": 4.543,
    "Storage(GB)": 3.203,
  },
  {
    name: 'Jul 24',
    "Bandwidth(GB)": 5.543,
    "Storage(GB)": 4.433,
  },
  {
    name: 'Aug 24',
    "Bandwidth(GB)": 6.546,
    "Storage(GB)": 2.432,
  },
  {
    name: 'Sep 24',
    "Bandwidth(GB)": 8.217,
    "Storage(GB)": 6.203,
  },
];

export default class Chart1 extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: -35,
            bottom: 25,
          }}
        >
          <CartesianGrid stroke="#aaa" strokeDasharray="1 3" />
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip />
          <Legend iconSize={"10px"} />
          <Bar dataKey="Bandwidth(GB)" fill="#fde561" activeBar={<Rectangle fill="#fde561" stroke="" />} />
          <Bar dataKey="Storage(GB)" fill="#76ddd8" activeBar={<Rectangle fill="#76ddd8" stroke="" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

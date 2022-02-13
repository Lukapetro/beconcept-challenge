import React from 'react';
import { ResponsiveContainer, BarChart, Tooltip, Bar, Cell } from 'recharts';

export default function UptimeChart(params) {

  const data = [
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": true,
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    },
    {
      "value": 1,
      "status": false
    }
  ]


  return (
    <ResponsiveContainer width="95%" height={70}>
      <BarChart data={data}>
        {/* <Tooltip wrapperStyle={{ borderRadius: 10 }} /> */}
        <Tooltip
          cursor={{ fill: 'transparent' }}
          formatter={(value, name, props) => {
            const label = !props.payload.status ? "online" : "offline"
            return label
          }}

        />
        <Bar dataKey="value" radius={[10, 10, 10, 10]}>
          {
            data.map((entry, index) => {
              const color = entry.status ? "red" : "#3bd671"
              return <Cell key={`cell-${index}`} fill={color} />
            })
          }
        </Bar>

      </BarChart>
    </ResponsiveContainer>
  )
};


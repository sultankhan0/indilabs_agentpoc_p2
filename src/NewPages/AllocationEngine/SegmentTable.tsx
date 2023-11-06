
import React from 'react';

type Props = {};

function SegmentTable({}: Props) {
  return (
    <div>
      <table className="w-300 table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Segment</th>
            <th className="px-4 py-2">Volume</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Champion</td>
            <td className="px-4 py-2">
              <div className="flex items-center">
                
                <span className="ml-1">80%</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Challenger1</td>
            <td className="px-4 py-2">
              <div className="flex items-center">
               
                <span className="ml-1">20%</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Challenger1</td>
            <td className="px-4 py-2">
              <div className="flex items-center">
               
                <span className="ml-1">20%</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SegmentTable;

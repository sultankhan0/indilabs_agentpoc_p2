import React from 'react';

type Props = {};

function TestId({}: Props) {
  return (
    <div className="p-4 flex flex-row space-x-4 border border-gray-300 rounded-lg w-1/2">
      <div className="flex flex-row items-center space-x-2">
        <label htmlFor="testId" className="mr-2">Test ID:</label>
        <input type="text" className="border border-gray-300 rounded p-2 rounded-lg w-32" placeholder='Challenge r 3' />
      </div>
      <div className="flex flex-row items-center space-x-2">
        <label htmlFor="target" className="mr-2">Target Vol:</label>
        <select name="target" id="target" className="border border-gray-300 rounded py-2 px-6 rounded-lg text-gray-500 ">
          <option value="10%">10%</option>
          <option value="20%">20%</option>
          <option value="30%">30%</option>
          <option value="40%">40%</option>
          <option value="50%">50%</option>
        </select>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <label htmlFor="date" className="mr-2">Start Date:</label>
        <input type="date" name="date" id="date" className="border border-gray-300 rounded p-2 rounded-lg w-28" />
      </div>
      <div className="flex flex-row items-center space-x-2">
        <button className="bg-white text-gray-500 border border-gray-300 py-2 px-6 rounded rounded-lg">
          Create
        </button>
      </div>
    </div>
  );
}

export default TestId;

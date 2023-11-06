import React,{useState} from 'react';

type Props = {
  showSequence?:any
};

function TestId(props: Props) {
  const {showSequence} = props
  const [clickedCreateBtn, setClickedCreateBtn] = useState(false)

 const onClickCallSequence = () =>{
  setClickedCreateBtn(true)
  showSequence()
  
 }

  return (
    <div className="h-[80px] p-4 flex flex-row space-x-4 border-2 bg-white border-gray-300 rounded-lg">
      <div className="flex flex-row items-center space-x-2">
        <label htmlFor="testId" className="mr-2 font-[500] font-['calibri' !important]">Test ID:</label>
        <input type="text" className="border-2 border-gray-300 rounded p-2 rounded-lg w-32" placeholder='Challenger 3' />
      </div>
      <div className="flex flex-row items-center space-x-2">
        <label htmlFor="target" className="mr-2 font-[500] font-['calibri' !important]">Target Vol:</label>
        <select name="target" id="target" className="w-[140px] border-2 border-gray-300 rounded py-2 px-6 rounded-lg text-gray-500 ">
          <option value="10%">10%</option>
          <option value="20%">20%</option>
          <option value="30%">30%</option>
          <option value="40%">40%</option>
          <option value="50%">50%</option>
        </select>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <label htmlFor="date" className="mr-2 font-[500] font-['calibri' !important]">Start Date:</label>
        <input type="date" name="date" id="date" className="border-2 border-gray-300 rounded p-2 rounded-lg w-28" />
      </div>
      <div className="flex flex-row items-center space-x-2">
        <button onClick={onClickCallSequence} className={`w-[140px] font-['calibri' !important] text-gray-500 border-2 border-gray-300 py-2 px-6  rounded-lg  ${clickedCreateBtn && 'bg-violet-300'}`}>
          Create
        </button>
      </div>
    </div>
  );
}

export default TestId;

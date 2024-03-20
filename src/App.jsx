import './App.css'
import React,{useState} from 'react';
import Login from './loginPage/Login';
function App() {
  
  const [src, setSrc] = useState('')
  const [showInput, setshowInput] = useState(false);
  const [id, setId] = useState(0);
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [inputValuesArray, setInputValuesArray] = useState([]);
  const handleInput1Change = (event) => {
    setInput1Value(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2Value(event.target.value);
  };

  const handleButtonClick = () => {
    setId(id+1);
    setInputValuesArray([...inputValuesArray, { input1: input1Value, input2: input2Value,Id:id}]);
    console.log(inputValuesArray);
    setInput1Value('');
    setInput2Value('');
  };
  const removeData = (id) =>{ 
    inputValuesArray.forEach((e)=>{
      if(id === e.Id){
        setInputValuesArray(prevArray => prevArray.filter(item => item.Id !== id));
        setSrc('')
      }
    })
}
const playVideo = (e) => {
  inputValuesArray.forEach((element)=>{
    if(e === element.input2){
      setSrc(e);
    }
  })
  setshowInput(false)
};
const addData = ()=>{
  setshowInput(true)
}
  return (
    <div className="grid grid-cols-5 min-h-screen">
          <Login/>
  <div className="bg-[#7dd3fc] h-full">
  <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-6r ml-6r" onClick={addData}>Add Your Video</button>
  <div>
  {inputValuesArray.map((item, index) => (
        <div className='bg-gray-400 w-full items-center border-2 mb-2' key={index}>
          <h2 className='text-2xl flex justify-center capitalize'>{item.input1}</h2>
          <button className=" text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 mx-24" onClick={()=>playVideo(item.input2)}>Play</button>
          <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' onClick={()=>removeData(item.Id)}>Remove</button>
        </div>
      ))}    
      </div>  
  </div>
  <div className="bg-[#cbd5e1] col-span-4">
  <div className='h-full'> 
  {showInput &&<h1 className="text-center my-6r">Start you playlist</h1>}
  {showInput &&<div className="text-center my-6r gap-6 mb-6 flex justify-center">
  <div className='w-[25rem]'>
      <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Video Title</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        value={input1Value}
        onChange={handleInput1Change}
        placeholder="Input 1"
      /> </div><div>
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Video Link</label>
  <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  type="text"
        value={input2Value}
        onChange={handleInput2Change}
        placeholder="Input 2"
      />
</div>
      <button onClick={handleButtonClick}>Submit</button>
    </div>
    </div>}
    {!showInput &&<div className='justify-center flex w-full h-full'>
    <iframe width="100%" height="100%" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
      </div>}
  </div>
  </div>
</div>
  
  )
}

export default App

import { Button } from '@/components/ui/button';
import { Eraser, Scissors, Sparkles } from 'lucide-react';
import React, { useState } from 'react'

const RemoveObject = () => {

  const [input, setInput] = useState('');
  const [object, setObject] = useState('');

        
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }
  return (
     <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      {/* Left col */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#4A7AFF]' />
          <h1 className='text-xl font-semibold' >Object Removal</h1>
        </div>
        <p className='mt-6 text-sm font-medium'>Upload Image</p>

        <input onChange={(event) => setInput(event.target.files[0]) } rows={4} type="file" accept='image/*' className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600' required />

          <p className='text-xs text-gray-500 font-light mt-1'>Supports JPG, PNG, and other image formats</p>

           <p className='mt-6 text-sm font-medium'>Describe Your Image</p>

        <textarea onChange={(event) => setObject(event.target.value) } value={object} rows={4} type="text" className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300' placeholder='e.g., watch or spoon , Only single object name' required />

        <Button className='w-full mt-6 text-[#7095fc] cursor-pointer'>
          <Scissors className='w-5'/>
          Remove Object
        </Button>

      </form>
        {/* Right Col */}
        <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]'>
            <div className='flex items-center gap-3'>
              <Scissors className='w-5 h-5 text-[#4A7AFF]' />
              <h1 className='text-xl font-semibold'>Processed Image</h1>
            </div>
            <div className='flex-1 flex justify-center items-center'>
              <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
                <Scissors className='w-9 h-9' />
                <p>Upload an image and click "Remove Object " to get started</p>
              </div>
            </div>
        </div>
    </div>
  )
}


export default RemoveObject

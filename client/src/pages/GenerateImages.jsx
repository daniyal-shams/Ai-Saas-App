import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Edit, Hash, Image, Sparkles } from 'lucide-react';
import React, { useState } from 'react'

const GenerateImages = () => {

   const imageStyle = ['Realistic', 'Ghibli style', 'Anime style', 'Cartoon style', 'Fantasy style', 'Realistic style', '3D style', 'Portrait style'];
    
      const [selectedStyle , setSelectedStyle] = useState('Realistic');
      const [input, setInput] = useState('');
      const [publish, setPublish] = useState(false);
    
      const onSubmitHandler = async (event) => {
        event.preventDefault();
      }

  return (
   <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      {/* Left col */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#00AD25]' />
          <h1 className='text-xl font-semibold' >AI Image Generator</h1>
        </div>
        <p className='mt-6 text-sm font-medium'>Describe Your Image</p>

        <textarea onChange={(event) => setInput(event.target.value) } value={input} rows={4} type="text" className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300' placeholder='Describe what you want to see in the image...' required />

        <p className='mt-3 text-sm font-medium'>Style</p>

        <div className='mt-3 flex gap-3 flex-wrap sm:max-w-9/11'>
          {imageStyle.map((item) => (
            <span onClick={() => setSelectedStyle(item)} className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${selectedStyle === item ? 'bg-green-50 text-green-700 border-green-600' : 'text-gray-500 border-gray-300'}`} key={item}>{item}</span>
          ))}
        </div>

          <div className='my-6 flex items-center gap-2'>
                <Switch id="public-mode" checked={publish} onCheckedChange={setPublish} />
                   <Label className="relative cursor-pointer" htmlFor="public-mode">
                    Make this image Public
                   </Label>
          </div>

        <Button className='w-full text-[#75de8c] cursor-pointer'>
          <Image className='w-5'/>
          Generate Image
        </Button>

      </form>
        {/* Right Col */}
        <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]'>
            <div className='flex items-center gap-3'>
              <Image className='w-5 h-5 text-[#00AD25]' />
              <h1 className='text-xl font-semibold'>Generated Image</h1>
            </div>
            <div className='flex-1 flex justify-center items-center'>
              <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
                <Image className='w-9 h-9' />
                <p>Enter a topic and click "Generate image " to get started</p>
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default GenerateImages

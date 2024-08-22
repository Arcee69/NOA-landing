import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Input, MenuItem, Select, TextField, Typography } from '@mui/material';


const LoginHeaderNavComponent = ({image, text1,text2}) => {
    const history = useNavigate();

    return (
         
        <div class="flex">
            <div className=' flex justify-center items-center gap-1  col-span-3'>
            
                <div className='flex flex-col text-center cursor-pointer'>
                    <p className='bg-white text-[#222222] font-semibold text-sm hover:text-[#00AA55] font-mont'>{text1}</p>
                    <p className='bg-white text-[#222222] font-semibold text-sm hover:text-[#00AA55] font-mont'>{text2}</p>
                </div>
            </div>
        </div>
           
          
       
      
    );
}
export default LoginHeaderNavComponent;

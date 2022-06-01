import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {AiOutlineInfoCircle} from "react-icons/ai";

const Tool_tip = () => {
    return (
      <Tooltip title="tooltip content">
        <IconButton>
          <AiOutlineInfoCircle className='tw-bg-nishblue-300 tw-rounded-full tw-text-white'/>
        </IconButton>
      </Tooltip>
    );
  }

  export default Tool_tip;

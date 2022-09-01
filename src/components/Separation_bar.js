import React from 'react'
import Button from "@mui/material/Button";


function Separation_bar(props) {
  return (
    <div className='separation_bar'>
                    <Button

              variant="outlined"
              onClick={()=>{props.change_sep(1)}}
              /* endIcon={<SaveIcon />} */
              className="submit"
              sx={{ fontSize: 24, width: 200 }}
            >
              conduteurs
            </Button>
            <Button
              variant="outlined"
              onClick={()=>{props.change_sep(2)}}
              /* endIcon={<SaveIcon />} */
              className="submit"
              sx={{  fontSize: 24,paddingLeft:'20px' , paddingRight:'20px'}}
            >
              vehicules
            </Button>
            <Button
              variant="outlined"
              onClick={()=>{props.change_sep(3)}}
              /* endIcon={<SaveIcon />} */
              className="submit"
              sx={{  fontSize: 24, paddingLeft:'20px' , paddingRight:'20px'}}
            >
              sous-contrats
            </Button>
            <Button
              variant="outlined"
              onClick={()=>{props.change_sep(0)}}
              /* endIcon={<SaveIcon />} */
              className="submit"
              sx={{  fontSize: 24,paddingLeft:'20px' , paddingRight:'20px'}}
            >
              tout
            </Button>

    </div>
  )
}

export default Separation_bar
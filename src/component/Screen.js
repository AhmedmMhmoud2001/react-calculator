import React from 'react';
import { Textfit } from "react-textfit";

const Screen = ({value}) => {
    return (
        <div >
            <Textfit className="Screen" mode="single" max={60}>
                {value}
           </Textfit>
        </div>
    );
}

export default Screen;
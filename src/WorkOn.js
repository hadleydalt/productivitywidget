import * as React from 'react'
import './App.css';

export default function WorkOn(props) {

    const textColor = props.bgColor == "#48CB97" || props.bgColor ==  "#086063" ? "white" : "black";

    return (
            <div class="work-on" style={{background: props.bgColor}}>
                <div class="work-on-inner">
                <div class="work-on-inner-sub">
                    Assignment
                </div>
                <div class="work-on-inner-heading">
                    {props.assignment}
                </div>

                    
                </div>
                <div class="work-on-inner-text">
                    <div class="work-on-inner-text-sub" style={{color: textColor}}>
                        Class
                    </div>
                    <div class="work-on-inner-text-heading" style={{color: textColor}}>
                        {props.class}
                    </div>
                </div>
                <div class="work-on-inner-text" style={{color: textColor}}>
                    <div class="work-on-inner-text-sub" style={{color: textColor}}>
                        Due
                    </div>
                    <div class="work-on-inner-text-heading" style={{color: textColor}}>
                        {props.due}
                    </div>
                </div>
            </div>
    )
}
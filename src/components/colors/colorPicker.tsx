'use client';

import { ChangeEventHandler } from 'react';
import { Slider } from '@/components/ui/slider';

import { applyStyle, CssProperty } from './setTheme';
import { Value } from '@radix-ui/react-select';
function hexToHSL(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);

  (r /= 255), (g /= 255), (b /= 255);
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return { h, s, l };
}

export const ColorInput = ({ property }: { property: CssProperty }) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { h, s, l } = hexToHSL(e.target.value);
    applyStyle(property, `${h} ${s}% ${l}%`);
  };

  return (
    <div className="flex gap-4 w-full items-center justify-between">
      {' '}
      <label className="text-lg capitalize ">{property}</label>
      <div
        // onChange={handleChange}
        // style={{'--theme-primary':''}}
        className={`cursor-pointer shadow-lg dark:shadow-white rounded-full h-6 w-6 overflow-hidden bg-[hsl(var(--${property}))]`}
      >
        <input
          name="primary"
          className="w-10 cursor-pointer h-10 p-5 focus:bg-transparent active:bg-transparent  fill-transparent outline-dashed bg-transparent border-none border-transparent text-neutral-200 bg-rose-500 rounded-full border-0 outline-0"
          onChange={handleChange}
          type="color"
        />
      </div>
    </div>
  );
};

const ColorPicker = () => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { h, s, l } = hexToHSL(e.target.value);
    console.log(e.target);
    applyStyle(e.target.name, `${h} ${s}% ${l}%`);
  };

  return (
    <div className="p-2 flex flex-col items-start gap-4 flex-wrap w-full">
      <ColorInput property="primary" />
      <ColorInput property="foreground" />
      <ColorInput property="background" />
      {/* <input name="background" onChange={handleChange} type="color"></input>
      <input name="foreground" onChange={handleChange} type="color"></input> */}

      <Slider
        name="radius"
        // onChange={(e)=>applyStyle('radius',e)}
        onValueChange={(value) => applyStyle('radius', `${value}rem`)}
        defaultValue={[0]}
        max={1}
        step={0.01}
      />
    </div>
  );
};

export default ColorPicker;

import {useEffect, useRef} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';


export default function useAlan({fetchWeather}){
    const alanBtnInstance = useRef(null);

    

    useEffect(()=>{
        if (!alanBtnInstance.current) {
            alanBtnInstance.current = alanBtn({
                key:'481fa2eb1758f5fd182c9376e07552c92e956eca572e1d8b807a3e2338fdd0dc/stage',
                onCommand:async(data)=>{
                    if(data.location) getWeather(data.location) 
                },
            })
        }

    },[])

    const getWeather=async(location)=>{
        const weather=await fetchWeather(location)
        alanBtnInstance.current.setVisualState({data: weather});
        alanBtnInstance.current.playText(`
            It's ${weather.consolidated_weather[0].the_temp} degrees celcius in 
            ${location} and expected ${weather.consolidated_weather[0].weather_state_name}
        `)
    }

    return null;
}
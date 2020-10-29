import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './reducer'
import Swiper from 'swiper'

export default function Home() {
    const banner = useSelector(state => state.home.banner)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
        return () => {
        }
    }, [])
    useEffect(() => {
        var swiper = new Swiper('.swiper-container', {
         
        
          });
    }, [])
    return (
        <div>
            <div className="banner">

                <div className="swiper-container">
                    <div className="swiper-wrapper">

                       {
                           banner.map(item => <div className="swiper-slide" key={item._id}>{item.con}</div> )
                       }
                    </div>
                </div>
            </div>
        </div>
    )
}

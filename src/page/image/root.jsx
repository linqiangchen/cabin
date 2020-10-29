import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './reducer'
import AppScroll from '../../common/AppScroll'
import './style/style.scss'
export default function MyImage() {
    const dispatch = useDispatch()
    const image = useSelector(state => state.image.Image)
    const refLeft = useRef()
    const refRight = useRef()
    useEffect(() => {
        dispatch(fetchData())
    }, [])
    useEffect(() => {
        image.forEach((item, index) => {
            let _left = document.querySelector('.list-left')
            let _right = document.querySelector('.list-right')
            let img = new Image()
            img.src = item.name
            img.onload = () => {
                let li = document.createElement('li')
                li.appendChild(img)
                if (_left.offsetHeight <= _right.offsetHeight) {
                    _left.appendChild(li)
                } else {
                    _right.appendChild(li)
                }
            }

        })

    }, [])
    return (
        <div className="image">
            <AppScroll className="image-wrap">
                <div className="wrap">
                    <ul className="list-left" ref={refLeft}>

                    </ul>
                    <ul className="list-right" ref={refRight}>

                    </ul>
                </div>
            </AppScroll>
        </div>
    )
}

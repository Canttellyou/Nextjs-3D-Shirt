import state from '@/store'
import React from 'react'
import { useSnapshot } from 'valtio'

const CustomButton = ({ type, title, handleClick, customStyles }) => {
    const snap = useSnapshot(state);
    const generateStyle = (type) => {
        if (type === "filled") {
            return {
                backgroundColor: snap.color,
                color: "#fff"
            }
        }
    }

    return (
        <button className={`px-2 py-11.5 flex-1 rounded-md ${customStyles}`} style={generateStyle(type)} onClick={handleClick}>{title}</button>
    )
}

export default CustomButton
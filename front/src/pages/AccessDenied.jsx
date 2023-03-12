import React from 'react';
import { useNavigate } from "react-router-dom";

export default function AccessDenied() {

    // window.location.reload()

    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/');
    }, 5000)

    return (
        <div className='flex flex-row'>
            <div className='flex w-4 m-5 justify-content-between flex-column'>
                <iframe src="https://giphy.com/embed/8abAbOrQ9rvLG" className="flex m-2" frameBorder="0" allowFullScreen></iframe>
                <iframe src="https://giphy.com/embed/8abAbOrQ9rvLG" className="flex m-2" frameBorder="0" allowFullScreen></iframe>
                <iframe src="https://giphy.com/embed/8abAbOrQ9rvLG" className="flex m-2" frameBorder="0" allowFullScreen></iframe>
                <iframe src="https://giphy.com/embed/8abAbOrQ9rvLG" className="flex m-2" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className='flex w-4 m-5 justify-content-between flex-column'>
                <iframe src="https://giphy.com/embed/8abAbOrQ9rvLG" className="flex m-2" frameBorder="0" allowFullScreen></iframe>
                <iframe src="https://giphy.com/embed/8abAbOrQ9rvLG" className="flex m-2" frameBorder="0" allowFullScreen></iframe>
                <iframe src="https://giphy.com/embed/8abAbOrQ9rvLG" className="flex m-2" frameBorder="0" allowFullScreen></iframe>
                <iframe src="https://giphy.com/embed/8abAbOrQ9rvLG" className="flex m-2" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className='flex w-4 m-5 justify-content-between flex-column'>
                <iframe src="https://giphy.com/embed/8abAbOrQ9rvLG" className="flex m-2" frameBorder="0" allowFullScreen></iframe>
                <iframe src="https://giphy.com/embed/8abAbOrQ9rvLG" className="flex m-2" frameBorder="0" allowFullScreen></iframe>
                <iframe src="https://giphy.com/embed/8abAbOrQ9rvLG" className="flex m-2" frameBorder="0" allowFullScreen></iframe>
                <iframe src="https://giphy.com/embed/8abAbOrQ9rvLG" className="flex m-2" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className='flex w-4 m-5 justify-content-between flex-column'>
                <iframe src="https://giphy.com/embed/8abAbOrQ9rvLG" className="flex m-2" frameBorder="0" allowFullScreen></iframe>
                <iframe src="https://giphy.com/embed/8abAbOrQ9rvLG" className="flex m-2" frameBorder="0" allowFullScreen></iframe>
                <iframe src="https://giphy.com/embed/8abAbOrQ9rvLG" className="flex m-2" frameBorder="0" allowFullScreen></iframe>
                <iframe src="https://giphy.com/embed/8abAbOrQ9rvLG" className="flex m-2" frameBorder="0" allowFullScreen></iframe>
            </div>
        </div>
    );
}
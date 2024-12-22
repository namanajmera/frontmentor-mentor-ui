import React from 'react'
import qr_img from "./../../assets/image/image-qr-code.png";

const QRCode = () => {
    return (
        <div>
            <div class="container">
                <img src={qr_img} alt="QR code" class="qr-code" />
                    <p class="para-1">Improve your front-end skills by building projects</p>
                    <p class="para-2">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>

            </div>
            <div class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
                Coded by <a href="/">Naman Ajmera</a>.
            </div>
        </div>
    )
}

export default QRCode;
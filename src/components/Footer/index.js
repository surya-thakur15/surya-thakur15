import React from "react"

import facebookImg from "../../../assets/facebook.svg"
import instagramImg from "../../../assets/instagram.svg"
import linkedInImg from "../../../assets/linkedin.svg"
import telegramImg from "../../../assets/telegram.svg"

const socialMedia = [
  {
    name: "LinkedIn",
    url: "www.surya.com",
    image: linkedInImg,
  },
  {
    name: "Facebook",
    url: "www.surya.com",
    image: facebookImg,
  },
  {
    name: "Instagram",
    url: "www.surya.com",
    image: instagramImg,
  },
  {
    name: "Telegram",
    url: "www.surya.com",
    image: telegramImg,
  },
]

export default function Footer() {
  return (
    <div>
      <div className="wrapper-normal dark footer">
        <div className="text-primary sub-heading">SAY HI! /</div>

        <div>I'd love to talk.</div>

        <div>Let's Make something great together.</div>

        <div>hi@suryathakur.com</div>

        <div className="text-primary sub-heading">FIND ME ELSEWHERE /</div>
        {socialMedia.map(item => (
          <img src={item.image} loading="lazy" alt={item.name} />
        ))}
      </div>
    </div>
  )
}

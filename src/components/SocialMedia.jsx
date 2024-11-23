import React from "react";
export default function SocialMedia({name,icon,url}){
  return(
    <a
      href={url}
      className="flex items-center p-2 bg-white rounded-full shadow hover:bg-gray-100 transition" target="_blank" rel="noopener ">
      <img src={icon} alt={name} className="w-6 h-6" />
    </a>
  )
}

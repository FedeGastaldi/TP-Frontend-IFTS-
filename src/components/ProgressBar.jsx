import React from "react";
export default function ProgressBar({
  porcentaje,
  icon,
  name,
  color = "bg-blue-600",
}) {
  return (
    <div>
      <div className="flex items-center mb-1">
        <img src={icon} className="w-12 h-15 mr-2 "></img>
      </div>
      <span className="text-base font-medium dark:text-white">{name} </span>

      <div className="w-full bg-gray-200 mb-2  rounded-full h-1.5 dark:bg-gray-700">
        <div
          className={`${color} h-1.5 rounded-full`}
          style={{ width: `${porcentaje}%` }}
        ></div>
      </div>
    </div>
  );
}

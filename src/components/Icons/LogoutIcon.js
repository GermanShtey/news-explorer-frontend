import React from "react";

export const EnterIcon = ({classNamePath}) => {
  return (
    <svg
      style={{
        marginLeft: 12,
      }}
      width={18}
      height={16}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={classNamePath}
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
        d="M6 2H2v12h4v2H2a2 2 0 01-2-2V2a2 2 0 012-2h4v2zm7.586 7l-4.293 4.134 1.414 1.362 6.707-6.459-6.707-6.459L9.293 2.94l4.293 4.134H4V9h9.586z"
      />
    </svg>
  )
}

import React from 'react';

export default function Emoji(params) {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={params.label ? params.label : ""}
      aria-hidden={params.label ? "false" : "true"}>
      {params.symbol}
    </span>
  )
};

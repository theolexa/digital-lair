import React from 'react'

export default function ColorChar(props: any) {
  const line = props.line

  return (
    <div>
        {line.length > 0 ? (
          line.map((item: any, index: number) => (
            <span key={index} style={{ color: item.color }}>
              {item.value}
            </span>
          ))
        ) : (
          <p>No data to display.</p>
        )}
    </div>
  )
}

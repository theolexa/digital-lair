import React from 'react'
import ColorChar from "./ColorChar"

export default function ColorBanner(props: any) {
    return (
        <pre>
            {props.data.map((item: any, index: number) => (
                <ColorChar line={item} key={index} />
            ))}
        </pre>
    )}

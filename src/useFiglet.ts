import { useEffect, useState } from 'react'
import figlet from 'figlet'
import standard from "figlet/importable-fonts/Standard.js"


export function useFiglet(text: string) {
    const [figletText, setFigletText] = useState<string>('')
    const font = "Standard"
    useEffect((): void => {
        figlet.parseFont(font, standard)    
        const result = figlet.textSync(
            text, 
            {
                font: font,
                horizontalLayout: "fitted",
                width: 100,
                whitespaceBreak: true
            }
        )
        setFigletText(result)
    }, [text])

    return figletText
}

import figlet from 'figlet'
import standard from "figlet/importable-fonts/Standard.js"


export default function useFiglet(bannerText: any) {
    figlet.parseFont('Standard', standard)
    const result = figlet.textSync(
        bannerText, 
        {
            font: 'Standard',
            // horizontalLayout: "fitted",
            width: 100,
            whitespaceBreak: true
        }
    )
    return result
}

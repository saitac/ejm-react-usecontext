import { ReactNode } from "react"
import LevelContext from "../contexts/LevelContext"

type SectionProps = {
    level: number
    children: ReactNode
}

const Section = ({level, children}: SectionProps) => {
    return(
        <section>
            <LevelContext.Provider value={level}>
                {children}
            </LevelContext.Provider>
        </section>

    )
}

export default Section;
import Section from "../Section/Section"
import Trailers from "../Trailers/Trailers"
import './styles.css'

export default function SectionGlobal() {

    return(
        <div className="sectionGlobalContainer">
            <Trailers/>       
            <Section/>
        </div>
    )
}
import { service1, service2, service3, check } from "../assets"
import { brainwaveServices, brainwaveServicesIcons } from "../constants"
import Generating from "./Generating"
import Heading from "./Heading"
import Section from "./Section"
import { ScrollParallax } from 'react-just-parallax'

const Services = () => {
  return (
    <Section id="hot-to-use">
      <div className="container">
        <Heading 
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />
      </div>
      <div className="relative p-5 lg:p-[1.85rem] xl:p-[2.5rem]">
        <div className="relative z-1 flex items-center h-[39rem] p-8 lg:p-20 mb-5 border 
         border-n-1/10 rounded-3xl overflow-hidden xl:h-[46rem]"
        >
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
            <img src={service1} className="w-full h-full object-cover md:object-right" 
              width={800} height={730} alt="Smartest AI"
            />
          </div>
          <div className="relative z-1 max-w-[17rem] ml-auto">
            <h4 className="h4 mb-4">Smartest AI</h4>
            <p className="body-2 mb-[3rem] text-n-3">Branwave unlocks the potential of AI-powered applications</p>
            <ul className="body-2">
              {brainwaveServices.map((item, index) => (
                <li key={index} className="flex items-start py-4 border-t border-n-6">
                  <img src={check} width={24} height={24}/>
                  <p className="ml-4">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <ScrollParallax isAbsolutelyPositioned>  
            <Generating className="absolute right-4 left-4 bottom-4 border-n-1/10 border 
              lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2 lg:w-96"
            />
          </ScrollParallax>  
        </div>
        <div>
          {/* 2:14:50 */}
        </div>
      </div>
    </Section>
  )
}

export default Services
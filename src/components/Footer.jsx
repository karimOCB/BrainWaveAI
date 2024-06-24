import { socials } from "../constants"
import Section from "./Section"

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="flex container justify-around items-center max-sm:flex-col">
        <p className="text-base text-n-4 max-sm:mb-3">© {new Date().getFullYear()}. All rights reserved.</p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a key={item.id} href={item.url} target="_blank" className="flex items-center
              justify-center w-11 h-11 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={19} height={19} alt={item.title}/>
            </a>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Footer
import { check2, grid, loading1 } from "../assets"
import { roadmap } from "../constants"
import Heading from "./Heading"
import Section from "./Section"
import Tagline from "./Tagline"
import { Gradient } from "./design/Roadmap"
import Button from "./Button"

const Roadmap = () => {
  return <Section className='overflow-hidden' id="roadmap">
    <div className="container md:pb-10">
      <Heading 
        tag="Ready to get started"
        title="What we'are working on"
      />
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === 'done' ? 'Done' : 'In progress';
          
          return (
            <div key={item.id} className={`md:flex p-0.5 border-n-6 
              rounded-[2.5rem] even:md:translate-y-[6rem] 
              ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}`}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.44rem]  
                  overflow-hidden xl:p-15"
              >
                <div className="absolute top-0 left-0 max-w-full">
                  <img src={grid}  className="w-full" width={550} height={550} alt="grid"/>
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between md:mx-6 mb-8 mt-1">
                    <Tagline>{item.date}</Tagline>
                    <div className="flex items-center bg-n-1 rounded px-4 py-1 text-n-8"> 
                      <img src={item.status === 'done' ? check2 : loading1}
                        className="mr-2.5" width={16} height={16} alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div> 
                  </div>
                  <div className="mb-8 -mx-15">
                    <img src={item.imageUrl} className="w-full" width={630} 
                      height={420} alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 mb-1 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          )
        })}

        <Gradient />
      </div>
      <div className="flex justify-center mt-10 md:mt-14">
        <Button href="/roadmap" className="w-44 md:w-52">Our Roadmap</Button>
      </div>
    </div>
  </Section>
  
}

export default Roadmap
import hero from '../assets/hero.jpg'
import headshot from '../assets/seij_headshot.jpg'
import '../App.css'
import { NavLink } from 'react-router-dom'
import Button from './Button.jsx'
export default function Home() {

  const bldgLineStroke = {'stroke': 'url(#grad1)', 'strokeWidth': '1', 'filter':'url(#f1)'}
  const arrowLineStroke = {'stroke': 'url(#grad2)', 'strokeWidth': '1', 'filter':'url(#f1)'}
  const arrowFill = {'fill':'url(#grad2)', 'stroke':'rgb(220,220,220)', 'strokeWidth': '1', 'filter':'url(#f1)'}
  const graphFill = {'fill':'#717880', 'stroke':'#717880', 'strokeWidth': '1'}
  const lineOnly = {'stroke': '#a5bcd4', 'strokeWidth': '0.5'}
  const arrowEnd = 45
  const arrowThickness= 3
  const stories = [5, 33, 66, 100 ]
  const xV = 150
  const pointsV = [
    `${xV}, ${stories[1]}
    ${xV}, ${stories[0]}
    ${xV+10}, ${stories[0]}
    ${xV+10}, ${stories[1]}`,

    `${xV}, ${stories[2]}
    ${xV}, ${stories[1]}
    ${xV+15}, ${stories[1]}
    ${xV+15}, ${stories[2]}`,

    `${xV}, ${stories[3]}
    ${xV}, ${stories[2]}
    ${xV+20}, ${stories[2]}
    ${xV+20}, ${stories[3]}`]
  const xM = 200
  const pointsM = [
    `${xM}, ${stories[0]}
    ${xM}, ${stories[1]}
    ${xM+5}, ${stories[1]}`,

    `${xM}, ${stories[1]}
    ${xM+5}, ${stories[1]}
    ${xM+15}, ${stories[2]}
    ${xM}, ${stories[2]}`,

    `${xM}, ${stories[2]}
    ${xM+15}, ${stories[2]}
    ${xM+30}, ${stories[3]}
    ${xM}, ${stories[3]}`]

  const building = <svg className="buildingSVG" viewBox="0 0 250 120">
    <title>Building with Seismic Forces</title>
    <defs>
    <linearGradient id="grad1" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor='#989a9c'stopOpacity='1' />
      <stop offset="100%" stopColor='#bbbcbd' stopOpacity='1' />
    </linearGradient>
    <linearGradient id="grad2" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor='#bebfc2'stopOpacity='1' />
      <stop offset="100%" stopColor='#828385' stopOpacity='1' />
    </linearGradient>
    <filter id="f1" x="0" y="0" filterUnits="userSpaceOnUse">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0.5"/>
    </filter>
  </defs>
    <line id="bL1" x1="50" y1={stories[0]} x2="50" y2="100" style={ bldgLineStroke} />
    <line id="bL2" x1="95" y1={stories[0]} x2="95" y2="100" style={ bldgLineStroke} />
    <line id="bL3" x1="50" y1={stories[0]} x2="95" y2={stories[0]} style={ bldgLineStroke} />
    <line id="bL4" x1="50" y1={stories[1]} x2="95" y2={stories[1]} style={ bldgLineStroke} />
    <line id="bL5" x1="50" y1={stories[2]} x2="95" y2={stories[2]} style={ bldgLineStroke} />


    <line id="aL1" x1="5" y1={stories[0]} x2={arrowEnd} y2="100" style={ arrowLineStroke } />
    <line id="aL2" x1="5" y1={stories[0]} x2={arrowEnd} y2={stories[0]} style={ arrowLineStroke } />
    <line id="aL3" x1="16" y1={stories[1]} x2={arrowEnd} y2={stories[1]} style={ arrowLineStroke } />
    <line id="aL4" x1="30" y1={stories[2]} x2={arrowEnd} y2={stories[2]} style={ arrowLineStroke } />

    <polygon id="aP1" points={`${arrowEnd-arrowThickness},${arrowThickness + stories[0]} ${arrowEnd-arrowThickness},${stories[0]-arrowThickness} ${arrowEnd},${stories[0]}`} style={arrowFill} />
    <polygon id="aP2" points={`${arrowEnd-arrowThickness},${arrowThickness + stories[1]} ${arrowEnd-arrowThickness},${stories[1]-arrowThickness} ${arrowEnd},${stories[1]}`} style={arrowFill} />
    <polygon id="aP3" points={`${arrowEnd-arrowThickness},${arrowThickness + stories[2]} ${arrowEnd-arrowThickness},${stories[2]-arrowThickness} ${arrowEnd},${stories[2]}`} style={arrowFill} />

    <line id="vL1" x1={xV} y1={stories[0]} x2={xV} y2="100" style={ lineOnly} />
    <polygon id="vP1" points={pointsV[0]} style={graphFill} />
    <polygon id="vP2" points={pointsV[1]} style={graphFill} />
    <polygon id="vP3" points={pointsV[2]} style={graphFill} />


    <line id="mL1" x1={xM} y1={stories[0]} x2={xM} y2="100" style={ lineOnly} />
    <polygon id="mP1" points={pointsM[0]} style={graphFill} />
    <polygon id="mP2" points={pointsM[1]} style={graphFill} />
    <polygon id="mP3" points={pointsM[2]} style={graphFill} />

    <text x={xV-4} y="120" fill='#989a9c'>V</text>
    <text x={xM-4} y="120" fill='#989a9c'>M</text>


  </svg>
  const resourceCards = [
    {link: '/lectures', title: '10+ Lectures', text:'Start your studies here', img:'https://img.icons8.com/ios/100/null/podium-with-speaker.png', alt:"speaker at podium"},
    {link: '/practice', title: '100+ Questions', text:'Test your seismic knowledge with practice questions', img:'https://img.icons8.com/ios/100/null/test--v1.png', alt:'paper test'},
    {link: '/exam-guide', title: 'Exam Resources', text:'Be ready to take the Seismic Principles exam', img:'https://img.icons8.com/ios/100/null/faq.png', alt:'question answer bubbles'}
  ]

  const infoCards = [
    {title: 'Classroom Quality',
    text:'Our lecture series is unique because it starts at the very beginning. We provide thorough explanations and full examples for all critical concepts, no previous knowledge required.',
    img:'/images/infoCard-classroom.jpg',
    alt:"empty classroom"},
    { title: 'Community Driven',
    text:'Our content is managed by a team of engineers that continually add material. We reflect the collaborative nature of Civil Engineering in our methods of providing content.',
    img:'/images/infoCard-members.JPG',
    alt:'members of california seismic'},
    {title: 'California Expertise',
    text:'Our contributors are working professionals in California with advanced degrees in structural engineering from UC Berkeley, Stanford, UC Davis, and more.',
    img:'/images/infoCard-sf.jpg',
    alt:'san francisco city with bridge background'}
  ]

  return (
    <main>
      <div className="hero">
        <div className="absolute z-10 md:left-[10%] top-[38%] md:top-1/3">
          <h1 className="md:flex justify-start text-5xl md:text-7xl text-white font-bold mb-4">Study for Free</h1>
          <p className="md:flex justify-start text-2xl text-white font-medium">You can pass the Seismic Exam. </p>
          <p className="md:flex justify-start text-2xl text-white font-medium pb-8">Everything needed is right here</p>
          <Button text='Start Practicing' extraClasses="md:flex"/>
        </div>
        <div className="hidden lg:flex absolute w-40 h-auto z-10 lg:right-1/3 top-[40%]">
          {building}
        </div>
      </div>

      <article className="bg-slate-50 h-fit py-8 md:h-auto md:py-32">
        <div className="max-w-6xl m-auto">
          <h1 className="font-bold text-5xl mb-4 md:mb-32">Explore</h1>
          <div className="flex flex-col md:flex-row">
            {resourceCards.map((item, index) => (
              <NavLink  key={`landingCard${index}`} className="w-72 m-auto my-4 ease-out duration-300 rounded-lg hover:shadow-lg hover:bg-white" to={item.link}>
                <figure className="">
                  <img className="h-24 md:h-40 flex m-auto pt-2" alt={item.alt} src={item.img}/>
                  <h2 className="font-bold text-2xl">{item.title}</h2>
                  <p>{item.text}</p>
                </figure>
              </NavLink>
            ))}
          </div>
        </div>
      </article>

      <article className="w-screen bg-deep-blue flex justify-center py-12 md:py-60">
        <div className="flex flex-col md:flex-row">
          <img className="m-auto h-40 md:h-60 rounded-full border border-orange-300 border-8" src={headshot} alt="seij headshot" />
          <section className="m-auto w-auto md:pl-32 pt-4">
            <h1 className="text-white text-3xl md:text-6xl font-semibold">Education Matters</h1>
            <p className="max-w-lg m-auto text-white text-left p-8 md:p-0">California Seismic exists because of a passion for education. Engineering knowledge should be free and easy to access, yet there are few complete resources for Civil Engineering outside of higher education. We&apos;re here to change that by providing a comprehensive resource for one of the most technically challenging aspects, Seismic Design. </p>
          </section>
        </div>
      </article>

      <article className="bg-slate-50 h-fit py-8 md:h-auto md:py-32">
        <div className="max-w-6xl m-auto mb-8 md:mb-16">
          <h1 className="font-bold text-3xl md:text-5xl mb-4 md:mb-12">Why California Seismic?</h1>
          <div className="flex flex-col md:flex-row">
            {infoCards.map((item, index) => (
              <figure key={`infoCard${index}`} className="w-72 m-auto my-4">
                <img className="h-40 rounded-full md:h-60 flex m-auto pt-2" alt={item.alt} src={item.img}/>
                <h2 className="font-bold text-2xl">{item.title}</h2>
                <p className="text-sm">{item.text}</p>
              </figure>
            ))}
          </div>
        </div>
        <Button text='Show Lectures' link='/lectures' extraClasses='mt-4'/>
      </article>
    </main>
  );

}

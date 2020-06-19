// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
import './timeline.scss';



const Timeline = (props: PageProps, fullpageApi) => {

  return (

    <VerticalTimeline className="timeline">

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgba(255,255,255,0)', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid rgba(255,255,255,0)' }}
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        date="01"
      >
        <h4 className="vertical-timeline-element-subtitle">Who Are We?</h4>
        <p>
          We are an onsite talent consultancy who bridge the gap between internal recruitment and traditional agencies with the view of saving you money...
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="02"
        contentStyle={{ background: 'rgba(255,255,255,0)', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid rgba(255,255,255,0)' }}
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
      >
        <h4 className="vertical-timeline-element-subtitle">How The Model Works</h4>
        <p>
          We place an onsite Partner who will solely recruit for your business with the support of our wider resource team.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="03"
        contentStyle={{ background: 'rgba(255,255,255,0)', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid rgba(255,255,255,0)' }}
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
      >
        <h4 className="vertical-timeline-element-subtitle">What Are The Benefits</h4>
        <p>
          Dedicated Talent Partner for your business. Large candidate pool to hire from. Reduced cost. Leading ATS tech implementation with ownership of all applicants. No rebates to worry about. Our experience and network.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="04"
        contentStyle={{ background: 'rgba(255,255,255,0)', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid rgba(255,255,255,0)' }}
        iconStyle={{ background: 'rgb(255,255,255)', color: '#000' }}
      >
        <h4 className="vertical-timeline-element-subtitle">What We Need To Know</h4>
        <p>
          How many hires do you need to make? 
          Over what period? 
          What would this typically cost you?
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="05"
        contentStyle={{ background: 'rgba(255,255,255,0)', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid rgba(255,255,255,0)' }}
        iconStyle={{ background: 'rgb(255,255,255)', color: '#000' }}
      >
        <h4 className="vertical-timeline-element-subtitle">What Does It Cost?</h4>
        <p>
          From the data above we apply a 40% reduction against typical spend. The remainder is then broken down to a monthly fee spread over the time of engagement.
        </p>
      </VerticalTimelineElement>

      {/* <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="06"
        contentStyle={{ background: 'rgba(255,255,255,0)', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid rgba(255,255,255,0)' }}
        iconStyle={{ background: 'rgb(255,255,255)', color: '#000' }}
      >
        <h4 className="vertical-timeline-element-subtitle">Example Of Fees</h4>
        <p>
          10 hires needed over 6 months. Average salary of £50K is a traditional recruitment spend of £100k. Our cost would be 60K spread ove the 6 months. Saving of £40K.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="07"
        contentStyle={{ background: 'rgba(255,255,255,0)', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid rgba(255,255,255,0)' }}
        iconStyle={{ background: 'rgb(255,255,255)', color: '#000' }}
      >
        <h4 className="vertical-timeline-element-subtitle">What Next?</h4>
        <p>
          Get in touch for an initial chat.
          fred@youareuncommon.com
          07926 852625
        </p>
      </VerticalTimelineElement> */}

    </VerticalTimeline>
  )


}



export default Timeline

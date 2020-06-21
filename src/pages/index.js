import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import ReactFullpage from "@fullpage/react-fullpage"

import { 
  useGlobalState,
  setGlobalState,
  tabs
 } from '../store';

import useWindowSize from '../utils/useWindowSize'

import Layout from "components/layout"
// import Image from "src/components/image"
import SEO from 'components/seo'

import Timeline from "components/timeline"
import ContactForm from "components/contactform"
import TextFlip from "components/text-flip"
import Profiles from "components/profiles"


import LogoMind from 'images/logo.mind.svg'
import LogoFitLink from 'images/logo.fitlink.svg'
import LogoCodeUntapped from 'images/logo.codeuntapped.svg'
import LogoMotusVFX from 'images/logo.motusvfx.png'
import LogoWorkable from 'images/logo.workable.svg'




const IndexPage = () => {

  const [animations, setAnimation] = useState({
    slideIndex: 0,
    mobileMenuOpen: false
  });

  const [ activeTab ] = useGlobalState('activeTab');
  const [ loaded ] = useGlobalState('loaded');

  const onLeave = (origin, destination, direction) => {
    setAnimation({ ...animations, slideIndex: destination.index })
  };

  const windowSize = useWindowSize()

  const closeMobileMenu = () => {
    setAnimation({ ...animations, mobileMenuOpen: false });
  }

  useEffect(() => {
    if (windowSize.width < 691) {
      setAnimation({ ...animations, mobileMenuOpen: false });
    }
  },[windowSize.width]);

  useEffect(()=> {
    setTimeout(() => {
      setGlobalState('loaded', true);
    }, 350);
  }, [])


  return (
    <Layout>
      <SEO title="Home" />


      {
          loaded === false &&
          <div 
            className={`loading`}
            style={{
              top: 0, 
              right: 0, 
              bottom: 0, 
              left: 0, 
              position: 'absolute',
              zIndex: 2,
              background: 'rgba(0,0,0,1)'
            }}
          >
          </div>
        }      

      <nav className={`main-navigation slide-index-${animations.slideIndex} ${animations.mobileMenuOpen ? 'open' : '' }`}>
        <ul>
          <li>
            <a onClick={closeMobileMenu} href="#home">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMobileMenu} href="#the-uncommon-way">
              The Uncommon Way
            </a>
          </li>
          <li>
            <a onClick={closeMobileMenu} href="#team">
              Team
            </a>
          </li>
          <li>
            <a onClick={closeMobileMenu} href="#our-partners">
              Our Partners
            </a>
          </li>
          <li>
            <a onClick={closeMobileMenu} href="#contact-us">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <button 
        className={
          `mobile-menu-toggle slide-index-${animations.slideIndex}`
        }
        onClick={() => {
          if (animations.mobileMenuOpen === false) {
            setAnimation({ ...animations, mobileMenuOpen: true });
          }
          else {
            setAnimation({ ...animations, mobileMenuOpen: false });
          }
        }}
      >
        Menu
      </button>


      <ReactFullpage
        licenseKey={'A544E00F-357B4CDB-91CAB9DD-B0D601EF'}
        scrollingSpeed={750}
        scrollOverflow={true}
        anchors={['home', 'the-uncommon-way', 'the-uncommon-way', 'the-uncommon-way', 'team', 'our-partners', 'contact-us']}
        sectionsColor={['black', '#00c2cb', 'white', 'black', 'white', '#00c1ca', 'black']}
        easing={'easeInOutCubic'}
        easingcss3={'ease'}

        onLeave={onLeave.bind(this)}
        loopBottom={false}
        keyboardScrolling={true}

        parallax={true}
        parallaxOptions={{
          type: 'reveal', percentage: 62, property: 'translate'
        }}



        render={({ state, fullpageApi }) => {

          return (
            <ReactFullpage.Wrapper>

              <section className={`section section-theme-dark section-home`}>
                <div className="section-contents">
                  <div className={`home-animation`}>
                    <h4>YOU ARE</h4>
                    <TextFlip />
                  </div>
                  <div className={`contact-form-links`}>
                    <button onClick={() => {
                      fullpageApi.moveTo(7, 0);
                      setGlobalState('activeTab', tabs[0]);
                    }} className={`buttons`}>
                      I need uncommon talent
                    </button>
                    <button onClick={() => {
                      fullpageApi.moveTo(7, 0);
                      setGlobalState('activeTab', tabs[1]);
                    }} className={`buttons`}>
                      I am uncommon talent
                    </button>
                  </div>
                </div>
              </section>


              <section className="section section-timeline section-timeline-01 fp-section fp-completely">
                <div className="section-contents">
                  <h3 className={`fixed-title`}>
                    The Uncommon Way
                  </h3>
                  <h2>01.</h2>
                  <div className={`container-timeline-section`}>
                    <h3>Vision</h3>
                    <p>Our goal is to banish every frustration you've ever had when trying to hire great talent, tough job we know but it's our mission to make hiring the Uncommon, common.
                    </p>
                  </div>
                </div>
              </section>


              <section className="section section-timeline section-timeline-02 fp-section fp-completely">
                <div className="section-contents">
                  <h3 className={`fixed-title`}>
                    The Uncommon Way
                  </h3>
                  <h2>02.</h2>
                  <div className={`container-timeline-section`}>
                    <h3>Culture</h3>
                    <p>
                      We believe to recruit successfully you need brand immersion, a perfect hybrid between internal and agency recruitment. Our onsite model is designed to achieve better results for growth by working closely with your organisation to help understand and promote your culture.
                    </p>
                  </div>
                </div>
              </section>


              <section className="section section-theme-dark section-timeline section-timeline-03 fp-section fp-completely">
                <div className="section-contents">
                  <h3 className={`fixed-title`}>
                    The Uncommon Way
                  </h3>
                  <h2>03.</h2>
                  <div className={`container-timeline-section`}>
                    <h3>Unlimited</h3>
                    <p>Uncommon is here to unleash your hiring potential, giving you unlimited ownership of any prospective talent we engage with on your behalf. Through talent pools and technology innovation we help you create a model that is cost effective.
                    </p>
                  </div>
                </div>
              </section>


              <section className="section section-team fp-section fp-completely">
                <div className="section-contents">
                  <h3>Meet the Founders</h3>
                  <Profiles />
                </div>
              </section>



              <section className="section section-partners">
                <div className="section-contents">
                  <h3>Our Partners</h3>
                  <div className="partners">
                    <div className="partner">
                      <a href="https://fitlinkapp.com/" target="_blank">
                        <img src={LogoFitLink} />
                      </a>
                    </div>
                    <div className="partner">
                      <a href="https://www.workable.com/" target="_blank">
                        <img src={LogoWorkable} />
                      </a>
                    </div>
                  </div>
                  <div className="partners">
                    <div className="partner">
                      <a href="https://www.mind.org.uk/" target="_blank">
                        <img src={LogoMind} />
                      </a>
                    </div>
                    <div className="partner">
                      <a href="https://codeuntapped.com/" target="_blank">
                        <img src={LogoCodeUntapped} />
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <section className="section section-theme-dark section-contact fp-section fp-completely">
                <div className="section-contents">
                  <h3>Contact Us</h3>
                  <ContactForm />
                </div>
              </section>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </Layout>
  )
};


export default IndexPage


import React, { useState, useEffect } from "react"
import { PageProps, Link } from "gatsby"
import axios from 'axios';
import qs from 'qs';

import { 
  useGlobalState,
  setGlobalState,
  tabs
 } from '../store';

import './contactform.scss'



const ContactForm = (props: PageProps) => {

  const [ activeTab ] = useGlobalState('activeTab');

  useEffect(() => {
  }, [activeTab]);

  const [form, setState] = useState({
    // Talent
    companyName: '',
    companyEmail: '',
    companyHires: '',
    companyTimeline: '',
    companyHelp: '',
    // Job Hunt
    talentName: '',
    talentEmail: '',
    talentProfession: '',
    talentLevel: '',
    talentMotivations: '',
    // Composed Email
    composedName: '',
    composedEmail: '',
    composedBody: ''
  });

  const updateField = evt => {
    setState({
      ...form,
      [evt.target.name]: evt.target.value
    });
  };

  useEffect(() => {
  }, [form]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let composed = {
      name: '',
      email: '',
      body: ''
    };
    composed.name = activeTab.id === 'talent' ? form.companyName : form.talentName;
    composed.email = activeTab.id === 'talent' ? form.companyEmail : form.talentEmail;
    composed.body = activeTab.id === 'talent' ? 
      `
        Talent Hunt\n\n\n
        Number of hires: ${form.companyHires}. \n\n
        Timeline: ${form.companyTimeline}. \n\n
        How can we help: ${form.companyHelp}. \n\n
      ` 
      : 
      `
        Job Hunt\n\n\n
        My days are spent: ${form.talentProfession}. \n\n
        I am a: ${form.talentLevel}. \n\n
        Main drivers are: ${form.talentMotivations}. \n\n
      `;


    const headers =  {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    axios
      .post(
        'https://send.pageclip.co/4F9YRyg2dDJP574uoZBheuuVsgZamRxK', 
        qs.stringify(composed)
      )
    .then((resp) => {
      // console.log('Submitted', resp);
      setGlobalState('activeTab', { id: 'thank-you', name: 'Thank You' });
    })
    .catch((resp) => {
      // console.error('Error Submitting', resp);
    })
    setGlobalState('activeTab', { id: 'thank-you', name: 'Thank You' });
    

  }

  return (
    <div className={`contact-form tabbed ${activeTab.id}`}>
      <nav className={`tabs`}>
        {
          tabs.map(tab => (
            <button 
              key={tab.id} 
              onClick={() => setGlobalState('activeTab', tab)} 
              className={`buttons ${activeTab.id === tab.id ? 'active' : ''}`}
            >
              {tab.name}
            </button>
          ))
        }
      </nav>

      <div className={`tab tab-talent-hunt ${activeTab.id === 'talent' ? 'active' : ''}`}>
        <form className="contact-form" method="post" onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="companyName">Company Name</label>
            <input type="text" name="companyName" value={form.companyName} onChange={updateField} required />
          </fieldset>
          <fieldset>
            <label htmlFor="companyEmail">Email</label>
            <input type="email" name="companyEmail" value={form.companyEmail} onChange={updateField} required />
          </fieldset>
          <fieldset>
            <label htmlFor="companyHires">Number of hires?</label>
            <select name="companyHires" value={form.companyHires} onChange={updateField} required>
              <option disabled defaultValue="" value="">Select an option</option>
              <option value="0-5">0-5</option>
              <option value="5-10">5-10</option>
              <option value="10-15">10-15</option>
              <option value="15+">15+</option>
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="companyTimeline">Timeline?</label>
            <select name="companyTimeline" value={form.companyTimeline} onChange={updateField} required>
              <option disabled defaultValue="" value="">Select an option</option>
              <option value="0-3">0-3 months</option>
              <option value="3-6">3-6 months</option>
              <option value="6-12">6-12 months</option>
              <option value="12+">12 months +</option>
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="companyHelp">How can we help?</label>
            <select name="companyHelp" value={form.companyHelp} onChange={updateField} required>
              <option disabled defaultValue="" value="">Select an option</option>
              <option value="Find me talent">Find me talent</option>
              <option value="Build/support our function">Build/support our function</option>
              <option value="Reduce our spend">Reduce our spend</option>
              <option value="All of the above">All of the above</option>
            </select>
          </fieldset>
          <fieldset>
            <button type="submit" className="buttons pageclip-form__submit">
              <span>Send</span>
            </button>
          </fieldset>
        </form>
      </div>

      <div className={`tab tab-job-hunt ${activeTab.id === 'job' ? 'active' : ''}`}>
        <form className="contact-form" method="post" onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="talentName">Name</label>
            <input type="text" name="talentName" value={form.talentName} onChange={updateField} required />
          </fieldset>
          <fieldset>
            <label htmlFor="talentEmail">Email</label>
            <input type="email" name="talentEmail" value={form.talentEmail} onChange={updateField} required />
          </fieldset>
          <fieldset>
            <label htmlFor="talentProfession">My days are spent</label>
            <select name="talentProfession" value={form.talentProfession} onChange={updateField} required>
              <option disabled defaultValue="" value="">Select an option</option>
              <option value="Engineering">Engineering</option>
              <option value="Designing">Designing</option>
              <option value="Managing">Managing</option>
              <option value="Other">Other</option>
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="talentLevel">I am a</label>
            <select name="talentLevel" value={form.talentLevel} onChange={updateField} required>
              <option disabled defaultValue="" value="">Select an option</option>
              <option value="Junior">Junior</option>
              <option value="Midweight">Midweight</option>
              <option value="Senior">Senior</option>
              <option value="Leader">Leader</option>
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="talentMotivations">Main drivers are</label>
            <select name="talentMotivations" value={form.talentMotivations} onChange={updateField} required>
              <option disabled defaultValue="" value="">Select an option</option>
              <option value="Salary">Salary</option>
              <option value="Location">Location</option>
              <option value="Technology">Technology</option>
              <option value="Company">Company</option>
              <option value="All the above">All the above</option>
            </select>
          </fieldset>
          <fieldset>
            <button type="submit" className="buttons pageclip-form__submit">
              <span>Send</span>
            </button>
          </fieldset>
        </form>
      </div>


      <div className={`tab tab-thank-you ${activeTab.id === 'thank-you' ? 'active' : ''}`}>
        <h2>Your message is on the way</h2>
      </div>

    </div>
  );

};



export default ContactForm;

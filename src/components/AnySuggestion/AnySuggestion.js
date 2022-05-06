import React from "react";
import './AnySuggestion.css';
import sug from "../../images/sug.png"

const AnySuggestion = () => {
  return (
    <div className="pb-5 container">
      
      <div className="as-main">
      <div>
            <img style={{width: '100%', height: '90%'}} src={sug} alt=""/>
        </div>
        <div className='as-top'>
          <p className="ms-3 text-justify" style={{color: 'rgb(11,158,11)'}}>
            We always welcome a new idea or a plan that can improve our
            services. If you think of anything that can make our services
            better, feel free to let us know.
          </p>
          <div className='as-bottom m-3'>
        <form>
          <div>
            <label className="label-as">Your Name</label>
            <br/>
            <input className="form-input-as" type="text" name="name" id="name" placeholder="" />
          </div>
          <div>
            <label className="label-as">Your Email</label>
            <br/>
            <input className="form-input-as" type="email" name="email" id="email" placeholder="" />
          </div>
          <div>
            <label className="label-as">Your Suggestion</label>
            <br/>
            <textarea
            className="text-area-as"
              name="suggestion"
              id="suggestion"
              placeholder=""
            ></textarea>
            <br/>
            
          </div>
          <button className="btn-as-form-sub"type="submit">Submit</button>
        </form>
        </div>
        </div>
        
        
       
        
      </div>
    </div>
  );
};

export default AnySuggestion;

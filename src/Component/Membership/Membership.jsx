import React from 'react';
import './Membership.css';
// import Carousel from '../Carousel/Carousel';

const Membership = () => {
  return (
    <div className='Mdiv'>
      <div className='MContent'>
        <div>
          <p className='MFirstPara mar'>Support human stories</p>
          <p className='MSecondPara mar'>
            Become a member to read without limits or ads, fund great writers, and join a global community of people who care about high-quality storytelling.
          </p>
          <div className='button-group'>
            <button className='GetStarted Mem-button' aria-label='Get started with membership'>Get started</button>
            <button className='Mem-button' aria-label='View membership plans'>View plans</button>
          </div>
        </div>
        {/* <div className='carousel-container'>
          <Carousel />
        </div> */}
      </div>

      <div className='Scrollable-part'>
        <p className='Mem-left-fixed'>Why membership?</p>
        <div className='Mem-right-scrollable'>
          <div className='benefit'>
            <p className='title'>Reward writers</p>
            <p className='title-details'>Your membership directly supports the writers, editors, curators, and teams who make Medium a vibrant, inclusive home for human stories. A portion of your membership is allocated to the writers of the stories you read and interact with.</p>
          </div>
          <div className='benefit'>
            <p className='title'>Unlock every story</p>
            <p className='title-details'>Get access to millions of original stories that spark bright ideas, answer big questions, and fuel bold ambitions.</p>
          </div>
          <div className='benefit'>
            <p className='title'>Enhance your reading experience</p>
            <p className='title-details'>Immerse yourself in audio stories, read offline wherever you go, and connect with the Medium community on Mastodon.</p>
          </div>
          <div className='benefit'>
            <p className='title'>Evaluate your writing</p>
            <p className='title-details'>Create and contribute to publications to collaborate with other writers, create a custom domain for your profile, and level up your writing with our simple but powerful publishing tools.</p>
          </div>
          <div className='benefit'>
            <p className='title'>Support a mission that matters</p>
            <p className='title-details'>Members are creating a world where original, human-crafted stories thrive. As a member-supported platform, quality comes first, not ads or clickbait.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Membership;

import React from 'react';
import './OurStory.css';
import { Link } from 'react-router-dom';

const OurStory = () => {
    return (
        <div className='OSdiv'>
            <p id='OSBigp'>Everyone has a story to tell</p>
            <p className='OSpara'>
                Medium is a home for human stories and ideas. Here, anyone can share knowledge and wisdom with the world—without having to build a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right readers for whatever you have to say.
            </p>
            <p className='OSpara secpara'>
                Ultimately, our goal is to deepen our collective understanding of the world through the power of writing.
            </p>
            <p className='OSpara'>
                We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.
            </p>
            <p className='OSpara'>
                Over 100 million people connect and share their wisdom on Medium every month. They’re software developers, amateur novelists, product designers, CEOs, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too.
            </p>
            <p className='OSpara lastpara'>
                Instead of selling ads or selling your data, we’re supported by a growing community of over a million <Link className='cla' to='/Membership'>Medium members</Link> who believe in our mission. If you’re new here, start reading. Dive deeper into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar—and then write your story.
            </p>

            <div className='OSbottom'>Start Reading</div>
            <div className='OSbottom'>Start Writing</div>
            <div className='OSbottom'>Become a Member</div>
        </div>
    );
};

export default OurStory;

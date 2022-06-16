import React from 'react';
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {motion} from 'framer-motion'
const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
            <a href="https://github.com/tangk87" target="_blank" rel="noreferrer">
                    <BsGithub/>
                </a>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/winson-t-026a5821b/" target="_blank" rel="noreferrer">

                    <BsLinkedin/>
            </a>
            </div>
        </div>
    )
}

export default SocialMedia
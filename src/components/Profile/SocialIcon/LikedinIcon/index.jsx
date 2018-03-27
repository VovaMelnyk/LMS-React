import React from 'react';
import '../styles.scss';

const LikedinIcon = ({ LsocialUrl, LIconWidth, LIconHeight }) => (
  <a href={ LsocialUrl } className="SocialIcon" >
    <svg xmlns="http://www.w3.org/2000/svg"width={LIconWidth} height={LIconHeight} viewBox="0 0 512 512">
      <path id="LikedinIcon-circle" d="M256 0C114.609 0 0 114.609 0 256c0 141.391 114.609 256 256 256 141.391 0 256-114.609 256-256C512 114.609 397.391 0 256 0zm0 472c-119.297 0-216-96.703-216-216S136.703 40 256 40s216 96.703 216 216-96.703 216-216 216z" data-original="#000000" data-old_color="#fff" />
      <path id="LikedinIcon" d="M128.094 383.891h48v-192h-48v192zm192-192c-41.094.688-61.312 30.641-64 32v-32h-48v192h48v-112c0-4.108 10.125-37 48-32 20.344 1.328 31.312 28.234 32 32v112l47.812.219V251.188c-1.687-19.188-11.281-58.61-63.812-59.297zm-168-64c-13.25 0-24 10.734-24 24s10.75 24 24 24 24-10.734 24-24-10.75-24-24-24z" data-original="#000000" data-old_color="#fff" />
    </svg>
  </a>
);

export default LikedinIcon;

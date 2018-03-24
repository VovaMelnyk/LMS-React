import React from 'react';
import HeaderMain from "@/components/Common/HeaderMainBlock";
import RightNav from "@/components/Common/RightNav";
import Content from "@/components/Theory/Content";
import data from "@/components/Common/teoHw.js";

const TheoryPage = () => (
  <div>
    < HeaderMain
    module = {data[0].dest}
    themNum = {data[0].number}
    themTitle = {data[0].title}
    time = {data[0].timer}
    />
< RightNav />
< Content
  content = {data[0].content[0].contentTitle}
  text = {data[0].content[0].contentText}
/>
  </div>
);

export default TheoryPage;

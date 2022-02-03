import React, {useEffect, useState} from 'react';
import Divider from '../Components/Divider';
import TweetBox from '../Components/TweetBox'
import {PopulerIcon} from '../Icons/Icon'
import db from '../Firebase'
import FeedList from '../Components/FeedList'

import { collection, onSnapshot, orderBy } from "firebase/firestore";
function Content() {
const [tweets, setTweets] = useState([])
useEffect(()=>{
  const unsubscribe = onSnapshot(collection(db, "user"),orderBy("timestamp", "desc"), (response) => {
    
    setTweets(response.docs.map((doc)=> doc.data()))
   });
},[])



  return <main  className='flex-1 flex-col border-r border-l border-gray-extraLight'>
<header className='sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray- extraLight bg-white'>
  <span className='font-bold text-xl text-gray-900'>
Home
  </span>
<PopulerIcon className="w-6 h-6  test-primary-base"/>
</header>
<div className='flex px-3 py-3 space-x-4'>
  <img src="https://pbs.twimg.com/profile_images/1485700823627837444/31Ks1frh_400x400.jpg" alt="" className='w-11 h-11 rounded-full'/>
  <TweetBox />
</div>
<Divider />
<FeedList  tweets={tweets}/>
  </main>;
}

export default Content;

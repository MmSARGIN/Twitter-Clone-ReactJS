import React,{ useState} from "react";
import { ImageIcon, GIFIcon, PollIcon, EmojiIcon, ScheduleIcon } from "../Icons/Icon";
import db from '../Firebase';

 

import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

function TweetBox() {

const[content, setContent] = useState("")

const sendTweet = () => {
  
    if(content !== "") {
         const docRef =  addDoc(collection(db , "user"), {  
        displayName : "Mehmet Melih Sargın", 
        userName : "@mehmetmelih53",
        content: content,
        timestamp : serverTimestamp(),
        avatar : "https://pbs.twimg.com/profile_images/1485700823627837444/31Ks1frh_400x400.jpg",
        isim: "melih"
       } )
       .then((res) => console.log())
       
        setContent("")
    }
}


  return (
    <div className="flex-1 flex flex-col mt-2 px-2">
      <textarea
      onChange={(e) => setContent(e.target.value)}
        className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
        placeholder="What's happening?"
        value={content}
      />
      <div className="flex items-center justify-between">
        <div className="flex -ml-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ImageIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <GIFIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <PollIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <EmojiIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ScheduleIcon className="w-6 h-6 text-primary-base" />
          </div>

        </div>
        <button onClick={sendTweet} className="bg-primary-base text-white rounded-full px-4 py-2 font-medium">
          Tweet
        </button>
      </div>
    </div>
  );
}

export default TweetBox;


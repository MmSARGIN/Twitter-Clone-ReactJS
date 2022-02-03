import React, {useEffect, useState} from "react";
import { ReplyIcon, ReTweetIcon, LikeIcon, ShareIcon } from "../Icons/Icon";
import { doc, deleteDoc, onSnapshot, collection, orderBy } from "firebase/firestore";
import db from "../Firebase";

function FeedItem({
  avatar,
  content,
  displayName,
  image,
  timestamp,
  userName,
}) {


  const [info, SetInfo] =useState([])
  useEffect(()=>{
    const unsubscribe = onSnapshot(collection(db, "user"),orderBy("timestamp", "desc"), (response) => {
      
      SetInfo(response.docs.map((doc)=> doc.data()))
     });
  },[])


  // const delClick = (e) => {
  //   deleteDoc(doc(db, "user", ""));
    
  // };

  return (
    <article className="flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer">
      <img src={avatar} className="w-11 h-11 rounded-full" alt="Profile" />
      <div className="flex-1">
        <div className="flex items-center text-sm">
          <h4 className="font-bold ">{displayName}</h4>
          <span className="text-gray-dark ml-2">{userName}</span>
          <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full" />
          <span className="tex-gray-dark">
            {timestamp?.toDate().toLocaleTimeString("tr-TR")}
          </span>
        </div>
        <p className="mt-2 text-gray-900 text-sm">{content}</p>
        <ul className="-ml-1 mt-3 flex justify-between max-w-md">
          <li className="flex item-center space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center rounded-full w-8 h-8 group-hover:bg-primary-light">
              <ReplyIcon className="w-5 h-5 group-hover:text-primary-base" />
            </div>
            <span className="group-hover:text-primary-base">7</span>
          </li>
          <li className="flex item-center space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center rounded-full w-8 h-8 group-hover:bg-green-100">
              <ReTweetIcon className="w-5 h-5 group-hover:text-green-400" />
            </div>
            <span className="group-hover:text-primary-base">7</span>
          </li>
          <li className="flex item-center space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center rounded-full w-8 h-8 group-hover:bg-red-100">
              <LikeIcon className="w-5 h-5 group-hover:text-red-400" />
            </div>
            <span className="group-hover:text-primary-base">7</span>
          </li>
          <li className="flex item-center space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center rounded-full w-8 h-8 group-hover:bg-primary-light">
              <ShareIcon className="w-5 h-5 group-hover:text-primary-base" />
            </div>
          </li>
          <li className="flex item-center space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center rounded-full w-8 h-8 group-hover:bg-primary-light">
              <button
                
                className="flex justify-center items-center w-5 h-5 group-hover:text-primary-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                  <path d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default FeedItem;



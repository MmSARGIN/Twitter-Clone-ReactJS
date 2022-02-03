import React, {useState} from 'react';
import SideLink from '../Components/SideLink';
import UserBox from '../Components/UserBox';
import { HomeIcon, ExploreIcon, NotificationIcon, MessagesIcon, MarksIcon, ListIcon, ProfilIcon, MoreIcon} from '../Icons/Icon'
import TwitterIcon from '../Images/logo.svg'
const sideLinks = [{
  name: "Home",
  icon: HomeIcon,
},
{
  name: "Explore",
  icon: ExploreIcon,
},
{
  name: "Notifications",
  icon: NotificationIcon,
},
{
  name: "Messages",
  icon: MessagesIcon,
},
{
  name: "Bookmarks",
  icon: MarksIcon,
},
{
  name: "Lists",
  icon: ListIcon,
},
{
  name: "Profile",
  icon: ProfilIcon,
},
{
  name: "More",
  icon: MoreIcon,
},
];



function SideBar() {
const [active, setActive] = useState("Home")
 const handleMenuItemClick = (name) =>{
   setActive(name)
 }
   
   

  return <div className='h-screen sticky top-0 flex flex-col justify-between px-2 w-64 '>
<div>
    <div className='mt-1 mb-4 ml-1 hover:bg-gray-lightest flex items-center justify-center w-12 h-12 rounded-full'>
    <img src={TwitterIcon} alt="Twitter Icon" className='w-9 h-9'/>
    </div>
   
    <nav className='mb-4'>
        <ul>
           {
              sideLinks.map(({ name, icon})=> <SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick={handleMenuItemClick}/>)
           }
        </ul>
    </nav>
    <button className='bg-primary-base hover:bg-primary-dark text-white rounded-full py-3 px-8 w-11/12 shadow-lg transform transition-colors duration-200'>Tweetle</button>
</div>
<UserBox />



  </div>;
}

export default SideBar;


import {SiAdobexd} from 'react-icons/si';
import {FaServer} from 'react-icons/fa';
import {AiFillAppstore} from 'react-icons/ai';
import {CgProductHunt} from 'react-icons/cg';
import {IoIosPeople} from 'react-icons/io';
import {MdManageAccounts} from 'react-icons/md';

const data = [
    {id:1, icon: <CgProductHunt/>, title:'Product', desc: "I organize and make product ideas useful so that customers or stakeholders give good responses."},
    
    {id:2, icon:<IoIosPeople/>, title: 'Team Work', desc: "I build a good partnership with various roles so as to achieve common goals."},
    
    {id:3, icon:<SiAdobexd/>, title: 'Design', desc:" My design are intuitive and classic. I use Industry-standard rule to make sure people like it"},
    
    {id:4, icon:<FaServer/>, title: 'Backend Developer', desc: "create a website backend with good technology from the laravel framework, node js and so on, so that data can be processed and accessed according to the role needed."},
    
    {id:5, icon: <AiFillAppstore/>, title: 'App Developer', desc: "I have made various applications, one of which is an e-commerce based application and so on."},

    {id:6, icon: <MdManageAccounts/>, title: 'Manage Application', desc: "I organize and use various methods in making and developing applications so that applications are very efficient"}
]

export default data;
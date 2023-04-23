import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { useCookies } from 'react-cookie';
import { useEffect } from "react";

const List = () => {
const [cookies, setCookie,removeCookie] = useCookies(['access_token']);

useEffect(()=>{
  setCookie('access_token', 'token', { path: '/' });
},[])

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List
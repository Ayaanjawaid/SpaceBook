import React from 'react';
import './home.css'
import Topbar from './topbar/Topbar';
import Leftbar from './leftbar/Leftbar';
import Rightbar from './rightbar/Rightbar';
import Centerbar from './centerbar/Centerbar'


class Home extends React.Component{
    render(){
        return(
            <div>
                <Topbar/>
                <div className='homeContainer'> 
                < Leftbar/>
                <Centerbar/>
                <Rightbar/>
                </div>
            </div>
        )
    }
}
export default Home;
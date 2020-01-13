import React from 'react'
import './app.css'

const getSeason = (lat,month) =>month > 2 && month < 9
? lat > 0?'summer':'winter'
: lat > 0?'winter':'summer'

const seasonConfig = {
summer:{
    text:'I like it Hot!!',
    iconName:'sun'
},
winter:{
    text:"It's so Cold!!",
    iconName:'snowflake'
}
}

const SeasonDisplay = (props) =>{

    const season = getSeason(props.lat,new Date().getMonth())
    const {text,iconName} = seasonConfig[season]
   

    return(
    <div className={`container ${season}`}>
        <i className={`${iconName} icon first massive`}/>
        <h1 className = 'center-text'>{text} </h1>    
        <i className={`${iconName} icon second massive`}/>
    </div>
    )
}
export default SeasonDisplay
import React from 'react'

export default function DetailsView({entry}) {
    if (entry) {
        const label = Object.keys(entry)
        console.log(entry)
        return(
        <div id= "EntryDetailedView">
            <div id = "DetailedHeader">
                <h3>Entry Details</h3>
            </div>
            <div id= "ActualDetails">
                <div id ="details_level_img_wrapper" >
                    <img id= "details_level_img" src = {"../Images/level"+entry.threat_level+".png"}></img>
                </div>
                <h3 id = "entry_date">{entry.date}</h3>
                <h3 id = "threat_level">{"Threat Level:" + entry.threat_level}</h3>
                <div id = "entry_details_wrapper">
                    <p id = "entry_details">{entry.data}</p>
            </div>
                
                    
            
            </div>
            
        </div>
        )
      
    }
    else{
        return (
            <div id= "EntryDetailedView">
                <div id = "DetailedHeader">
                    <h3>Entry Details</h3>
                </div>
                <div id= "ActualDetails">
                    <div id ="details_level_img_wrapper" >
                        <img id= "details_level_img" src = "../Images/level1.png"></img>
                    </div>
                    <h3 id = "entrynickname" >Label</h3>
                    <h3 id = "entry_date">Date</h3>
                    <h3 id = "threat_level">Threat Level</h3>
                    <div id = "entry_details_wrapper">
                        <p id = "entry_details">Details</p>
                    </div>
                    
                        
                
                </div>
                
            </div>
        )
    }
}

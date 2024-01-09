import React from 'react'
  
const Progress_bar = ({bgcolor,progress,height,startDate,endDate}) => {
     
    const Parentdiv = {
        height: height,
        width: '90%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 50
      }
      
      const Childdiv = {
        height: '100%',
        width: "50%",
        backgroundColor: "#e83184",
       borderRadius:40,
        // textAlign: 'right'
      }
      
      const progresstext = {
        // padding: 10,
        color: 'black',
        // fontWeight: 900
      }
        
    return (
    <> 
  
    <div style={Parentdiv}>
     <div style={Childdiv}>
        <span>37838</span>

       <span style={progresstext}>{`${progress} days` }</span>

      </div>

    </div>
    <span>37838</span>

    </> 
    )
}
  
export default Progress_bar;
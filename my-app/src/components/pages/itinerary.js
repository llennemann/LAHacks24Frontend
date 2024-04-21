import React from 'react';
import {useSelector} from 'react-redux';


function Itinerary() {
    const {loading,itinerary}=useSelector(state=>state.getITN)
    // console.log(itinerary)
  
    return loading===false && itinerary!==undefined?(
        <div className="itinerary-page">
            <div className="content-box">
                <h2 className='travel-diary'>YOUR TRAVEL DIARY:</h2>
                <div>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Time Slot</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(itinerary).map(([day, activities]) => (
            Object.entries(activities).map(([timeSlot, activity], index) => (
              <tr key={`${day}-${index}`}>
                {index === 0 && <td rowSpan={Object.keys(activities).length}>{day}</td>}
                <td>{timeSlot}</td>
                <td>{activity}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
                <button className="share-button">Share or Download </button> 
            </div>
        </div>
        // 
    //     <div>
    //   <h2>Itinerary</h2>
    //   <table style={{ borderCollapse: 'collapse', width: '100%' }}>
    //     <thead>
    //       <tr>
    //         <th>Day</th>
    //         <th>Time Slot</th>
    //         <th>Activity</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {Object.entries(itinerary).map(([day, activities]) => (
    //         Object.entries(activities).map(([timeSlot, activity], index) => (
    //           <tr key={`${day}-${index}`}>
    //             {index === 0 && <td rowSpan={Object.keys(activities).length}>{day}</td>}
    //             <td>{timeSlot}</td>
    //             <td>{activity}</td>
    //           </tr>
    //         ))
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    ):(<div>
        <div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>
        </div>);
}

export default Itinerary;

// function convertMixedDataToPlainText(data, prefix = '') {
//     let result = '';
  
//     if (Array.isArray(data)) {
//       data.forEach((item, index) => {
//         result += convertMixedDataToPlainText(item, `${prefix}[${index}]`);
//       });
//     } else if (typeof data === 'object') {
//       for (const key in data) {
//         const value = data[key];
//         if (typeof value === 'object') {
//           result += convertMixedDataToPlainText(value, `${prefix}.${key}`);
//         } else {
//           result += `${prefix}.${key}: ${value}\n`;
//         }
//       }
//     }
  
//     return result;
//   }
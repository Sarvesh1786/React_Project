import React, { useState } from "react";




//*****************************{  OR  }************************************** */


export default function EHooks() {
    const [name ,setName]= useState("Rahul");
    const [roll ,setRoll]= useState("1001");
   
  
  
    const handler = () => {
        if(name == "Rahul"){
      setName("Duggu Sharma");
      setRoll(1008);
    }else if (name !== "Rahul"){
        setName("Rahul");
        setRoll(1001);
    }

    };
  
    return (
      <React.Fragment>
        <h1>{name}</h1>
        <h1>{roll}</h1>

        <button onClick={handler}>Click Me</button>
      </React.Fragment>
    );
  }





//*****************************{  OR  }************************************** */


// export default function EHooks() {
//     const [name ,setName]= useState("Rahul");
   
  
  
//     const handler = () => {
//       setName("Duggu Sharma");
//     };
  
//     return (
//       <React.Fragment>
//         <h1>{name}</h1>
//         <button onClick={handler}>Click Me</button>
//       </React.Fragment>
//     );
//   }





//*****************************{  OR  }************************************** */


// export default function EHooks() {
//   const nameStateVariable = useState("Rahul");
//   const name = nameStateVariable[0];
//   const setName = nameStateVariable[1];


//   const handler = () => {
//     setName("Duggu Sharma");
//   };

//   return (
//     <React.Fragment>
//       <h1>{name}</h1>
//       <button onClick={handler}>Click Me</button>
//     </React.Fragment>
//   );
// }

//*******************************{  OR  }************************************ */

// export default function EHooks (){

//     const nameStateVariable = useState("Rahul");

//  const handler = () =>{
//     nameStateVariable[1]("Duggu Sharma");

//     }

// return <React.Fragment>

// <h1>{nameStateVariable[0]}</h1>
// <button onClick={handler}>Click Me</button>

// </React.Fragment>;

// };

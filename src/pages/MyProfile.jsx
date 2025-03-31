import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  // const [userData , setUserData] = useState({
  //     name:"Edward Vincent",
  //     image:assets.profile_pic,
  //     email:'richardJameswap@gmail.com',
  //     Phone:'+1 123 456 7890',
  //     address:{
  //       Line1:"57th cross, richmond",
  //       Line2:"Circle , Church Road , London"
  //     },
  //     gender:'Male',
  //     Dob:'2000-01-20'
  // })

  //   const [isEdit , setIsEdit] = useState(false)

  return (
    <>
    </>
    // <div className='max-w-lg flex flex-col gap-2 text-sm'>
    //     <img className='w-36 rounded' src={userData.image} alt="" />
        
    //     {
    //       isEdit 
    //       ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" onChange={e => setUserData(prev =>({...prev , name:e.target.value}))} />
    //       : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
    //     }

    //     <hr className='bg-zinc-400 h-[1px] border-none' />
    //     <div>
    //       <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
    //       <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
    //         <p className='font-medium'>Email id:</p>
    //         <p className='text-blue-500'>{userData.email}</p>
    //         <p className='font-medium'>Phone:</p>
    //         {
    //            isEdit 
    //            ? <input className='bg-gray-100 max-w-52' type="text" onChange={e => setUserData(prev =>({...prev , Phone:e.target.value}))} />
    //            : <p className='text-blue-400'>{userData.Phone}</p>
    //         }
    //         <p className='font-medium'>Address:</p>
    //         {
    //           isEdit
    //           ? <p> 
    //              <input className='bg-gray-50' onChange={(e) => setUserData(prev =>({...prev,address:{...prev.address,Line1:e.target.value} }))} value={userData.address.Line1} on type="text" />
    //              <br />
    //              <input className='bg-gray-50' onChange={(e) => setUserData(prev =>({...prev,address:{...prev.address,Line2:e.target.value} }))} value={userData.address.Line2} on type="text" />
    //              </p>
    //              : <p className='text-gray-500'>
    //               {userData.address.Line1}
    //               <br />
    //               {userData.address.Line2}
    //              </p>
    //         }
    //       </div>
    //     </div>
    //     <div>
    //       <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
    //       <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
    //         <p className='font-medium'>Gender:</p>
    //         {
    //            isEdit 
    //            ? <select className='max-w-20 bg-gray-100' onChange={(e)=>setUserData(prev =>({...prev , gender: e.target.value}))} value={userData.gender}>
    //             <option value="Male">Male</option>
    //             <option value="Female">Female</option>
    //            </select>
    //            : <p className='text-gray-400'>{userData.gender}</p>
    //         }
    //         <p className='font-medium'>Date Of Birth:</p>
    //         {
    //           isEdit
    //           ? <input className='max-w-28 bg-gray-100' type="date" onChange={(e)=>setUserData(prev =>({...prev , Dob: e.target.value}))} value={userData.Dob} />
    //           :<p className='text-gray-400'>{userData.Dob}</p>
    //         }
    //       </div>
    //     </div>
       
    //    <div className='mt-10' >
    //     {
    //       isEdit
    //       ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-500' onClick={()=>setIsEdit(false)}>Save information</button>
    //       : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-500' onClick={()=>setIsEdit(true)}>Edit</button>
    //     }
    //    </div>

    // </div>
  )
}

export default MyProfile


// local storage data fetch-------------------------------------------


// import React, { useState, useEffect } from "react";

// const ProfileForm = () => {
//   const [isEdit, setIsEdit] = useState(false);
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//   });

//   useEffect(() => {
//     const storedName = localStorage.getItem("name") || "";
//     const storedEmail = localStorage.getItem("email") || "";
//     setUserData({ name: storedName, email: storedEmail });
//   }, []);

//   return (
//     <div className="p-4 border rounded-md shadow-md max-w-md mx-auto">
//       <h2 className="text-lg font-semibold">Profile Information</h2>
//       <div className="mt-3">
//         <p className="text-gray-700">Full Name</p>
//         {isEdit ? (
//           <input
//             type="text"
//             className="border rounded p-2 w-full"
//             value={userData.name}
//             onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
//           />
//         ) : (
//           <p className="text-gray-900">{userData.name}</p>
//         )}
//       </div>

//       <div className="mt-3">
//         <p className="text-gray-700">Email</p>
//         {isEdit ? (
//           <input
//             type="text"
//             className="border rounded p-2 w-full"
//             value={userData.email}
//             onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
//           />
//         ) : (
//           <p className="text-gray-900">{userData.email}</p>
//         )}
//       </div>

//       <button
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//         onClick={() => setIsEdit(!isEdit)}
//       >
//         {isEdit ? "Save" : "Edit"}
//       </button>
//     </div>
//   );
// };

// export default ProfileForm;




// update local storage--------------------------------------------------------------


// import React, { useState, useEffect } from "react";

// const ProfileForm = () => {
//   const [isEdit, setIsEdit] = useState(false);
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//   });

//   // Load stored data from localStorage when component mounts
//   useEffect(() => {
//     const storedName = localStorage.getItem("name") || "";
//     const storedEmail = localStorage.getItem("email") || "";
//     setUserData({ name: storedName, email: storedEmail });
//   }, []);

//   // Function to handle save
//   const handleSave = () => {
//     localStorage.setItem("name", userData.name); // Update localStorage
//     setIsEdit(false); // Disable edit mode
//     alert("Profile updated successfully!"); // Notify user
//   };

//   return (
//     <div className="p-4 border rounded-md shadow-md max-w-md mx-auto">
//       <h2 className="text-lg font-semibold">Profile Information</h2>
      
//       <div className="mt-3">
//         <p className="text-gray-700">Full Name</p>
//         {isEdit ? (
//           <input
//             type="text"
//             className="border rounded p-2 w-full"
//             value={userData.name}
//             onChange={(e) =>
//               setUserData((prev) => ({ ...prev, name: e.target.value }))
//             }
//           />
//         ) : (
//           <p className="text-gray-900">{userData.name || "Not provided"}</p>
//         )}
//       </div>

//       <div className="mt-3">
//         <p className="text-gray-700">Email</p>
//         <p className="text-gray-900">{userData.email || "Not provided"}</p>
//       </div>

//       <button
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//         onClick={isEdit ? handleSave : () => setIsEdit(true)}
//       >
//         {isEdit ? "Save" : "Edit"}
//       </button>
//     </div>
//   );
// };

// export default ProfileForm;

``
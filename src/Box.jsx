function Box({text}){
 return <div className=" p-3 h-16 w-screen flex-row border-[2px] text-lg text-slate-500 bg-black flex items-center justify-between ">
     <div>{text}</div>
     <div>
   <button className="p-2 m-2 bg-white rounded-md text-black">Delete</button>
   <button className=" p-2 m-2 bg-white rounded-md text-black">Edit</button>
 </div>
 </div>
}
export default Box;

import React from "react";

const nav_bar = () => {
  return (
    <div className=" bg-gray-300 absolute bottom-0 top-0 border-2 w-16 rounded-xl ml-4 mt-6 mb-40">
      <div className="my-10 justify-center text-center">
        <img src="https://static.wixstatic.com/media/305663_8941f8a5130041f89c9c3aef6866f594~mv2.png/v1/fill/w_169,h_50,al_c,usm_0.66_1.00_0.01,enc_auto/Logo.png" />
      </div>
      <div className=" flex groq flex-col bottom-1 content-between mb-0 ">
        <div className="flex">
          <svg></svg>
        </div>
        <div>Tasks</div>
        <div>Team</div>
        <div>Workflo</div>
        <div>Settings</div>
      </div>
    </div>
  );
};

export default nav_bar;

// eslint-disable-next-line no-unused-vars
import React from "react";
// import Ticker from "../Components/Tricker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

// import Recent from "../Components/Recent";




const WhatsAppIcon = styled(FontAwesomeIcon)`
  font-size: 25px;
  color: green;
  position: relative;
  top: 10px;
  left: 10px;
  

`;

const Home = () => {
  return (
    <div>
      {/* <Ticker /> */}
      <main>
        <div className="flex flex-col bg-red-500 p-4">
          <section>
            <div className="p-8 flex gap-4  ">
              <div className="w-4/6 ">
                <div>
                  <div className="h-9 w-100 text-center text-white bg-blue-400 hover:cursor-pointer rounded-md">
                    Add Our WhatsApp Group
                    {/* <FontAwesomeIcon icon={faWhatsapp} size="2x" color="green" top="20px" left="30px" /> */}
                    <WhatsAppIcon icon={faWhatsapp} />
                  </div>
                  <div className="h-9 w-100 text-white bg-pink-500 mt-5 rounded-md">
                    Add our WhatsApp Group
                  </div>
                </div>
                {/* <h1 className="text-2xl font-bold">Welcome to My Website</h1>
            <p>More content here...</p> */}

                <div className="w-100 h-60 border border-gray-300 bg-white p-4 mt-4 shadow-md">
                  This is a box inside a div.
                </div>
              </div>

              <div className="w-2/6 bg-teal-500  rounded-lg">
                <h2 className="bg-green-600 text-white px-4 py-2 text-lg font-semibold text-start">
                  RECENT
                </h2>
                <div className="divide-y divide-gray-100">
                   {/* baki ta Recent component theke copy kore dibo */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;

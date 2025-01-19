// eslint-disable-next-line no-unused-vars
import React from "react";
import Ticker from "../Components/Tricker";
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
      <Ticker />
      <main>
        <div className="flex flex-col bg-red-500 p-4">
          <div className="p-8">
            <div>
              <div className="h-9 w-96 text-center text-white bg-blue-400 hover:cursor-pointer rounded-md">
                Add Our WhatsApp Group
                {/* <FontAwesomeIcon icon={faWhatsapp} size="2x" color="green" top="20px" left="30px" /> */}
                <WhatsAppIcon icon={faWhatsapp} />
              </div>
              <div className="h-9 w-96 text-white bg-pink-500 mt-5 rounded-md">
                Add our WhatsApp Group
              </div>
            </div>
            <h1 className="text-2xl font-bold">Welcome to My Website</h1>
            <p>More content here...</p>

            <div className="w-72 h-60 border border-gray-300 bg-white p-4 shadow-md">
              This is a box inside a div.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

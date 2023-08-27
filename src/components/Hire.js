import React, { useEffect, useState } from "react";
import { WavyLink } from "react-wavy-transitions";
import { Dialog, DialogBody, Typography, Button } from "@material-tailwind/react";
import { api } from "../api/api";
import { FcApproval, FcHighPriority } from "react-icons/fc";
import axios from "axios";
import ReactLoading from 'react-loading';
import MovingText from 'react-moving-text'

const Hire = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mailsucc, SetMailSucc] = useState(true);
  const [firstRender, setFirstRender] = useState(false);
  const [mail, SetMain] = useState({
    mail: "",
    subject: "",
    message: "",
    ip: "",
  });

  

  useEffect(() => {
    if (!firstRender) {
      axios
        .get("https://ipapi.co/json/")
        .then(async (res) => {
          SetMain({ ...mail, ip: res.data.ip });
        })
        .catch((err) => {
          console.log(err);
        });
      setFirstRender(true);
    }
  }, [firstRender]);

  const handleOpen = () => setOpen(!open);

  const addHireMeMail = async (HireMeMail) => {
    return await api.post("HireMe", HireMeMail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mail)
    setLoading(true)
    addHireMeMail(mail).then(res => {
      console.log(typeof res.data)
      
      if(typeof res.data == "boolean"){
        setLoading(false)
        SetMailSucc(true);
        handleOpen();
      }else{
        setLoading(false)
        SetMailSucc(false);
        handleOpen();
        console.log(res.data)
      }
      
     
    });
   
  };
  return (
    <div className="flex w-full h-[calc(100vh-148px)] justify-center">
      <div className="w-4/5 h-4/5 pt-5 rounded-md shadow-md">
     
        <section className="">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">

            


         
         
            <h2 className="mb-2 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            <MovingText
  type="shakeMix"
  duration="2000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="infinite"
  fillMode="none"
  className="font-extrabold">
   
  Do U want to hire an idiot who loves CODE?
</MovingText>
            </h2>
            <p className="mb-4 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 md:text-5xl">
              Hire mE !

            

            </p>
            <form className="space-y-8" onSubmit={(e) => handleSubmit(e)}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  value={mail.mail}
                  onChange={(e) => {
                    SetMain({ ...mail, [e.target.name]: e.target.value });
                  }}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 
                    block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                     dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@domain.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={mail.subject}
                  onChange={(e) => {
                    SetMain({ ...mail, [e.target.name]: e.target.value });
                  }}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500
                   focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
                    dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Add a Subject"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  name="message"
                  value={mail.message}
                  onChange={(e) => {
                    SetMain({ ...mail, [e.target.name]: e.target.value });
                  }}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 
                  focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                  dark:focus:border-primary-500"
                  placeholder="Leave a message..."
                  required
                ></textarea>
              </div>
              <div className="flex justify-between">
          
              
                {/* back to home  */}
                <WavyLink to="/me" duration={1000} direction="down" color="#E47373">
                <Button variant="text" className="bg-white hover:bg-[#E47373] font-gg1 text-sm">Back to home</Button>
              
            </WavyLink>
                {/* submit button */}
                <button type="submit">
                  <span className="relative px-6 py-3 font-bold text-black group">
                    <span
                      className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2
                     bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"
                    ></span>
                    <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                    <span className="relative font-gg1 text-sm">Submit</span>
                  </span>
                  
                </button>
              </div>
            </form>
          </div>
     
      
        </section>
       
       



      </div>
      <Dialog open={loading}>
      <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
        <ReactLoading type={"cylon"} color={"#E47373"} height={100} width={200} />
    </div>
      </Dialog>

      <Dialog open={open}>
        <DialogBody className="grid place-items-center gap-4">
          {mailsucc ? (
            <FcApproval className="text-6xl" />
          ) : (
            <FcHighPriority className="text-6xl" />
          )}
          <Typography color="black" variant="h2" className="font-gg1">
            {mailsucc ? " Thank You." : "I'm really Sorry  -_-"}
          </Typography>
          <Typography
            color="black"
            variant="h4"
            className="text-center font-gg1"
          >
            {mailsucc
              ? "Your message has been recieved"
              : "My mail service is under maintenance"}
            <br />
            {mailsucc ? "and" : "So , email reply will be delay !"}

            <br />
            {mailsucc && "I will be contacting you shortly to follow up."}

            {!mailsucc && (
              <>
                If you are urgent ,contact me directly via <br />{" "}
                <a href="tel:+6586470728">+65 86470728</a>
              </>
            )}
          </Typography>
          <div className="py-10">
            <WavyLink to="/" duration={1000} direction="up" color="#ebfd44">
              <button onClick={handleOpen}>
                <span className="relative px-6 py-3 font-bold text-black group">
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                  <span className="relative font-gg1">Go Back Home !</span>
                </span>
              </button>
            </WavyLink>
          </div>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default Hire;

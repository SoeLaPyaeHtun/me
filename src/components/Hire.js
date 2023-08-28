import React, { useEffect, useState } from "react";
import { Dialog, DialogBody, Typography } from "@material-tailwind/react";
import { api } from "../api/api";
import { FcApproval, FcHighPriority } from "react-icons/fc";
import axios from "axios";
import ReactLoading from "react-loading";
import MovingText from "react-moving-text";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

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
    console.log(mail);
    setLoading(true);
    addHireMeMail(mail).then((res) => {
      console.log(typeof res.data);

      if (typeof res.data == "boolean") {
        setLoading(false);
        SetMailSucc(true);
        handleOpen();
      } else {
        setLoading(false);
        SetMailSucc(false);
        handleOpen();
        console.log(res.data);
      }
    });
  };
  return (
    <div className="flex w-full h-[calc(100vh-148px)] justify-center">
      <div className="w-4/5 h-4/5 pt-5 rounded-md shadow-lg bg-opacity-25">
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
                className="font-extrabold"
              >
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
              <div className="flex justify-between items-center">
                {/* back to home  */}
                <div
                  onClick={() => {
                    navigate("/me");
                  }}
                  to="/me"
                  duration={1000}
                  direction="down"
                  color="#E47373"
                >
                  <button type="reset" className="font-gg1 text-sm">
                    Back to home
                  </button>
                </div>
                {/* submit button */}
                <button type="submit">
                  {/* <span className="relative px-6 py-3 font-bold text-black group">
                    <span
                      className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2
                     bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"
                    ></span>
                    <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                    <span className="relative font-gg1 text-sm">Submit</span>
                  </span> */}

                  <a href="#_" class="relative inline-block text-lg group">
                    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#eaf1df] rounded-lg group-hover:text-black">
                      <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                      <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#faaca8] group-hover:-rotate-180 ease"></span>
                      <span class="relative">Submit</span>
                    </span>
                    <span
                      class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#b06ab3] rounded-lg group-hover:mb-0 group-hover:mr-0"
                      data-rounded="rounded-lg"
                    ></span>
                  </a>
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Dialog open={loading}>
        <div
          role="status"
          class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
        >
          <ReactLoading
            type={"cylon"}
            color={"#E47373"}
            height={100}
            width={200}
          />
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
            <div
              onClick={() => {
                navigate("/me");
              }}
            >
              <button onClick={handleOpen}>
                <span className="relative px-6 py-3 font-bold text-black group">
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                  <span className="relative font-gg1">Go Back Home !</span>
                </span>
              </button>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default Hire;

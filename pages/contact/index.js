// COMPONETNS
import Circles from "../../components/Circles";
// FRMAER-MOTION
import { motion } from "framer-motion";
// VARIANTS
import { fadeIn } from "../../variants";
// ICON
import { BsArrowRight } from "react-icons/bs";
// EMAILJS
import emailjs from "@emailjs/browser";
// TOAST FUNCTION
import { Toaster } from "react-hot-toast";
import { notifySuccess, notifyError } from "../../utils/utils";
// REACT
import { useState } from "react";
// REACT ICONS
import { MdEmail } from "react-icons/md";

// TO SEND EMAIL TO RECIEVER
const EMAIL_USER_ID = "ZlrD0g4QOHIgy6HWL";
const EMAIL_SERVICE_ID = "service_tvqjusj";
const EMAIL_TEMPLATE_ID = "template_mpdm4wc";
emailjs.init(EMAIL_USER_ID);

// CONTACT FUNCTION
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  ///////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////

  // HANDLEINPUT FUNCTION
  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name == "name") {
      setName(value);
    } else if (name == "email") {
      setEmail(value);
    } else if (name == "subject") {
      setSubject(value);
    } else if (name == "message") {
      setMessage(value);
    }
  };
  // VALIDATEEMAIL FUNCTION
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if email is null, undefined, or a number, the String() function ensures that the input is safely converted to a string format before applying the regex test.
    return re.test(String(email).toLowerCase()); // returns true if the email is valid
  };
  // HANDLESENDBTN FUNCTION
  const handleSendBtn = (e) => {
    e.preventDefault();
    if (name == "" || email == "" || subject == "" || message == "") {
      notifyError("Please fill all the Fields!");
      return;
    }
    if (!validateEmail(email)) {
      notifyError("Please enter a valid Email Address!");
      return;
    }
    // SENDING EMAIL TO OWNER
    const emailData = {
      to_name: "Allah Rakha",
      user_name: name,
      user_email: email,
      to_email: "allahrakhahsp1234@gmail.com",
      message: message,
    };

    emailjs
      .send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, emailData)
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
    notifySuccess("Email sent Successfully!");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  // RETURNING
  return (
    <div className="h-full bg-primary/30">
      <Toaster />
      <div className="container mx-auto h-full py-32 xl:py-28 text-center xl:text-left flex items-center justify-center">
        {/* TEXT AND FORM */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* TEXT */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-4"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          {/* FORM */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            action=""
            className="flex flex-1 flex-col w-full mx-auto gap-4 xl:gap-5"
          >
            {/* INPUT GROUP */}
            <div className="flex gap-x-6 w-full">
              <input
                type="name"
                className="input capitalize"
                name="name"
                value={name}
                onChange={(e) => handleInput(e)}
                placeholder="name"
              />
              <input
                type="email"
                className="input"
                name="email"
                value={email}
                onChange={(e) => handleInput(e)}
                placeholder="email"
              />
            </div>
            <input
              type="subject"
              className="input capitalize"
              name="subject"
              value={subject}
              onChange={(e) => handleInput(e)}
              placeholder="subject"
            />
            <textarea
              name="message"
              placeholder="message capitalize"
              value={message}
              onChange={(e) => handleInput(e)}
              className="textarea"
            />
            <button
              className="btn flex items-center justify-center border border-white/50 max-w-[170px] rounded-full px-8 overflow-hidden hover:border-accent transition-all duration-300 group"
              onClick={(e) => handleSendBtn(e)}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 font-extrabold group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[25px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

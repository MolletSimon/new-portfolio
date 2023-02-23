import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactMe() {
  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    let f = form.current;
    if (
      f.from_name.value != "" &&
      f.from_email.value != "" &&
      f.message.value != ""
    ) {
      emailjs
        .sendForm(
          "service_jffzqdf",
          "template_df2d9sn",
          form.current,
          "BGTjNiT32RjOI3L13"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Mail envoyé !");
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      toast.error("Veuillez remplir tous les champs !");
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center h-screen bg-blue-100"
    >
      <h1 className="text-5xl font-bold text-pink-500 my-4" data-aos="fade-up">
        Contact me
      </h1>
      <div className="flex justify-center w-full mb-6">
        <div className="h-1 border-b-[2px] border-pastelPink mt-16 w-1/2"></div>
      </div>
      <form
        data-aos="fade-up-left"
        ref={form}
        onSubmit={onSubmit}
        className="w-full md:w-3/5 p-8 bg-white rounded-lg shadow-xl mt-8 shadow-primary flex flex-col justify-center"
      >
        <label
          htmlFor="from_name"
          className="block font-medium text-primary mb-2"
        >
          Nom
        </label>
        <input
          type="text"
          name="from_name"
          data-aos="fade-up"
          className="w-full px-3 py-2 border border-pastelPink rounded-md text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline"
        />

        <label
          htmlFor="from_email"
          className="block font-medium text-primary mb-2 mt-4"
        >
          Email
        </label>
        <input
          type="email"
          data-aos="fade-up"
          name="from_email"
          className="w-full px-3 py-2 border border-pastelPink rounded-md text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline"
        />

        <label
          htmlFor="message"
          className="block font-medium text-primary mb-2 mt-4"
        >
          Message
        </label>
        <textarea
          name="message"
          rows="4"
          data-aos="fade-up"
          className="w-full px-3 py-2 border border-pastelPink rounded-md text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline"
        />

        <button
          type="submit"
          className="w-2/3 mt-8 py-4 px-2 mx-auto font-medium border rounded-full bg-pastelPink border-pastelPink hover:transition-all hover:scale-110 hover:border-primary focus:outline-none focus:shadow-outline"
        >
          Envoyer
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default ContactMe;

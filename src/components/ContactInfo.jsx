
const ContactInfo = () => {
  return (
    <div className="container mx-auto mt-6  w-full px-4 pl-4" id="contactSection">
      <div className="m-4 rounded ">
        <div className="w-full  ">
          <h2 className="py-2 text-center text-3xl font-semibold text-black">
            Contact Info{" "}
          </h2>
        </div>
        <div className="m-6 grid grid-cols-3 gap-3 py-2  text-zinc-700">
          <div className="container border border-black p-4 bg-white"></div>
          <div className="container border border-black p-4 bg-white"></div>
          <div className="container border border-black p-4 bg-white"></div>
        </div>
      </div>{" "}
    </div>
  );
};

export default ContactInfo;

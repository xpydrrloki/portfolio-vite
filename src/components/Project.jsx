import CardProject from "./CardProject";
const Project = () => {
  return (
    <div className="container mx-auto w-full  px-4 pl-4 mt-6">
      <div className="m-4 rounded ">
        <div className="w-full  ">
          <h2 className="py-2 text-center text-3xl font-semibold text-black">
            Past Projects
          </h2>
          <div className="mx-auto w-[480px] text-center">
            <p className="text-zinc-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quo
              sapiente odit amet blanditiis recusandae optio ea vel quidem
              reiciendis dignissimos excepturi earum deserunt, dolores at ab
              tenetur consequuntur eaque!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 py-2 text-zinc-700  m-6">
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
        </div>
      </div>{" "}
    </div>
  );
};

export default Project;

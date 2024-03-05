import placeholder from "../assets/200x100.gif";
const CardProject = () => {
  return (
    <div className="flex w-full overflow-hidden bg-white p-4 rounded-md">
      <img
        className="max-h-[200px] object-cover p-2"
        src={placeholder}
        alt=""
      />

      <div className="px-1">
        <h3 className="text-2xl">Title</h3>
        <p className="line-clamp-3 text-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          delectus at, quod, nisi saepe laboriosam aperiam amet consequatur aut,
          natus beatae tenetur deleniti! Placeat unde commodi numquam natus
          dolorem sit! lorem
        </p>
      </div>
    </div>
  );
};
export default CardProject
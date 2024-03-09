export default function CommenteElement({ img, author, comment }) {
  return (
    <div className=" flex items-center justify-start py-4">
      <img
        src={img}
        alt=""
        className="w-16 h-16 object-cover bg-secondary p-2 rounded-full mr-2"
      />
      <div className=" flex-col ">
        <p>{author}</p>
        <div className="bg-[#2d2d2d6b] rounded-tr-md rounded-br-md rounded-bl-md p-1">
          <p className="text-sm">
            {comment}
          </p>
        </div>
      </div>
    </div>
  );
}

import { Comment } from "../interfaces/appInterfaces";
import { renderStars } from "../utils/Rating";
import { EditComment } from "./EditComent";

interface Props {
  key: number;
  comment: Comment;
  userId: number;
  setEdit: any;
  edit: boolean
  deleteComment: ({}) => void;
  
}

const Comments = ({ comment, deleteComment, userId, setEdit, edit }: Props) => {
  return (
    <>
      <div className="flex items-center ">
        <h3 className="md:text-4xl text-3xl font-semibold w-[35%]">
          {comment.user}
        </h3>
        <div className="px-4 flex flex-col gap-4 w-full">
          <div className="flex justify-end">{renderStars(comment.rating)}</div>

          <p className="md:text-2xl text-xl font-normal">
            {comment.description}
          </p>
        </div>
      </div>
      {comment.userId === userId && (
        <div className="flex justify-end gap-5">
          {/* <button
            className="border py-3 px-8 w-fit rounded-3xl font-semibold capitalize border-black text-black"
            onClick={() => {
              setEdit(true)
              document.getElementById("my_modal_1")!.showModal()

            }
            }

          >
           Editar
          </button> */}

          <button
            onClick={(e) => {
              e.preventDefault();
              deleteComment({
                id: comment.id,
                userId,
              });
            }}
            className="border py-3 px-8 w-fit rounded-3xl font-semibold capitalize border-black text-black"
          >
            Eliminar
          </button>
        </div>
      )}
      <div className="border border-[#264BEB]" />
    </>
  );
};

export default Comments;

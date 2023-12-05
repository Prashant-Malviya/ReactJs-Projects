import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ tutInfo,likedTutorial,setLikedTutorial }) {

    function likeHandler(){
        if(likedTutorial.includes(tutInfo.id)){
            setLikedTutorial((prev) => prev.filter((tutorialId) =>(tutorialId !== tutInfo.id ) ) )
            toast.warning("like removed");
        }
        else{
            if(likedTutorial.length === 0){
                setLikedTutorial([tutInfo.id]);
            }else{
                setLikedTutorial((prev)=> [...prev,tutInfo.id]);
            }
            toast.success("You Liked Tutorial")
        }
    }

  return (
    <div className="w-[300px] bg-purple-300	 bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={tutInfo.image.url} />

        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-11px] grid place-items-center">
          <button onClick={likeHandler}>
          {
            !likedTutorial.includes(tutInfo.id) ? 
            (<FcLikePlaceholder fontSize="1.80rem" />) : (<FcLike fontSize="1.80rem" />)
          }
          </button>
        </div>
      </div>
      <div className='p-4'>
      <p className='text-black font-semibold text-lg leading-6'>{tutInfo.title}</p>
      <p className='mt-2 text-black'>{
        tutInfo.description.length > 100 ? (tutInfo.description.substr(0,100)) + "...." : (tutInfo.description)
        }</p>
      </div>
    </div>
  );
}

export default Card;

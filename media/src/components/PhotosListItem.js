import { GoTrash } from 'react-icons/go';
import { useRemovePhotoMutation } from '../store';

function PhotosListItem({ photo }) {
  const [removePhoto] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo); // whenever it runs this 'mutation', it needs the 'photo' I want to delete, so Ill pass 'photo' Prop to 'removePhoto'
  };

  // 'photo' Prop itself is going to have an ID, URL, album.id (only need URL for showing and rendering the 'photo')
  return (
    <div onClick={handleRemovePhoto} className="relative cursor-pointer m-2">
      <img className="h-20 w-20" src={photo.url} alt="random pic" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrash className="text-3xl" />
      </div>
    </div>
  );
}

export default PhotosListItem;

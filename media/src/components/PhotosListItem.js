function PhotosListItem({ photo }) {
  // 'photo' Prop itself is going to have an ID, URL, album.id (only need URL for showing and rendering the 'photo')
  return (
    <div>
      <img className="h-20 w-20" src={photo.url} alt="random pic" />
    </div>
  );
}

export default PhotosListItem;

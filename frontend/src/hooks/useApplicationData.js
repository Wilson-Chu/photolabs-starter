const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    { state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal }
  );
};
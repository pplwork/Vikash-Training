import storage from '@react-native-firebase/storage';

export default file => onSuccess => onError => {
  console.log('file_____________', file)
  const path = 'contact-pictures/user/777/' + file.modificationDate || Date.now();

  const ref = storage().ref(path);

  const task = ref.putFile(file.path);

  task
    .then(async () => {
      try {
        const url = await ref.getDownloadURL();
        console.log('url calling on onsuccess', url)
        onSuccess(url);
      } catch (error) {
        console.log('error in uploading', error)
      }
    })
    .catch(error => {
      console.log("Error in uploading file")
      onError(error);
    });
};

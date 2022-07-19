import { collection, getDocs, setDoc, doc } from "firebase/firestore/lite";
import { db, auth } from "./firebase.config";

const addCity = async () => {
  const city = "Mumbai";

  await setDoc(doc(db, "cities", "random"), {
    city,
    state: "maha",
    country: "MSA",
  });
};

const getData = async () => {
  try {
    const location = collection(db, "locations");
    console.log(location);
    const locationSnapshot = await getDocs(collection(db, "locations"));
    const locationList = locationSnapshot.docs.map((doc) => doc.data());

    console.log(locationList);
    return locationList;
  } catch (error) {
    console.log(error);
  }
};

await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});

const docData = {
  stringExample: "Hello world!",
  booleanExample: true,
  numberExample: 3.14159265,
  dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
  arrayExample: [5, true, "hello"],
  nullExample: null,
  objectExample: {
      a: 5,
      b: {
          nested: "foo"
      }
  }
};
await setDoc(doc(db, "data", "one"), docData);

const sendMessage = async () => {
  await setDoc(doc(db, COLLECTION_NAME, projectId, SUB_COLLECTION_NAME, nanoid()), {
    text:'this is a sample text',
    createdAt: serverTimestamp(),
    name: currentUser?.firstName + ' ' + currentUser?.lastName,
    photoUrl: currentUser?.photoUrl,
    userId: currentUser?.id,
  });
}

const docRef = doc(db, "Users", currentUser.uid);
const docSnap = await getDocs(collection(docRef, "Posts"))

//
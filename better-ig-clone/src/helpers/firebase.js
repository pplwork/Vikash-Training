import { query } from "firebase/database";
import { collection, getDocs, where } from "firebase/firestore/lite";
import { db } from "../../firebase.config";

export const doesUsernameExist = async (username) => {
  const user = query(
    collection(db, "users"),
    where("username", "==", username)
  );
  const querySnap = await getDocs(user);

  return querySnap.empty;
};

import { useState, useEffect } from "react";
import { auth } from "../../firebase.config";

const useAuthListner = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("instaUser"))
  );

  useEffect(() => {
    const listner = auth.onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem("instaUser", JSON.stringify(user));
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }

      return () => listner();
    });
  }, []);

  return user;
};

// export default useAuthListner;

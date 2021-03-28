// Getting data from firebase
import { db } from "../firebase";

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  console.log(posts);

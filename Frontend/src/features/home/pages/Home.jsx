import FaceExpression from "../../Expression/components/FaceExpression";
import { useSong } from "../hooks/useSong";
import "./home.scss";

const Home = () => {
  const { handleGetSongsByMood } = useSong();

  return (
    <div className="home">
      <div className="home__header">
        <h1>Welcome to Moodify</h1>
        <p>Detect your mood and let the music match your vibe</p>
      </div>
      <FaceExpression
        onClick={(expression) => {
          handleGetSongsByMood(expression);
        }}
      />
    </div>
  );
};

export default Home;

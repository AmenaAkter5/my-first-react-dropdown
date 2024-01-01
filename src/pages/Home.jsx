import bgImage from "../../public/assets/images/bg.jpg";
import Navbar from "../components/Navbar/Navbar";
import NewHeader from "../components/NewHeader/NewHeader";
import NewHeader2 from "../components/NewHeader/NewHeader2";

const Home = () => {
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (selectedOption) => {
    console.log("Selected:", selectedOption);
    // You can perform any actions you want based on the selected option
  };
  return (
    <>
      {/* <Header /> */}
      <div
        className="bg-cover bg-no-repeat bg-center h-screen"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(38, 197, 232, 0.14) 0%, rgba(0, 149, 214, 0.14) 100%),url(${bgImage})`,
        }}
      >
        <NewHeader options={options} onSelect={handleSelect} />
        <NewHeader2 options={options} onSelect={handleSelect} />
        <Navbar options={options} onSelect={handleSelect} />
      </div>
    </>
  );
};

export default Home;

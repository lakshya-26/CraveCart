import landingImage from "../assets/landing.png";
import appImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import FoodGallery from "@/components/FoodGallery";
import HowItWork from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
      {/* Full-width section for search bar */}
      <div className="container mx-auto w-[85%] px-4 md:px-32 bg-white rounded-xl shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl">Food is just a click away</span>
        <SearchBar
          placeHolder="Search By city or town"
          onSubmit={handleSearchSubmit}
        />
      </div>

      {/* Full-width Food Gallery */}
      <div className="w-full py-8">
        <FoodGallery />
      </div>

      <div className="w-full py-8">
        <HowItWork />
      </div>

      {/* Grid layout for the landing image and app download section */}
      <div className="grid md:grid-cols-2 gap-5 w-full px-4 md:px-32">
        <img src={landingImage} alt="landing" className="w-full h-auto" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the CraveCart App for faster ordering and personalized
            recommendations
          </span>
          <img src={appImage} alt="app" className="w-2/3 h-auto md:w-full" />
        </div>
      </div>

      <div>
        <Testimonials />
      </div>
    </div>
  );
};

export default HomePage;

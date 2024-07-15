import { useSearchRestaurants } from "@/api/RestaurantAPi";
import { useParams } from "react-router-dom"

const SearchPage = () => {
    const {city} = useParams();
    const {results} = useSearchRestaurants(city);

    
  return (
    <>
    <div>User search for {city}</div>
    {results?.data.map((restaurant) => (
      <span>
        found - {restaurant.restaurantName}, {restaurant.city}
      </span>
    ))}
    </>
  )
}

export default SearchPage
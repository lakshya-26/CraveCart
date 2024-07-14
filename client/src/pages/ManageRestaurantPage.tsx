import { useCreateMyRestaurant, useGetMyRestaurant } from "@/api/MyRestaurantApi";
import MangeRestaurantForm from "@/forms/user-profle-form/manage0restaurant-form/MangeRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();

  return (
    <MangeRestaurantForm
      restaurant={restaurant}
      onSave={createRestaurant}
      isLoading={isLoading}
    />
  );
};

export default ManageRestaurantPage;

import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi"
import Spinner from "@/components/Spinner";
import UserProfileForm from "@/forms/user-profle-form/UserProfileForm"

const UserProfilePage = () => {
  const {currentUser, isLoading: isGetLoading} = useGetMyUser();
  const {updateUser, isLoading: isUpdateLoading} = useUpdateMyUser();

  if(isGetLoading){
    return <Spinner />;
  }

  if(!currentUser){
    return <span>Unable to load user profile</span>;
  }
  return (
    <div>
      <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdateLoading} />
    </div>
  )
}

export default UserProfilePage
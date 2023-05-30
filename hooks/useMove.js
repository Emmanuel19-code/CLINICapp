import { useNavigation } from '@react-navigation/native'


const useMove = () =>{
    const navigation = useNavigation();
      const nextPage = () =>{
      navigation.navigate("Sign In")
     }
     const moveToRegister = () =>{
      navigation.navigate("Sign Up")
     }
     const moveToLogin = () =>{
       navigation.navigate("Login")
     }
     const moveToVerification = () =>{
       navigation.navigate("Verification")
     }
     const moveToForgotPassword = () =>{
      navigation.navigate("Forgot Password")
     }
     const moveToNewPassword = () =>{
      navigation.navigate("Confirm Password")
     }
     const moveToDashboard = () =>{
      navigation.replace("Dashboard")
     }
       const moveToDoctors = () =>{
      navigation.navigate("Doctors")
     }
     const moveToChats = () =>{
      navigation.navigate("Chat")
     }
     const IndividualDoctors =() =>{
      navigation.navigate("DoctorProfile")
     }
     const BookAppointment = () =>{
      navigation.navigate("Appointment")
     }
     const Authentication = () =>{
      navigation.navigate("Authentication")
     }
     const OpenDrawer = () =>{
      navigation.openDrawer()
     }
     const moveToProfile = () =>{
       navigation.navigate("Profile")
     }
     const moveToNotification = () =>{
       navigation.navigate("Notification")
     }
     const moveToChatPage = () =>{
       navigation.navigate("ChatPage")
     }
   return {
    nextPage,
    moveToRegister,
    moveToLogin,
    moveToVerification,
    moveToForgotPassword,
    moveToNewPassword,
    moveToDashboard,
    moveToDoctors,
    moveToChats,
    IndividualDoctors,
    BookAppointment,
    Authentication,
    OpenDrawer,
    moveToProfile,
    moveToNotification,
    moveToChatPage
  }
}


export default useMove;
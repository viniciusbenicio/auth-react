import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { Signup } from "./pages/Signup";
import { UserProfile } from "./pages/UserProfile";
import { Login } from "./pages/Login";
import { UpdateProfile } from "./pages/UpdateProfile";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<UserProfile />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/update-profile" element={<UpdateProfile />}></Route>
          <Route
            path="*"
            element={
              <div>
                <h1>Not Found 404</h1>
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

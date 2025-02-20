async function logout() {
  const response = await fetch("http://localhost:4000/users/logout", { method: "GET", credentials: "include" });
  localStorage.removeItem("accessToken");
  
  return response.json();
};

export default logout;

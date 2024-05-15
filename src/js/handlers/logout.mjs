// Function to logout user and redirect to login page

export async function setLogoutListener() {
    const logoutBtn = document.querySelector("#logoutButton");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", (event) => {
            event.preventDefault();
            // Remove profile and token from localStorage
            localStorage.removeItem("profile");
            localStorage.removeItem("token");
            //Redirect to login page
            alert ("You have now logged out!")
            window.location.href = "/index.html";
        });
    } 
}
/**
 * Attaches a click event listener to the logout button that logs the user out and redirects to the login page.
 * 
 * This function selects the logout button with the ID `logoutButton` and adds a click event listener to it.
 * When the button is clicked, the function prevents the default action, removes the user's profile and token 
 * from localStorage, displays an alert to the user indicating they have logged out, and then redirects the 
 * user to the login page.
 * 
 * @async
 * @returns This function does not return anything.
 * @example
 * ```js
 * // Set up the logout listener on the logout button
 * setLogoutListener();
 * // When the user clicks the logout button, they will be logged out,
 * // an alert will be displayed, and they will be redirected to the login page.
 * ```
 */

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
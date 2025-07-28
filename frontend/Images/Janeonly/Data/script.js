const clientId = "93c087ebaf1a4994931f1b06c730594c";
const redirectUri = "http://localhost:3000/callback";
const params = new URLSearchParams(window.location.search);
const code = params.get('code');
const storedToken = localStorage.getItem("token");
// let random = document.getElementById("random");
// Generate a random code verifier
// function generateCodeVerifier(length = 128) {
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let verifier = '';
  
//     for (let i = 0; i < length; i++) {
//         verifier += chars.charAt(Math.floor(Math.random() * chars.length));
    
     


//     }
//     console.log(verifier);

//     // random.innerHTML = verifier
//     return verifier;
// }

// Generate a code challenge from the code verifier


let verifier = 'Xh7Rt2lW4pZg8Fq1jMvA9dK6uHs3BzV5nT0kQfYpJcCwN2iG8zXjP0mA6V3D4'
async function generateCodeChallenge(verifier) {
    const data = new TextEncoder().encode(verifier);
    const digest = await crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode(...new Uint8Array(digest)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

// Redirect user to Spotify authorization page
async function redirectToAuth() {
    const verifier = 'Xh7Rt2lW4pZg8Fq1jMvA9dK6uHs3BzV5nT0kQfYpJcCwN2iG8zXjP0mA6V3D4'
    const challenge = await generateCodeChallenge(verifier);
    
    localStorage.setItem("verifier", verifier);

    const authParams = new URLSearchParams({
        client_id: clientId,
        response_type: "code",
        redirect_uri: redirectUri,
        scope: "user-read-private user-read-email user-read-playback-state playlist-read-private playlist-read-collaborative ",
        code_challenge_method: "S256",
        code_challenge: challenge
    });
    
    window.location.href = `https://accounts.spotify.com/authorize?${authParams.toString()}`;
}

// Exchange authorization code for access token
async function fetchAccessToken(code) {
    const verifier = localStorage.getItem("verifier");
    
    const tokenParams = new URLSearchParams({
        client_id: clientId,
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri,
        code_verifier: verifier
    });
    
    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: tokenParams
    });
    
    const data = await response.json();
    if (data.access_token) {
        console.log("Access Token:", data.access_token); // Logs the token at redirect URI
        localStorage.setItem("token", data.access_token); // Save token persistently
        return data.access_token;
    } else {
        console.error("Failed to get access token:", data);
        return null;
    }
}

// Fetch user profile from Spotify API
async function fetchUserProfile(token) {
    const response = await fetch("https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.json();
}

// Populate UI with user profile data
function populateUI(profile) {
    document.getElementById("displayName").innerText = profile.display_name;
    if (profile.images[0]) {
        const profileImage = new Image(200, 200);
        profileImage.src = profile.images[0].url;
        document.getElementById("avatar").appendChild(profileImage);
        document.getElementById("imgUrl").innerText = profile.images[0].url;
    }
    document.getElementById("id").innerText = profile.id;
    document.getElementById("email").innerText = profile.email;
    document.getElementById("uri").innerText = profile.uri;
    document.getElementById("uri").setAttribute("href", profile.external_urls.spotify);
    document.getElementById("url").innerText = profile.href;
    document.getElementById("url").setAttribute("href", profile.href);
}

// Main function to handle authentication flow
async function main() {
    if (storedToken) {
        console.log("Using stored token:", storedToken);
        try {
            const profile = await fetchUserProfile(storedToken);
            console.log("User Profile:", profile);
            populateUI(profile);
        } catch (error) {
            console.error("Stored token invalid, clearing and re-authenticating...");
            localStorage.removeItem("token");
            redirectToAuth();
        }
    } else if (code) {
        try {
            const token = await fetchAccessToken(code);
            if (token) {
                const profile = await fetchUserProfile(token);
                console.log("User Profile:", profile);
                populateUI(profile);
            }
        } catch (error) {
            console.error("Error fetching access token or user profile:", error);
        }
    } else {
        console.log("No stored token or authorization code. Redirecting to login...");
        redirectToAuth();
    }
}

// Execute main function
main();

const token = document.getElementById("token");
token.addEventListener("click", () => {
    token.innerHTML = "Bhai yeh apna Token hai "
})
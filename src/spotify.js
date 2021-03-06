export const authEndpoint = "https://accounts.spotify.com/authorize"

console.log('Environment: ' + process.env.NODE_ENV)

let redirectUri = "http://tampa-websites.com/react/spotify-clone/"
if (process.env.NODE_ENV !== 'production') {
    redirectUri = "http://localhost:3000/"
}else {
    redirectUri = "http://tampa-websites.com/react/spotify-clone/"
}

const clientId = "d5bfd59a3c244351af6f8e046637273b"

const scopes = [
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
    'user-library-read',
    'user-library-modify'
]

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
        
        return initial;
    }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialogue=true`
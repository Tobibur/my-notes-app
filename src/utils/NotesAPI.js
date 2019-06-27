const api = process.env.REACT_APP_NOTES_API_URL || 'http://localhost:8080'

const headers = {
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    'Access-Control-Allow-Credentials': 'true'
}

export const getAll = () =>
    fetch(`${api}/api/notes/`, { headers })
        .then(res => res.json())
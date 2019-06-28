const api = process.env.REACT_APP_NOTES_API_URL || 'https://tobis-notes.herokuapp.com'

const headers = {
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    'Access-Control-Allow-Credentials': 'true'
}

export const getAll = () =>
    fetch(`${api}/api/notes/`, { headers })
        .then(res => res.json())

export const remove = (note) =>
    fetch(`${api}/api/notes/${note.id}`, { method: 'DELETE', headers })
        .then(res => res)

export const create = (body) =>
    fetch(`${api}/api/notes/`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())
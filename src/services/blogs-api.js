export const getBlogs = () => {
    const URL = 'https://skblogexpress.herokuapp.com/blogs'
    return fetch(URL)
}

export const getOneBlog = (id) => {
    const URL = `https://skblogexpress.herokuapp.com/blogs/${id}`
    return fetch(URL)
    // const res = fetch(URL)
    // console.log("res: ", res)
    // return res
}

export const deleteBlog = (id) => {
    const URL = `https://skblogexpress.herokuapp.com/blogs/${id}`
    return fetch(URL, {method: 'DELETE'})
}

export const createBlog = (inputDoc) => {
    const URL = `https://skblogexpress.herokuapp.com/blogs`
    return fetch(URL, {body:JSON.stringify(inputDoc), method: 'POST',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(res=>res.json())
}

export const updateBlog = (inputDoc,id) => {
    const URL = `https://skblogexpress.herokuapp.com/blogs/${id}`

    return fetch(URL, {body: JSON.stringify(inputDoc), method: 'PUT',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(res=>res.json())
}

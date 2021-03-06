import {API} from "aws-amplify";



export const GET_ALL_POST_COMMENTS = 'GET_ALL_POST_COMMENTS'

export const CREATE_COMMENT = "CREATE_COMMENT"

export const DELETE_COMMENT = "DELETE_COMMENT"
export const VOTE_COMMENT = "VOTE_COMMENT"
export const EDIT_COMMENT = "EDIT_COMMENT"


export function updateComment(data) {


    return {
        type:EDIT_COMMENT,
        payload:data
    }

}
export function editComment(id, data) {
    console.log("main huuuuun edit main!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~", data.body,data.postId)

    return async dispatch => {

            const req = await API.put('notes', `/comments/${id}`, {body: {option:"updateBody",body:data.body,postId:data.postId}})
            dispatch(
                updateComment(req)
            )



    }

}
// export function editComment(id,values) {
//     const request =  axios.put(`${ROOT_URL}/comments/${id}`,values)
//     console.log("################ action edit", request)
//     return{
//         type:EDIT_COMMENT,
//         payload:request
//     }
//
//
// }

export function destroyComment(request) {
    return {
        type: DELETE_COMMENT,
        payload: request
    }

}
export function deleteComment(id,postId) {
    return async dispatch => {

        const req = await API.del('notes', `/comments/${id}`,{body:{postId:postId}})
        req.id=id
        req.postId=postId
        dispatch(destroyComment(req))
    }
}
// export function deleteComment(id){
//     const request =  axios.delete(`${ROOT_URL}/comments/${id}`)
//     return {
//         type: DELETE_COMMENT,
//         payload: request
//     }
//
// }

export function loadAllPostComments(data){
    return{
        type: GET_ALL_POST_COMMENTS,
        payload: data

    }
}
export function getAllPostComments(postId){
    console.log("GET ALL POST COMMENTS", postId)

    return async dispatch => {
        const req = await API.get('notes', `/posts/${postId}/comments`)
        dispatch(loadAllPostComments(req))
    }
}


export function addComment (data){



    return{
        type: CREATE_COMMENT,
        payload: data

    }
}
export function createComment (values){
    const {body} = values
    const data = {body}
    // console.log("ACTIOB COMMENT", values)


    return async dispatch => {
        const req = await API.post('notes', '/comments', {body: values})
        dispatch(
            addComment(req)
        )

    }
}

// export function voteComment(id, vote){
//     const request = axios.post(`${ROOT_URL}/comments/${id}`, {option: vote})
//
//     return{
//         type: VOTE_COMMENT,
//         payload: request
//     }
//
// }
export function updateVoteComment(data) {


    return {
        type: VOTE_COMMENT,
        payload: data
    }

}
export function voteComment(id, data) {

    return async dispatch => {
        const req = await API.put('notes', `/comments/${id}`, {body: {option:data.option,postId:data.postId}})
        dispatch(
            updateVoteComment(req)
        )

    }

}


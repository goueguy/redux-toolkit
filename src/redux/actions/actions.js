import ADD_ARTICLE from './../constants/actions-type';

export const addPost =(post)=>{
    return {
        type:ADD_ARTICLE,
        payload:post
    }
}
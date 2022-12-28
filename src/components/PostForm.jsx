import React, {useEffect, useRef, useState} from 'react';
import Myinput from "./UI/input/Myinput";
import MyButton from "./UI/button/myButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})
    // const bodyInputRef = useRef()
    const addNewPost = (e) =>{
        e.preventDefault()
        const newPost = {
            ...post, id:Date.now()
        }
        create(newPost)
        setPost({title:'', body: ''})
    }

    return (
        <form>
            <Myinput
                value= {post.title}
                onChange = {e => setPost({...post, title: e.target.value})}
                type={"text"}
                placeholder={"Название поста"}/>
            <Myinput
                value= {post.body}
                onChange = {e => setPost({...post, body: e.target.value})}
                type={"text"}
                placeholder={"Описание поста"}/>
            <MyButton onClick = {addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;
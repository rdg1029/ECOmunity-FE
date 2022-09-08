import React, { FormEvent, useEffect, useState } from "react";
import auth from "../auth";
import Modal from "./Modal";

interface Props {
    show: boolean;
    onClose: () => void;
}

const PostWrite: React.FC<Props> = (props) => {
    const [image, setImage] = useState<string>();
    const [title, setTitle] = useState<string>();
    const [content, setContent] = useState<string>();

    const onImageChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        const imgFile = e.currentTarget.files![0];
        const reader = new FileReader();
        reader.readAsDataURL(imgFile);
        reader.onload = e => {
            setImage(reader.result?.toString());
        }
    }

    const onTextChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = e => {
        switch(e.currentTarget.name) {
            case "postTitle":
                setTitle(e.currentTarget.value);
                break;
            case "postContent":
                setContent(e.currentTarget.value);
                break;
        }
    }

    const onSubmit: React.MouseEventHandler<HTMLButtonElement> = e => {
        auth.currentUser?.getIdToken().then(idToken => {
            const postData = {
                token: idToken,
                img: image,
                title: title,
                content: content,
            }
            console.log(postData);
        });
    }

    return (
        <Modal 
            show={props.show}
            header={
                <h2>내 활동 인증</h2>
            }
            main={
                <form style={{ display: "flex", flexDirection: "column"}}>
                    <img src={image}></img>
                    <label>사진 업로드 : <input type="file" accept="image/png, image/jpeg" name="postImage" onChange={onImageChange}></input></label> 
                    <input type="text" placeholder="제목" name="postTitle" onChange={onTextChange}></input>
                    <textarea placeholder="내용" name="postContent" onChange={onTextChange}></textarea>
                </form>
            }
            footer={
                <>
                    <button onClick={props.onClose}>취소</button>
                    <button onClick={onSubmit}>작성</button>
                </>
            }
            width="60rem"/>
    );
}
export default PostWrite;
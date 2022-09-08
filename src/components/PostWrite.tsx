import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

interface Props {
    show: boolean;
    onClose: () => void;
}

const PostWrite: React.FC<Props> = (props) => {
    const [image, setImage] = useState<string>();
    const [title, setTitle] = useState<string>();
    const [content, setContent] = useState<string>();

    const imgElem = useRef<HTMLImageElement>(null);
    const inputImg = useRef<HTMLInputElement>(null);

    const onImageChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        const imgFile = e.currentTarget.files![0];
        const reader = new FileReader();
        reader.readAsDataURL(imgFile);
        reader.onload = e => {
            setImage(reader.result?.toString());
        }
    }

    return (
        <Modal 
            show={props.show}
            header={
                <h2>내 활동 인증</h2>
            }
            main={
                <form style={{ display: "flex", flexDirection: "column"}}>
                    <img src={image} ref={imgElem}></img>
                    <label>사진 업로드 : <input ref={inputImg} type="file" accept="image/png, image/jpeg" name="postImage" onChange={onImageChange}></input></label> 
                    <input type="text" placeholder="제목" name="postTitle"></input>
                    <textarea placeholder="내용" name="postContent"></textarea>
                </form>
            }
            footer={
                <>
                    <button onClick={props.onClose}>취소</button>
                    <button type="submit">작성</button>
                </>
            }
            width="60rem"/>
    );
}
export default PostWrite;
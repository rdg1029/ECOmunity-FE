import React, { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import auth from "../auth";
import Modal from "./Modal";

interface Props {
    show: boolean;
    onClose: () => void;
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const PreviewImage = styled.img`
    width: 20rem;
    align-self: center;
    margin: 1rem;
`;

const UploadImage = styled.label`
    width: 150px;
    height: 30px;
    margin: 1rem;
    background: #fff;
    border: 1px solid rgb(77,77,77);
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    &:hover {
        background: rgb(77,77,77);
        color: #fff;
    }
`;

const TitleInput = styled.input`
    height: 2rem;
    margin: 0.5rem;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    border: 1px solid rgb(77,77,77);
    border-radius: 10px;
    font-size: 16px;
`;

const ContentTextArea = styled.textarea`
    resize: none;
    height: 10rem;
    margin: 0.5rem;
    padding: 0.5rem;
    border: 1px solid rgb(77,77,77);
    border-radius: 10px;
    font-size: 14px;
`;

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
                <Form>
                    <PreviewImage src={image}></PreviewImage>
                    <UploadImage>사진 업로드<input type="file" accept="image/png, image/jpeg" name="postImage" onChange={onImageChange} style={{display: "none"}}></input></UploadImage> 
                    <TitleInput type="text" placeholder="제목을 입력하세요." name="postTitle" onChange={onTextChange}></TitleInput>
                    <ContentTextArea placeholder="내용을 입력하세요." name="postContent" onChange={onTextChange}></ContentTextArea>
                </Form>
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
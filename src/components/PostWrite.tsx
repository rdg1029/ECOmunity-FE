import React from "react";
import Modal from "./Modal";

interface Props {
    show: boolean;
    onClose: () => void;
    onSubmit: () => void;
}

const PostWrite: React.FC<Props> = (props) => {
    return (
        <Modal 
            show={props.show}
            header={
                <h2>내 활동 인증</h2>
            }
            main={
                <form>
                    <label>사진 업로드 : </label> 
                    <input type="file" accept="image/png, image/jpeg"></input><br></br>
                    <input type="text" placeholder="제목"></input><br></br>
                    <textarea placeholder="내용"></textarea>
                </form>
            }
            footer={
                <>
                    <button onClick={props.onClose}>취소</button>
                    <button onClick={props.onSubmit}>작성</button>
                </>
            }
            width="60rem"/>
    );
}
export default PostWrite;
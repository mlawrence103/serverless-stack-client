import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { onError } from "../libs/errorLib";
import config from "../config";
import "./NewNote.css"
import { API } from "aws-amplify";
import { s3Upload } from "../libs/awsLib";

export default function NewNote() {
  const file = useRef(null);
  const history = useHistory();
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false)

  function validateForm() {
    return content.length > 0;
  }

  function handleFileChange(event) {
    file.current = event.target.files[0];
  }

  function handleFavorite(event){
    const target = event.target;
    setIsFavorite(!isFavorite);
    if (target.checked){
      console.log('Box is checked')
    //   alert('You favorited this message');
    //   setIsFavorite(true)
    }
    else{
      console.log('Box is not checked')
    //   alert('You are unfavoriting this message')
    //   setIsFavorite(false);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
      alert(
        `Please pick a file smaller than ${
          config.MAX_ATTACHMENT_SIZE / 1000000
        } MB.`
      );
      return;
    }

    setIsLoading(true);

    try {
      const attachment = file.current ? await s3Upload(file.current) : null;

      await createNote({ content, attachment, isFavorite });
      history.push("/");
      console.log('note is favorite: ' + isFavorite);
      console.log('attachment: ' + attachment);
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }


  function createNote(note) {
    console.log('here in NewNote');
    console.log(note.isFavorite);
    return API.post("notes", "/notes", {
      body: note
    });
  }

  return (
    <div className="NewNote">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="favorite">
          <input
            onChange={handleFavorite}
            type="checkbox"
            defaultChecked={isFavorite}
            />
          <ControlLabel>
            <p>Favorite</p>
          </ControlLabel>
        </FormGroup>
        <FormGroup controlId="content">
          <FormControl
            value={content}
            componentClass="textarea"
            onChange={e => setContent(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="file">
          <ControlLabel>Attachment</ControlLabel>
          <FormControl onChange={handleFileChange} type="file" />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          bsStyle="success"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Create
        </LoaderButton>
      </form>
    </div>
  );
}

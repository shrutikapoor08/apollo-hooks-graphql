import Delete from './Delete';

import React, { useContext } from "react";
import { useMutation } from '@apollo/react-hooks';
import { DELETE_SONG } from '../graphql/mutations';
import Context from '../context';
import useRelatedSongs from "../graphql/useRelatedSongs";

const SongItem = ({ song }) => {
    const test = useRelatedSongs(song.artist);
    console.log(test);


  const [deleteSong] = useMutation(DELETE_SONG);
  const { dispatch } = useContext(Context);

  const deleteMutation = () => {
    deleteSong({
      variables: {
        id: {
          id: song.id
        }
      }
    });

    dispatch({ type: "DELETE_CONTENT", payload: song.id }); //TODO: wrap this in error block.

  };


  return (
    <div className={'text-wrapper'}>
      <h1>{song.name}</h1>
      <h3>{song.artist}</h3>
      <p>{song.lyrics}</p>
      <Delete onClick={deleteMutation}/>
    </div>
  )

};

export default SongItem
import Delete from './Delete';

import React, { useContext } from "react";
import { useMutation } from '@apollo/react-hooks';
import { DELETE_SONG } from '../graphql/mutations';
import Context from '../context';

const SongItem = ({ song }) => {
  const [deleteSong] = useMutation(DELETE_SONG);
  const { dispatch } = useContext(Context);

  const deleteMutation = () => {
    console.log('song.id', song.id);

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
      <h3>{song.actor}</h3>
      <p>{song.lyrics}</p>
      <Delete onClick={deleteMutation}/>
    </div>
  )

};

export default SongItem
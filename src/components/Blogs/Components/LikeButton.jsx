import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'

// import FavoriteRoundedIcon from '@material-ui/icons/';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

// function LikeButton({ user, post: { id, likeCount, likes }}) {
function LikeButton() {

    // const [liked, setLiked] = useState(false);

    // useEffect(() => {
    //   if(user && likes.find(like => like.username === user.username)){
    //       setLiked(true)
    //   } else setLiked(false)
    // }, [user, likes]);

    // const [likePost] = useMutation(LIKE_POST_MUTATION, {
    //     variables: { postId: id }
    // });

    // const likeButton = user ? (
    //     liked ? (
    //         <button>
    //             <FavoriteRoundedIcon />
    //         </button>
    //     ) : (
    //         <button>
    //             <FavoriteBorderRoundedIcon />
    //         </button>
    //     )
    // ) : (
    //     <button >
    //         <FavoriteBorderRoundedIcon />
    //     </button>
    // )
    

  return (
  <div >
    <FormControlLabel
      control={<Checkbox icon={<FavoriteBorder className='tw-h-a' fontSize="large" style={{fill: "white"}} />} 
                checkedIcon={<Favorite className='tw-h-a' fontSize="large" />}
        name="checkedH"/>}
    />
  </div>
  )
}

const LIKE_POST_MUTATION = gql`
    mutation likePost($postId: ID!){
      likePost(postId: $postId){
        id
        likes{
          id username
        }
        likeCount
      }
    }
  `

export default LikeButton;

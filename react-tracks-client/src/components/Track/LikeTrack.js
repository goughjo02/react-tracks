import React, { useContext } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

import { UserContext, ME_QUERY } from "../../Root";

const LikeTrack = ({ classes, likeCount, trackId }) => {
  const currentUser = useContext(UserContext);

  const handleDisableLikedTrack = () => {
    const likedTracks = currentUser.likeSet
    const isTrackLiked = likedTracks.findIndex(({ track }) => Number(track.id) === trackId) > -1
    return isTrackLiked
  }
  return (
    <Mutation
      mutation={CREATE_LIKE_MUTATION}
      variables={{ trackId }}
      onCompleted={(data) => {
        console.log(data);
      }}
      refetchQueries={() => [{ query: ME_QUERY }]}
    >
      {(createLike) => (
        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            createLike();
          }}
          className={classes.iconButton}
          disabled={handleDisableLikedTrack()}
        >
          {likeCount}
          <ThumbUpIcon className={classes.icon} />
        </IconButton>
      )}
    </Mutation>
  );
};

const CREATE_LIKE_MUTATION = gql`
  mutation($trackId: Int!) {
    createLike(trackId: $trackId) {
      track {
        id
        likes {
          id
        }
      }
    }
  }
`;

const styles = (theme) => ({
  iconButton: {
    color: "deeppink",
  },
  icon: {
    marginLeft: theme.spacing.unit / 2,
  },
});

export default withStyles(styles)(LikeTrack);

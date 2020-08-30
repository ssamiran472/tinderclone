import React from "react";
import "./Swipebuttons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import Close from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

const SwipeButtons = () => {
  return (
    <div className="swipe_buttons">
      <IconButton className="swipe_buttons__replay">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe_buttons__close">
        <Close fontSize="large" />
      </IconButton>
      <IconButton className="swipe_buttons__starrate">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe_buttons__favortie">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe_buttons__flashon">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;

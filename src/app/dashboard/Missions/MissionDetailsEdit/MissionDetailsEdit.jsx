import {
  Box,
  Container,
  Card,
  Grid,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonIcon from "@material-ui/icons/Person";
import ScheduleIcon from "@material-ui/icons/Schedule";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";
import _ from "../../../utils/lodash";

import { Body2, H5 } from "../../../component";
import placeholderImage from "../../../../img/placeholderBackground.svg";
import { Mission } from "../../../model";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "20vw",
  },
  closeIcon: {
    fontSize: 32,
    backgroundColor: "red",
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    width: "90%",
  },
  missionTypeText: {
    paddingTop: theme.spacing(0.5),
  },
  deliveryDetailsHeader: {
    paddingTop: theme.spacing(1),
    fontWeight: 600,
  },
  deliveryDetails: {
    marginTop: theme.spacing(0.5),
  },
}));

const MissionDetailsType = ({ classes, description }) => (
  <Box>
    <H5 align="left" color="textSecondary">
      Mission Type
    </H5>
    <Body2 align="left" className={classes.missionTypeText} color="textPrimary">
      {description}
    </Body2>
  </Box>
);

const MissionDetailsPickUpDeliveryHeader = ({ classes, header }) => (
  <Body2 align="left" className={classes.deliveryDetailsHeader} color="textPrimary">
    {header}
  </Body2>
);

/**
 * Component for displaying mission details as a card
 *
 * @component
 */
const MissionDetailsEditCard = ({
  mission,
  openMissionDeliveredCard,
  setUserUnverifiedPopupOpen,
  startMission,
  unassignFromMission,
  userUnverifiedPopupOpen,
  volunteer,
  volunteerForMission,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const closeDetails = () => {
    history.replace({
      search: _.setQueryParam("missionId", ""),
    });
  };

  return (
    <Box className={classes.container} style={{ backgroundColor: "red" }}>
      <CloseIcon
        align="right"
        className={classes.closeIcon}
        onClick={closeDetails}
        color="primary"
      />
      <img src={mission.image || placeholderImage} alt="Mission image" className={classes.image} />
    </Box>
  );
};

export default MissionDetailsEditCard;

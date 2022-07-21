import React, { useEffect } from "react";
import * as ActivitiesStore from "../store/Activities";
import { IActivity } from "../app/layout/model/activity";
import { connect } from "react-redux";
import { ApplicationState } from "../store";
import { Item, Segment } from "semantic-ui-react";
import { Loading } from "./Loading";
import { ActivityListItem } from "./ActivitiListItem";

// At runtime, Redux will merge together...
type ActivitiesProps = ActivitiesStore.ActivityState &
  typeof ActivitiesStore.actionCreators;

export const ActivityList: React.FC<ActivitiesProps> = (props: ActivitiesProps) => {

  var activityList = props.requestActivities;

  useEffect(() => {
    activityList();
  }, [activityList]);

  if (props.loading) return <Loading content="Loading Activities ...." />;

  return (
    <Segment clearing>
      <Item.Group divided>
        {props.activities.map((activity: IActivity) => (
          <ActivityListItem key={activity.id} activity={activity} />
        ))}
      </Item.Group>
    </Segment>
  );
};

export default connect(
  (state: ApplicationState) => state.activities,
  ActivitiesStore.actionCreators
)(ActivityList as any);

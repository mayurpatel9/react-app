import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Button, Item } from 'semantic-ui-react';
import { IActivity } from '../app/layout/model/activity';
import { ApplicationState } from '../store';
import * as ActivitiesStore from "../store/Activities";

type ActivitiesProps = ActivitiesStore.ActivityState &
    typeof ActivitiesStore.actionCreators;

interface IProps {
    activity: IActivity
}

export const ActivityListItem: React.FC<IProps> = (props: IProps, activityProps: ActivitiesProps) => {
    
    return(
        <Item key={props.activity.id}>
            <Item.Content>
                <Item.Header as="a">{props.activity.title}</Item.Header>
                <Item.Meta>{props.activity.date}</Item.Meta>
                <Item.Description>
                    <div>{props.activity.description}</div>
                    <div>
                        {props.activity.city}, {props.activity.venue}
                    </div>
                </Item.Description>
                <Item.Extra>
                    <Button
                        onClick={(e) => activityProps.deleteActivity(e, props.activity.id)}
                        loading={activityProps.target === props.activity.id && activityProps.submitting}
                        content="Delete"
                        floated="right"
                        color="red"
                        name={props.activity.id}
                    />
                    <Button
                        as={Link}
                        to={`/activities/${props.activity.id}`}
                        content="View"
                        floated="right"
                        color="green"
                    />
                </Item.Extra>
            </Item.Content>
        </Item>
    )

}
export default connect(
    (state: ApplicationState) => state.activities,
    ActivitiesStore.actionCreators
)(ActivityListItem as any);
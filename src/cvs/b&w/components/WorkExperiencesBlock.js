import React from 'react';
import { capitalize, titleize } from 'underscore.string';

import RightPanelBlock from './RightPanelBlock';

export default class WorkExperiencesBlock extends RightPanelBlock {
    constructor(props) {
        super(props);
        this.icon = "fas fa-briefcase fa-lg";
        this.title = "Work Experiences";
    };

    // overload
    renderInnerBlock() {
        var workExperienceList = this.props.workExperiences.map((workExperience, i) => 
            <WorkExperienceItem key={i} workExperience={workExperience} />);
        return (
            <div>
                {workExperienceList}
            </div>
        );
    };
};

function WorkExperienceItem(props) {
    var descriptionList = props.workExperience.description.map(
        (descriptionItem, i) => <li key={i}>{capitalize(descriptionItem)}</li>);
    return (
        <div className="row work-experience-item">
            <div className="col-12 work-experience-item-title">
                {titleize(props.workExperience.position)} - {titleize(props.workExperience.company.name)} ({titleize(props.workExperience.company.field)}) - {titleize(props.workExperience.company.city)} ({titleize(props.workExperience.company.country)})
            </div>
            <div className="col-12 work-experience-item-period">
                {props.workExperience.start} - {props.workExperience.end}
            </div>
            <div className="col-12 work-experience-item-description">
                <ul className="list-unstyled">
                    {descriptionList}
                </ul>
            </div>
        </div>
    );
};
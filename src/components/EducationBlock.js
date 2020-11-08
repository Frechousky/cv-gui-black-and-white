import React from 'react';

import LeftPanelBlock from './LeftPanelBlock';

export default class EducationBlock extends LeftPanelBlock {
    constructor(props) {
        super(props);
        this.title = "Formations";
    };

    // overload
    renderInnerBlock () {
        var educationList = this.props.studies.map((education, i) => <EducationItem key={i} education={education} />);
        return (
            <div>
                {educationList}
            </div>
        );
    };
};

function EducationItem(props) {
    var urlAttributes = {
        "href": props.education.url
    };
    return (
        <div className="row education-item">
            <div className="col-12 education-item-title">
                <a {...urlAttributes}>{props.education.degree}<br/>
                Spécialité {props.education.specialization}</a>
            </div>
            <div className="col-12 education-item-school">
                {props.education.school} ({props.education.city})
            </div>
            <div className="col-12 education-item-period">
                {props.education.start} - {props.education.end}
            </div>
        </div>
    );
};

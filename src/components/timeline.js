import React from "react"
// import PropTypes from "prop-types"
import "./timeline.scss"

var aTimelineData = [
    {
        "year": "2020",
        "title": "UX Designer at UW School of Nursing",
        "description": ["working part time, designing a mobile healthcare intervention"]
    },
    {
        "year": "2020",
        "title": "MS in Human Centered Design and Engineering @ University of Washginton",
        "description": ["learned about design, research, prototyping, ethics", "fascinated by the possibilities of XR technologies"]
    },
    {
        "year": "2018",
        "title": "Software Developer @ Contentserv",
        "description": ["enjoyed working with React.js and developed a knack for CSS"]
    },
    {
        "year": "2016",
        "title": "BE in Computer Engineering @ Pune Institute of Computer Technology",
        "description": ["studied computers", "was introduced to the world of design"]
    }
];

const Timeline = ({ children }) => {

    //go over all elemets in timeline data
    var aElements = aTimelineData.map(
        element => {
            var aDescriptions = [];

            //add description if it exists
            if (element.description) {
                aDescriptions = element.description.map(
                    point => {
                        return (<p>{point}</p>);
                    }
            );
            }

            return (
                <div className="element">

                    <div className="left">
                        {element.year}
                    </div>

                    <div className="right">
                        <p><b>{element.title}</b></p>
                        {aDescriptions}
                    </div>

                </div>
            );
        }
    );


  return (
    <div className="">

      <h3>Timeline</h3>

      {aElements}

      {/* <div className="element">

          <div className="left">
              2020
          </div>

          <div className="right">
              <p>MS HCDE @ University of Washington</p>
              <p>Line 2</p>
              <p>Line 3</p>
          </div>

      </div> */}

    </div>
  )
}

export default Timeline

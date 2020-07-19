import React from "react";

import Member from "./Member";

class Team extends React.Component {
    team = [
        {
            id: 1,
            name: "Rakesh",
            DOJ: "11/03/2017",
        },
        {
            id: 2,
            name: "Anita",
            DOJ: "23/07/2016",
        },
        {
            id: 3,
            name: "Sahoo",
            DOJ: "05/12/2013",
        },
    ];

    componentDidMount() {
        // console.log(this.props);
    }

    render() {
        const team = this.team.map((member) => {
            return (
                <Member
                    key={member.id}
                    id={member.id}
                    name={member.name}
                    doj={member.DOJ}
                />
            );
        });

        return (
            <div>
                <h1>Team</h1>
                {team}
            </div>
        );
    }
}

export default Team;

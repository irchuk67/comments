import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName("female")}
                    // timeAgo={faker.date.}
                    timeAgo={faker.date.weekday().toString()}
                    content={faker.lorem.sentence()}
                    avatar={faker.image.image()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName("female")}
                    timeAgo={faker.date.weekday().toString()}
                    content={faker.lorem.sentence()}
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName("female")}
                    timeAgo={faker.date.weekday().toString()}
                    content={faker.lorem.sentence()}
                    avatar={faker.image.image()}
                />
            </ApprovalCard>


        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));

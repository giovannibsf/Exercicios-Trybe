import React from "react";

class UserProfile extends React.Component {
    render() {
        const { id, name, email, avatar } = this.props.usuario
        return (
            <div>
                <p>{id}</p>
                <p>{name}</p>
                <p>{email}</p>
               </div>
        )
    }
}

export default UserProfile
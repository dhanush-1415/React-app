import React from "react"

export const View =(userDetails) => {
    return userDetails.map(user=>(
        <tr key={user.Name}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.place}</td>
        </tr>
    ))
}
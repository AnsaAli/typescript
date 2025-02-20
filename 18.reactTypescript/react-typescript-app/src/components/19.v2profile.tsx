import React from 'react'

export type ProfileProps={
    name : string
}
const Profile = ({name}: ProfileProps) => {
  return (
    <div>
        <p>Name : {name}</p>
    </div>
  )
}

export default Profile
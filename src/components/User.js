import React from "react";
import { useParams} from 'react-router-dom';

export const User = () => {

    const param = useParams();
    const {name} = param;
  return <div><p> This is {name}'s Page</p>
  </div>;
};

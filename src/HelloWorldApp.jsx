import React from 'react';
import { FirstApp } from './FirstApp';
const myObj = {
    name: 'Flubber',
    age: 24
}
export const HelloWorldApp = () => {
  return (
    <>
        <div>HelloWorldApp mas</div>
        <FirstApp subtitle="Subtitulo mandado como prop" customObj={myObj} />
    </>
  )
}

import Counter from "./Counter.js";

export default function Board(){
    return(
        <>
    <h1>Counter Demo App</h1>
      <Counter  />
      <Counter name="Button 2" />
      <Counter name="Button 3" />
      </>
    )
}
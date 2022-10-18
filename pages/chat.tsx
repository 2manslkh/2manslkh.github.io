import { UserPost } from "../components/UserPost";

export default function Chat() {
  return (
    <div className="container mx-auto px-8">
      <div className="grid justify-items-stretch grid-flow-row auto-rows-max divide-base-300 divide-slate-400/25">
        {/* <div className="flex flex-col w-full border-opacity-50"> */}
        <UserPost
          avatar="./icons/lowpoly-144x144.png"
          address="kenk.eth"
          message="Hello World!"
        />
        <UserPost
          avatar="./icons/lowpoly-144x144.png"
          address="kenk.eth"
          message="Hello World!"
        />
        <UserPost
          avatar="./icons/lowpoly-144x144.png"
          address="kenk.eth"
          message="Hello World!"
        />
        {/* </div> */}
      </div>
      <input type="text" placeholder="Type here" className="input" />
    </div>
  );
}

export default function Chat() {
  return (
    <div className="container mx-auto">
      <div className="grid justify-items-stretch grid-flow-row auto-rows-max divide-y-2 divide-base-300 divide-slate-400/25">
        {/* <div className="flex flex-col w-full border-opacity-50"> */}
        <div className="bg-primary-300 align-center">Post 1</div>
        <div className="bg-white-300 align-center">Post 2</div>
        {/* </div> */}
        <input type="text" placeholder="Type here" className="input" />
      </div>
    </div>
  );
}

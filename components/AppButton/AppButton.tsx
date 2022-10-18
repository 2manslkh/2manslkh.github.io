interface AppButtonDetails {
  name: string;
  icon: string | undefined;
}

export const AppButton: React.FC<AppButtonDetails> = (
  props: AppButtonDetails
) => {
  return (
    <div className="justify-items-center">
      {/* App Image */}
      <button
        className="btn p-0 w-16 h-16 shadow-md"
        onClick={() => console.log(props.name)}
      >
        <img className="rounded-lg" src={props.icon} />
      </button>

      {/* App Name */}
      <p className="font-mono font-bold text-center text-sm uppercase">
        {props.name}
      </p>
    </div>
  );
};

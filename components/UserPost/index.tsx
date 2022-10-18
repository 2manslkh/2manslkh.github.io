interface UserPostProps {
  avatar: string;
  address: string | undefined;
  message: string;
}

export const UserPost: React.FC<UserPostProps> = (props: UserPostProps) => {
  return (
    <div className="card card-side shadow-lg">
      {/* User Avatar */}
      <figure>
        <img className="rounded-full w-12 h-12" src={props.avatar} />
      </figure>
      {/* User Address */}
      <div className="card-body">
        <h2 className="card-title font-mono font-bold text-center text-sm uppercase">
          {props.address}
        </h2>
        {/* User Message */}
        <p className="font-mono text-sm uppercase">{props.message}</p>
      </div>
    </div>
  );
};

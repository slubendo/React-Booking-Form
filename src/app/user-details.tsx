import Image from "next/image";

export default function UserDetails({user}: {user: {avatar: string, username: string}}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={user.avatar}
        alt="Picture of the author"
        width={200}
        height={200}
        className="rounded-full"
      />
      <h1 className="text-4xl font-bold">Welcome {user.username}</h1>
      <p className="text-lg text-center">
        Please fill out the form below to book your appointment
      </p>
    </div>
  );
}

export function whatever() {

}
import { useSelector } from "react-redux";

function Username() {
  const userName = useSelector(state => state.user.username)
  return <div className="hidden text-sm font-semibold md:block">{userName}</div>;
}

export default Username;

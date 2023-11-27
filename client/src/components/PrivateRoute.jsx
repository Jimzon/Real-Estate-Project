import { useSelector } from "react-redux";

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return <div>pRIVATE</div>;
}

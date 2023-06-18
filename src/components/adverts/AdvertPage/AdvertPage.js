import { useParams, useNavigate } from "react-router-dom";
import AdvertDetail from "./AdvertDetail";
import { useDispatch, useSelector } from "react-redux";
import { getAdvert, getUIstate } from "../../../store/selectors";
import { useEffect } from "react";
import { advertDelete, advertLoad } from "../../../store/actions";

function AdvertPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { advertId } = useParams();
  const { isLoading } = useSelector(getUIstate);
  const advert = useSelector(getAdvert(advertId));

  useEffect(() => {
    dispatch(advertLoad(advertId)).catch((error) => {
      if (error.statusCode === 404) {
        navigate("404");
      }
    });
  }, [advertId, dispatch, navigate]);

  const handleDelete = async () => {
    await dispatch(advertDelete(advertId));
    navigate("/");
  };

  if (isLoading) {
    return "Loading...";
  }

  return (
    advert && (
      <AdvertDetail onDelete={handleDelete} isLoading={isLoading} {...advert} />
    )
  );
}

export default AdvertPage;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { advertCreate } from '../../../store/actions';
import { getUIstate } from '../../../store/selectors';
import NewAdvertForm from './NewAdvertForm';

function NewAdvertPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { isLoading } = useSelector(getUIstate);
 
  const handleSubmit = async newAdvert => {
    await dispatch(advertCreate(newAdvert))
    .then(({ id }) => navigate(`/adverts/${id}`));
  };

  return <NewAdvertForm onSubmit={handleSubmit} isLoading={isLoading} />;
}

export default NewAdvertPage;

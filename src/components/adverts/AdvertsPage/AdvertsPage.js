import { useEffect, useState } from 'react';
import FiltersForm from './FiltersForm';
import AdvertsList from './AdvertsList';
import EmptyList from './EmptyList';
import storage from '../../../utils/storage';
import { getStateAdverts, getUIstate } from '../../../store/selectors';
import { defaultFilters, filterAdverts } from './filters';
import { useDispatch, useSelector } from 'react-redux';
import { advertsLoad } from '../../../store/actions';
import { useNavigate } from 'react-router-dom';

const getFilters = () => storage.get('filters') || defaultFilters;
const saveFilters = filters => storage.set('filters', filters);

function AdvertsPage() {
  const [filters, setFilters] = useState(getFilters);
  const { isLoading } = useSelector(getUIstate);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  useEffect(()=>{
    dispatch(advertsLoad())
    .catch(error => {
      if (error.statusCode === 404) {
      navigate('404');
      }
  });
    
  },[dispatch,navigate]);

  useEffect(() => {
    saveFilters(filters);
  }, [filters]);

  const adverts = useSelector((state)=>getStateAdverts(state).reverse())

  const filteredAdverts = filterAdverts(adverts, filters);

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <>
      {adverts.length > 0 && (
        <FiltersForm
          initialFilters={filters}
          defaultFilters={defaultFilters}
          prices={adverts.map(({ price }) => price)}
          onFilter={setFilters}
        />
      )}
      {filteredAdverts.length ? (
        <AdvertsList adverts={filteredAdverts} />
      ) : (
        <EmptyList advertsCount={adverts.length} />
      )}
    </>
  );
}

export default AdvertsPage;

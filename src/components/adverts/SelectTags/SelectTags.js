import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagsLoad } from '../../../store/actions';
import { getStateTags } from '../../../store/selectors';
import { CheckboxGroup } from '../../common';

function SelectTags(props) {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(tagsLoad())
    
  },[dispatch])

  const tags = useSelector((state)=>getStateTags(state))

  return <CheckboxGroup options={tags} {...props} />;
}

export default SelectTags;

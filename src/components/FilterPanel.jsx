import { useSelector, useDispatch } from 'react-redux';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import {selectFilters } from 'store/filters/filters-selectors';
import {removeFilter, clearFilter} from 'store/filters/filters-actions';

const FilterPanel = () => {

  const currentFiletrs = useSelector(selectFilters);
  const dispatch = useDispatch();

  if (currentFiletrs.lenght === 0){
    return null
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFiletrs.map(filter => (
            <Badge 
            key={filter}
            variant="clearable"
            onClear={() => dispatch(removeFilter(filter))}
            >
            {filter}
            </Badge>
          ))}
         
        </Stack>

        <button
        className='link'
        onClick={()=>dispatch(clearFilter())}
        >Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};
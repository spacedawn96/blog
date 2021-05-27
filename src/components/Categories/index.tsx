import { css } from '@emotion/react';
import { SelectContext } from '../../lib/context';
import { useContext } from 'react';

export type CategoriesProps = {};

export default function Categories({}: CategoriesProps) {
  const {
    state: { filterList, activeFilter },
    dispatch,
  } = useContext(SelectContext) as any;

  const onFilterChange = (filter: any) => {
    if (filter === 'ALL') {
      if (activeFilter?.length === filterList?.length) {
        dispatch({ activeFilter: [] });
      } else {
        dispatch({
          activeFilter: filterList.map((filter: any) => (filter as any).name),
        });
      }
    } else {
      if (activeFilter?.includes(filter)) {
        const filterIndex = activeFilter.indexOf(filter);
        const newFilter = [...activeFilter];
        newFilter.splice(filterIndex, 1);
        dispatch({ activeFilter: newFilter });
      } else {
        dispatch({ activeFilter: [...activeFilter, filter] });
      }
    }
  };

  return (
    <main>
      <h1>React Input Checkbox – Themed</h1>

      <fieldset>
        <legend>Playground – What is awesome?</legend>

        <form style={{ display: 'flex', flexDirection: 'column', padding: '10px 10px' }}>
          <div style={{ padding: '10px 0' }}>
            <label htmlFor="myInput">All</label>
            <input
              id="myInput"
              type="checkbox"
              onClick={() => onFilterChange('ALL')}
              checked={activeFilter.length === filterList.length}
            />
          </div>

          {filterList.map((filter: any) => (
            <div style={{ padding: '10px 0' }}>
              <label htmlFor={filter.id}>{filter.name}</label>
              <input
                id={filter.id}
                type="checkbox"
                checked={activeFilter.includes(filter.name)}
                onClick={() => onFilterChange(filter.name)}
              />
            </div>
          ))}
        </form>
      </fieldset>
    </main>
  );
}
const CategoriesStyle = css({});

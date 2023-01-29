export const selectAllPositions = (state) => state.positions;

export const selectVisiblePositions = (state, filters = []) => {
    if (filters.length === 0) return state.positions; //нет фильтров, значит возвращаем имеющиеся стейе позитионс

    //в противном же варианте;
    return state.positions.filter(pos => {
      const posFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);

      return filters.every(filter =>  posFilters.includes(filter)) //проверяет все значения на true/false. То есть, если true - pos получит новый массив, а если false, то нет.
    })
}
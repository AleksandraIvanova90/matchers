import { sortByLife }  from '../app';

test('sortByLife', () => {
    let list = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ];
    let result = sortByLife(list);
    let expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10}

    ];
    expect(result).toEqual(expected)

})
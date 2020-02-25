import React from 'react';
import {render} from '@testing-library/react';
import Episodes from  './Episodes';

test('Episodes.js renders properly', () => {
    const {} = render(<Episodes episodes={[]}/>)
})


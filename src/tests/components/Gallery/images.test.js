import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import store from '../../../redux/store';
import Images from  '../../../components/Gallery/images';

describe('', () => {
  it('renders snapshot', () => {
//     const imagesData = [{
//       likes:  ["r5STXt1zAbTPDWDME96ZEU2JyVo2"],
//       name: 'image-test.jpg',
//       ownerFollowers: [
//         "be8YBQVMDOgkBhb4EwqzGrwojsH3",
// ​        "r5STXt1zAbTPDWDME96ZEU2JyVo2"
//       ],
//       url: "https://firebasestorage.googleapis.com/v0/b/picf-dbd76.appsp…ash.jpg?alt=media&token=400cf939-af69-4a96-b572-5e214480e49d",
//       userUid: "UtSZbTlXOJfMgtZp6J8UVhoVz4Y2",
//       username: "Ana",
//     }];

//     const { container } = render(
//       <Images imagesData={imagesData} />
//     );

//     expect(container.firstChild).toMatchSnapshot();
  });
});
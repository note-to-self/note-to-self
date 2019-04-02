export const getUserFaves = () => Promise.resolve([{ body: 'body', _id: '1234' }]);

export const UpdateUserFaves = () => Promise.resolve([{
  body: 'body1',
  _id: '12345' 
},
{
  body: 'body2',
  _id: '12355'
}]);

export const deleteFromFaves =  () => Promise.resolve([]);

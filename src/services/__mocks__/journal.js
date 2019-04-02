export const getUserNotes = () => Promise.resolve([{
  body: 'banana',
  isRepeated: true,
  repeat: {
    daily: true,
    weekly: false
  },
  _id: '1234'
},
{
  body: 'banana',
  isRepeated: true,
  repeat: {
    daily: true,
    weekly: false
  },
  _id: '1235'
}]);

export const deleteRequest = id => Promise.resolve({
  _id: id,
  body: 'body'
});

export const postNote = () => Promise.resolve({
  date: '05/11/2019',
  time: '03:00 PM',
  privateMessage: false,
  body: 'have a good day',
  repeat: {
    daily: false,
    weekly: false
  },
  isRepeated: false,
});

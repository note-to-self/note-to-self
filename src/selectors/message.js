export const getDate = state => state.message.date;
export const getTime = state => state.message.time;
export const getMessage = state => state.message.body;
export const getIsRepeat = state => state.message.isRepeated;
export const getDaily = state => state.message.repeat.daily;
export const getWeekly = state => state.message.repeat.weekly;
export const getPrivateMessage = state => state.message.privateMessage;



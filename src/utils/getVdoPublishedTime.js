const getVdoPublishedTime = (publishTime) => {
  const currentDate = new Date();
  const releasedDate = new Date(publishTime);
  const differenceInMiliSec = currentDate - releasedDate;
  const dayDiff = (differenceInMiliSec / (1000 * 86400)).toFixed(3);
  if (dayDiff >= 365) {
    return Math.floor(dayDiff / 365) + " year ";
  }
  if ( dayDiff <365 && dayDiff >= 30) {
    return Math.floor(dayDiff / 30) + " month ";
  }
  if (dayDiff < 30 && dayDiff >=1) {
    return Math.round(dayDiff) + " day ";
  }
  if (dayDiff < 1) {
    return Math.ceil(dayDiff * 24) + " hours ";
  }
};
export default getVdoPublishedTime;

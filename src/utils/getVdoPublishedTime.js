const getVdoPublishedTime = (publishTime) => {
  const currentDate = new Date();
  const releasedDate = new Date(publishTime);
  const differenceInMiliSec = currentDate - releasedDate;
  const hoursDiff = Math.floor(differenceInMiliSec / (1000 * 3600));
  return hoursDiff;
};
export default getVdoPublishedTime;

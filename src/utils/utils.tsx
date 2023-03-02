export class Utils {
  public static readonly POSTS_STORAGE_KEY = 'POSTS';
}

export function formatDate(val: any) {
  const dateF = new Date(val);
  const date = dateF.getDate();
  const month = dateF.getMonth() + 1;
  const fullYear = dateF.getFullYear();
  const fullDate = (fullYear <= 9 ? '0' + fullYear : fullYear) + '-' + (month <= 9 ? '0' + month : month) + '-' + (date <= 9 ? '0' + date : date);
  return fullDate + ' at ' + formatHours(val);
}

function formatHours(val: any): string {
  const time = new Date(val);
  const hour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
  const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
  const seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
  return  hour + ':' + minutes + ':' + seconds + 'h';
}
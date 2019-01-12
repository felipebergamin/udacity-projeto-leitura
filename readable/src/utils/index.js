import moment from 'moment';

export function formatDate(timestamp) {
  return moment(timestamp).format('DD MMM YYYY');
}

export function formatDateTime(timestamp) {
  return moment(timestamp).format('DD MMM YYYY, HH:mm');
}

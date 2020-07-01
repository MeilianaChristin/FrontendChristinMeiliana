import {
  watchSaveContact,
  watchFindContactById,
  watchDeleteContactById,
  watchFindContacts,
} from './contacts';
import {all, fork} from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    fork(watchSaveContact),
    fork(watchFindContacts),
    fork(watchFindContactById),
    fork(watchDeleteContactById),
  ]);
}

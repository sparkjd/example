import { Effect } from '@marblejs/core';
import { map, flatMap } from 'rxjs/operators';
import { UsersDao } from '../model';

export const getUserListEffect$: Effect = req$ =>
  req$.pipe(
    flatMap(UsersDao.findAllPublic),
    map(body => ({ body })),
  );

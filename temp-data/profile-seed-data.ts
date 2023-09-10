import { DateTime } from 'luxon'

interface RandomData {
  user_id: number
  first_name: string
  last_name: string
  city: string
  state: string
  birthdate: DateTime
  gender: string
  height: number
  weight: number
  pre_fix: string
  country_code: string
  phone_number: string
  join_date: DateTime
}

export const ProfileData: RandomData[] = [
  {
    user_id: 1,
    first_name: 'Charley',
    last_name: 'Endis',
    city: 'Muncie',
    state: 'Indiana',
    birthdate: DateTime.fromISO('2000-03-07'),
    gender: 'Male',
    height: 170.18,
    weight: 180,
    pre_fix: '+',
    country_code: '1',
    phone_number: '7655555555',
    join_date: DateTime.fromISO('2021-01-01'),
  },
  {
    user_id: 2,
    first_name: 'Sally',
    last_name: 'May',
    city: 'Muncie',
    state: 'Indiana',
    birthdate: DateTime.fromISO('2002-05-10'),
    gender: 'Female',
    height: 160.02,
    weight: 120,
    pre_fix: '+',
    country_code: '1',
    phone_number: '7651111212',
    join_date: DateTime.fromISO('2021-01-01'),
  },
  {
    user_id: 3,
    first_name: 'John',
    last_name: 'Doe',
    city: 'Muncie',
    state: 'Indiana',
    birthdate: DateTime.fromISO('2001-08-07'),
    gender: 'Male',
    height: 180.34,
    weight: 200,
    pre_fix: '+',
    country_code: '1',
    phone_number: '7654445555',
    join_date: DateTime.fromISO('2021-01-01'),
  },
]

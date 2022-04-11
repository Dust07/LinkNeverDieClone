export interface UserInterface {
  username?: string,
  password: string,
  email: string,
  displayName?: string | null,
  photoURL?: string | null,
  user_full_name?: string | null
  privilege?: string | null,
  checkPassword?: string | null
}
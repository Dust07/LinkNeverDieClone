export interface UserInterface {
  username: string,
  password: string,
  email: string,
  user_display_name?: string | null,
  user_full_name?: string | null
  privilege?: string | null,

}
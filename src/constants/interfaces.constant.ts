export interface IUser {
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
}
export interface SearchBoxProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}
export type SpinnerProps = {
  loading: boolean;
};
